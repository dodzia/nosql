// Zaczynamy od dodania do BODY elementu SVG

var svg = d3.select("body").append("svg")
 .attr("width", 600)
 .attr("height", 400);

// Dodajemy elementy SVG do strony

svg.append("line")
 .attr("x1", 50)
 .attr("y1", 300)
 .attr("x2", 500)
 .attr("y2", 50)
 .attr("stroke-opacity", 0.6);

// Stylizacja (jQuery)

$('line')
  .css('stroke', '#a00')
  .css('stroke-width', 20);
