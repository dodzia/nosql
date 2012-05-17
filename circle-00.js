// Zaczynamy od dodania do BODY elementu SVG

var svg = d3.select("body")
  .append("svg")
    .attr("width", 610)
    .attr("height", 400);

// Dodajemy elementy SVG do strony

svg.append("circle")
  .attr("r",  150)
  .attr("cx", 300)
  .attr("cy", 200)
  .attr("stroke-opacity", 0.2);

svg.append("rect")
  .attr("x", 500)
  .attr("y", 50)
  .attr("width", 100)
  .attr("height", 300)
  .attr("fill-opacity", 0.5)
  .attr("stroke-opacity", 0.5);

// Stylizacja (jQuery)

$('circle, rect')
  .css('fill', "#a00")
  .css('fill-opacity', 0.6)
  .css('stroke', '#222')
  .css('stroke-width', 20)
  .on("mouseover", function() {d3.select(this).style("fill", "#00a");})
  .on("mouseout", function() {d3.select(this).style("fill", "#000");});
