// Jacek Dzido 2012, jdzido@gmail.com
// Pentagram

var star = d3.select("body").
  append("svg").
  attr("width", 640).
  attr("height", 640);

star.append("polygon")
  .attr("points", "156,80 18,124 103,7 103,152 18,35")
  .attr('transform', "translate(50,50), scale(3,3)");

$('polygon')
  .css('fill', '#f00')
  .css({'stroke': "#00f", 'stroke-width': 5})
  .css('fill-rule', 'evenodd');
