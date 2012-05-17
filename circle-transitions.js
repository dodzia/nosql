var config = {
	items: 40, // liczba kolek
	maxR: 90,  // maksymalny promien kola
	svgWidth: 700,
	svgHeight: 520,
	timeout: 2000 // co ile ma sie uruchamiac animacja (mikrosekundy)
}, i, circles, timer, animType = 0;

var svg = d3.select("body")
	.append("svg")
	.attr("width", config.svgWidth)
	.attr("height", config.svgHeight);
				
function randomColor() {
	return "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ","+ parseInt(Math.random() * 255) +")";
}

for(i=0; i<config.items; i++) {
	svg.append("circle")
		.attr("fill", randomColor())
		.attr("r", function() {
			return Math.random() * config.maxR;
		})
		.attr("cx", function() {
			return Math.random() * svg.attr("width");
		})
	.attr("cy", function() {
		var y = Math.random() * svg.attr("height");
		return y;
	})
	.style("opacity", 0.8)
}

function update() {
	var circles = svg.selectAll("circle");
	if(animType < 2) {
		circles.each(function() {
			d3.select(this).transition()
			.duration(config.timeout-100)
			.delay(0)
		    .ease("sin")
			.attr("fill", function() { return randomColor() })
			.attr("cx", function() {
				return /*Math.random() **/ parseInt(svg.attr("width"))/2;
			})
			.attr("cy", function() {
				var y = Math.random() * (config.svgHeight/2) + parseInt(svg.attr("height"))/4;
				return y;
			})
			.attr("r", function() { return Math.random() * config.maxR });
		});
		animType++;
	} else {
		config.timeout /= 2;
		circles.each(function() {
			d3.select(this).transition()
			.duration(config.timeout-100)
			.delay(0)
			.ease("sin")
			.attr("fill", function() { return randomColor() })
			.attr("cx", function() {
				return Math.random() * svg.attr("width")
			})
			.attr("cy", function() {
				var y = Math.random() * svg.attr("height");
				return y;
			})
			.attr("r", function() { return Math.random() * config.maxR });
		});
		animType ++;
		if(animType == 3) {
			config.timeout *= 2;
			animType = 0;
		}
	}
	timer = setTimeout(update,config.timeout);
}

update();
