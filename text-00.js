// Zaczynamy od dodania do BODY elementu SVG

var svg = d3.select("body")
  .append("svg")
    .attr("width", 610)
    .attr("height", 400);

// Dodajemy elementy SVG do strony

svg.append("text")
  .attr("x", 100)
  .attr("y", 50)
  .attr("dy", "1em")
  .attr("text-anchor", "start")
  .attr("fill", "#a00")
  .text("hello world");

// Stylizacja (jQuery)

$('text').css("font", "italic bold 72px/1 Georgia, serif");
