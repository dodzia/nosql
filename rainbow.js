// Zaczynamy od dodania do BODY elementu SVG

var svg = d3.select("body")
  .append("svg")
    .attr("width", 610)
    .attr("height", 400);

// Dodajemy elementy SVG do strony

var kolory = ['#fff', '#609', '#00f', '#0ff',
    '#0f0', '#ff0','#f80','#f00'];

// punkt początkowy

var x = 200;
var y = 450;

var linewd = 30;
var ht = -300;

for(var i = 7; i > 1; i--) {
    svg.append("path")
    .attr("d", "M "+x+" "+y+" q 100 "+ht+" 200 0")
    .attr("stroke", kolory[i])
    .attr("stroke-width", i*linewd)
    .attr("fill", "none");
}

svg.append("path")
  .attr("d", "M "+x+" "+y+" q 100 "+ht+" 200 0")
  .attr("stroke", kolory[1])
  .attr("stroke-width", (linewd*2)/3)
  .attr("fill", kolory[0]);
