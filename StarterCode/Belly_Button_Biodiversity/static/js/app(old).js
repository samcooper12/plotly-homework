var bar = d3.select('#bar')

var sample = '../../data/samples.json'

							// ! ! ! the svg var needs an html element

								// var svg = d3.select("svg"),
								//         margin = 200,
								//         width = svg.attr("width") - margin,
								//         height = svg.attr("height") - margin;

var names =  {};
var meta = {};
var samples = {};


function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

// function buildPlot() {
//   d3.json(sample).then(function(data) {

    // Grab values from the data json object to build the plots
    // var names = data.names;
    // var meta = data.metadata;
    // var samples = data.samples;

    // var val = data.metadata.sample_values

// set the dimensions and margins of the graph

    var margin = {top: 20, right: 30, bottom: 40, left: 90},
    	width = 460 - margin.left - margin.right,
    	height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page

    var svg = d3.select("#bar")
  		.append("svg")
    	.attr("width", width + margin.left + margin.right)
    	.attr("height", height + margin.top + margin.bottom)
  		.append("g")
    	.attr("transform","translate(" + margin.left + "," + margin.top + ")");

// parse the data 

function buildPlot() {
  d3.json(sample).then(function(data) {

    var names = data.names;
    var meta = data.metadata;
    var samples = data.samples;

    var val = data.metadata.sample_values

// x  axis

	var x = d3.scaleLinear()
		// .domain([0, 13000])
        .domain([0, 100])
		.range([ 0, width]);
	svg.append("g")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x))
		.selectAll("text")
		.attr("transform", "translate(-10,0)rotate(-45)")
		.style("text-anchor", "end");

	var y = d3.scaleBand()
    	.range([ 0, height ])
    	.domain(samples.map(function(d) { return d.name; }))
    	.padding(.1);
  	svg.append("g")
    	.call(d3.axisLeft(y))

    svg.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.names); })
    w
    .attr("height", y.bandwidth() )
    .attr("fill", "#69b3a2")


//trace1

    // var trace1 = {
    // 	type: "bar",
    //   	//mode: "lines",
    //   	name: 'test',
    //   	x: names,
    //   	y: val,
    //   	}

    // data = trace1


//layout

	// var layout = {
 //      title: `layouts`,
 //      xaxis: {
 //        range: [0, 153],
 //        type: "date"
 //      },
 //      yaxis: {
 //        autorange: true,
 //        type: "linear"
 //      }
 //  	}

	// Plotly.newPlot("sample-metadata", data, layout);

})}

    // Plotly.newPlot("plot", data, layout);

// buildPlot(sample)

// console.log('outside of primise')
// console.log(data)

// console.log(data)

// var data = d3.json(data).then(function(data) {
//   console.log(data);
// });

// console.log(data)

// console.log(toJSON(data))