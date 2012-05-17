// DOROTA PIOTROWSKA 179793 


//Svg w postaci swinki. Najezdzajac na uszka, skladaja sie, oddalajc mysz wracaja do poprzedniego stanu. Najezdzajac na oczy trzeba najechac na kazdy element zeby "zakmnac oczy".


// Funkcje

function rightear() { //zamyka prawe uszko
  d3.select(this)
  .transition()
  .attr("points", "416,138 355,171 377,90");

}    
  
function back2() { //otwiera prawe uszko
  d3.select(this)
  .transition()
  .delay(1000)
  .attr("points", "403,166 428,90 366,118");
}   

function leftear() { //zamyka lewe uszko
  d3.select(this)
  .transition()
  .attr("points", "188,138 249,171 226,90");
 
}   

function back() { //otwiera lewe uszko
  d3.select(this)
  .transition()
  .delay(1000)
  .attr("points", "200,166 173,90 235,118");
}  

function eye() { //zamyka oczka
  d3.select(this)
 .transition()
 .attr('fill', face);
}   


// Wstamiamy obiekt SVG

var svg = d3.select("body")
.append("svg")
.attr("width", 610)
.attr("height", 600);


// Kolory

var nose = ['#FE80BE'];
var face = ['#FEA0CF'];
var border = ['#000'];
var white = ['#FFF'];
var iris = ['#2895EE'];
var reflection = ['#93CAF7'];
var mouth = ['#F36977'];
var stomach = ['#FEC0DF'];


// Prawe oko

var x = 310;
var y = 170;
var ht = -50;
var htht = 30;

// -----------


// Lewe oko

var a = 230;
var b = 170;
var ht2 = -50;
var ht2ht = 30;

// -----------

    

// Usta

var p = 253;
var q = 255;
var ht3 = 50;
var pp = 238;
var qq = 240;
var ht3ht = 50;
 
// -----------   


// Obiekty

svg.append("circle") //twarz
.attr("r", 100)
.attr("cx", 300)
.attr("cy", 200)
.attr('fill', face);
   
svg.append("path")   //oczko prawe
.attr("d", "M "+x+" "+y+" q 30 "+ht+" 60 0")
.attr("stroke", border)
.attr("stroke-width",2)
.attr("stroke-opacity", 1)
.attr("fill", white)
.on("mouseover", eye);

svg.append("path")   
.attr("d", "M "+x+" "+y+" q 30 "+htht+" 60 0")
.attr("fill", white)
.on("mouseover", eye);

svg.append("circle") //teczowka
.attr("r", 13)
.attr("cx", 340)
.attr("cy", 168)
.attr("stroke", border)
.attr("stroke-opacity", 0)
.attr('fill', iris)
.on("mouseover", eye);

svg.append("circle") //odblask
.attr("r", 8)
.attr("cx", 341)
.attr("cy", 169)
.attr("stroke-opacity", 0)
.attr('fill', reflection)
.on("mouseover", eye);

svg.append("circle") //zrenica
.attr("r", 5)
.attr("cx", 340)
.attr("cy", 169)
.attr("stroke-opacity", 0)
.attr('fill', border)
.on("mouseover", eye);

svg.append("path")   //oczko lewe
.attr("d", "M "+a+" "+b+" q 30 "+ht2+" 60 0")
.attr("stroke", border)
.attr("stroke-width",2)
.attr("stroke-opacity", 1)
.attr("fill", white)
.on("mouseover", eye);

svg.append("path")   
.attr("d", "M "+a+" "+b+" q 30 "+ht2ht+" 60 0")
.attr("fill", white)
.on("mouseover", eye);

svg.append("circle") //teczowka
.attr("r", 13)
.attr("cx", 260)
.attr("cy", 168)
.attr("stroke", border)
.attr("stroke-opacity", 0)
.attr('fill', iris)
.on("mouseover", eye);

svg.append("circle") //odblask
.attr("r", 8)
.attr("cx", 259)
.attr("cy", 169)
.attr("stroke-opacity", 0)
.attr('fill', reflection)
.on("mouseover", eye);

svg.append("circle") //zrenica
.attr("r", 5)
.attr("cx", 260)
.attr("cy", 169)
.attr("stroke-opacity", 0)
.attr('fill', border)
.on("mouseover", eye);

svg.append("path")   //usta
.attr("d", "M "+p+" "+q+" q 45 "+ht3+" 90 0")
.attr("fill", mouth);

svg.append("path")   
.attr("d", "M "+pp+" "+qq+" q 60 "+ht3ht+" 120 0")
.attr("fill", face);

svg.append("ellipse") //nos
.attr("ry", 30)
.attr("rx", 50)
.attr("cx", 300)
.attr("cy", 220)
.attr('fill', nose);

svg.append("ellipse") // 1 dziurka od nosa
.attr("ry", 10)
.attr("rx", 5)
.attr("cx", 285)
.attr("cy", 220)
.attr('fill', border);

svg.append("ellipse") // 2 dziurka od nosa
.attr("ry", 10)
.attr("rx", 5)
.attr("cx", 315)
.attr("cy", 220)
.attr('fill', border);

svg.append("polygon")  //ucho lewe
.attr("points", "200,166 173,90 235,118")
.attr('fill', nose)
.on("mouseover", leftear)
.on("mouseout", back);
 
svg.append("polygon")  //ucho prawe
.attr("points", "403,166 428,90 366,118")
.attr('fill', nose)
.on("mouseover", rightear)
.on("mouseout", back2);
  

 // Style za pomoca jquery

$('polygon, circle, ellipse')
.css("stroke", border)
.css('stroke-width', 1)
 .css("stroke-opacity", 1);
