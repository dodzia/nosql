var format = d3.time.format("%b %Y");

var margin = {top: 40, right: 40, bottom: 40, left: 40},
    width = 960,
    height = 500;

var x = d3.time.scale()
    .range([0, width - margin.left - margin.right]);

var y = d3.scale.linear()
    .range([height - margin.top - margin.bottom, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickPadding(8);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("right")
    .tickPadding(8);

var area = d3.svg.area()
    .x(function(d) { return x(d.date); })
    .y0(y.range()[0])
    .y1(function(d) { return y(d.price); });

d3.csv("data/stocks.csv", function(data) {

  data.forEach(function(d) {
    d.price = +d.price;
    d.date = format.parse(d.date);
  });

  data = data.filter(function(d) {
    return d.symbol == "S&P 500";
  });

  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.price; })]).nice();

  var svg = d3.select("body").append("svg")
      .datum(data)
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("g")
      .attr("transform", "translate(0," + y.range()[0] + ")")
      .call(xAxis);

  svg.append("g")
      .attr("transform", "translate(" + x.range()[1] + ")")
      .call(yAxis);

  svg.append("path")
      .attr("fill", "steelblue")
      .attr("d", area);

});
