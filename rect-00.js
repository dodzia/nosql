// Zaczynamy od dodania do BODY elementu SVG

var svg = d3.select("body")
  .append("svg")
    .attr("width", 510)
    .attr("height", 360);

// Dodajemy elementy SVG do strony

svg.append("rect")
  .attr("x", 100)
  .attr("y", 50)
  .attr("width", 400)
  .attr("height", 300)
  .attr("fill-opacity", 0.5)
  .attr("stroke-opacity", 0.5);

// Stylizacja (jQuery)

$('circle, rect')
  .css('fill', "#a00")
  .css('fill-opacity', 0.6)
  .css('stroke', '#222')
  .css('stroke-width', 20)
  .css("stroke-dasharray", [15, 10, 5, 10, 15])
  .on("mouseover", function() { d3.select(this).style("fill", "#00a"); })
  .on("mouseout", function() { d3.select(this).style("fill", "#000"); });

