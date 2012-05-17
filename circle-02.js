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
   .attr("stroke-opacity", 0.2)
   .on("mousedown", animate);

function animate() {
  d3.select(this)
    .transition()
      .duration(2000)
      .attr("r", 60)
    .transition()
      .delay(2000)
      .duration(2000)
      .attr("r", 150);
}

// Stylizacja (jQuery)

$('circle, rect')
  .css('fill', "#a00")
  .css('fill-opacity', 0.6)
  .css('stroke', '#222')
  .css('stroke-width', 20);
