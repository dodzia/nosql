// Zaczynamy od dodania do BODY elementu SVG

var svg = d3.select("body")
  .append("svg")
    .attr("width", 610)
    .attr("height", 400);

// Generujemy dane

var dataset = [];

for(var i = 0; i < 5; i++){
  dataset.push({
    "r": 50 + Math.round(Math.random() * 50),
    "hsl": "hsl(" + Math.random() * 360 + ", 100%, 50%)"
  });
}

// Dodajemy elementy SVG do strony

svg.selectAll("circle")
    .data(dataset)
  .enter().append("circle")
    .attr("r",  function(d) { return d.r; })
    .attr("cx", function(d, i) { return 110 + 100 * i; })
    .attr("cy", 200)
    .attr("fill", function(d) { return d.hsl; });

$('circle')
 .css('fill-opacity', 0.6);
