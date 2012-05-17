// Zaczynamy od dodania do BODY elementu SVG

var svg = d3.select("body")
   .append("svg")
     .attr("width", 610)
     .attr("height", 400);

d3.csv("data/circles.csv", function(data) {
  data.forEach(function(d) {
    d.r = parseInt(d.r);
  });
  //console.dir(data);

  // dodajemy elementy SVG do strony
  svg.selectAll("circle")
      .data(data)
    .enter().append("circle")
      .attr("r",  function(d) { return d.r; })
      .attr("cx", function(d, i) { return 110 + 100 * i; })
      .attr("cy", 200)
      .attr("fill", function(d) { return d.hsl; })
      .attr("fill-opacity", 0.4);
});
