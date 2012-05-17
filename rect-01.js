var svg = d3.select("body")
  .append("svg")
    .attr("width", 600)
    .attr("height", 600)
  .append("g")
     .attr("transform", "scale(" + 2 + "," + 2 + ")")
  .append("g")
     .attr("transform", "translate(" + 100 + "," + 50 + ")");

// rect: http://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html

var data = [
  {"x": 62, "y": 25, "height": 190, "width": 16, "fill": "hsl(0, 100%, 65%)"},
  {"x": 35, "y": 35, "height":  30, "width": 50, "fill": "red"},
  {"x": 25, "y": 70, "height":  30, "width": 50, "fill": "#ff8888"},
  {"x": 65, "y": 60, "height":  30, "width": 50, "fill": "#eac"},
  {"x": 85, "y": 70, "height":  30, "width": 50, "fill": "#eeaacc"},
  {"x": 55, "y": 95, "height":  30, "width": 50, "fill": "rgb(255, 0, 0)"}
];

svg.selectAll("rect")
    .data(data)
  .enter().append("rect")
    .attr("x", x)
    .attr("y", y)
    .attr("height", height)
    .attr("width", width)
    .style("fill", fill);

$('rect')
  .css('fill-opacity', 0.9)
  .css('stroke', '#222')
  .css('stroke-width', 2);

function x(d) { return d.x; }
function y(d) { return d.y; }
function height(d) { return d.height; }
function width(d) { return d.width; }
function fill(d) { return d.fill; }
