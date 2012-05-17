// Konfiguracja
var elementsCount = 30;
var imgWidth = 610;
var imgHeight = 600;
var maxCircleR = 70;
var minCircleR = 10;

function getRandom(min,max){
  var r = Math.floor(Math.random() * max);
  if (r < min) r = min;
  return r;
}
function getRandomColor() {
  return  'rgb(' + (Math.floor(Math.random() * 256)) +
    ',' + (Math.floor(Math.random() * 256)) +
    ',' + (Math.floor(Math.random() * 256)) + ')';
}

// Funkcja animująca obiekty
function animate() {
  d3.select(this)
    .transition()
    .duration(getRandom(2000, 5000))
    .attr('fill', getRandomColor)
    .delay(100)
    .attr("cx", getRandom(0, imgWidth))
    .attr("cy", getRandom(0, imgHeight))
    .attr("r",  getRandom(minCircleR, maxCircleR));
}

// Wstawiamy obiekt SVG
var svg = d3.select("body")
  .append("svg")
    .attr("width", imgWidth)
    .attr("height", imgHeight);

// Dodajemy kółka SVG do strony
for(i = 0; i < elementsCount; i++) {
  svg.append("circle")
  .attr("r", getRandom(minCircleR, maxCircleR))
  .attr("cx", getRandom(0, imgWidth))
  .attr("cy", getRandom(0, imgHeight))
  .attr("stroke-opacity", 0.2)
  .attr('fill', getRandomColor())
  .on("mouseover", animate);
}

// Style za pomoca jQuery
$('circle, rect')
  .css('fill-opacity', 0.6)
  .css('stroke', '#222')
  .css('stroke-width', 15);
