// Zaczynamy od dodania do BODY elementu SVG

var svg = d3.select("body")
   .append("svg")
     .attr("width", 600)
     .attr("height", 400);

d3.json("data/circles.json", function(data) {
  // console.dir(data);
  // dodajemy elementy SVG do strony
  svg.selectAll("circle")
      .data(data)
    .enter().append("circle")
      .attr("r",  r)
      .attr("cx", cx)
      .attr("cy", 200)
      .attr("fill", hsl)
      .attr("fill-opacity", 0.65);
});

function hsl(d)    { return d.hsl; }
function   r(d)    { return d.r; }
function  cx(d, i) { return 100 + 100 * i; }
