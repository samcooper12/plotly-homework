
function buildBubbles(data) {

        var trace1 = {
          x: [1, 2, 3, 4],
          y: [10, 11, 12, 13],
          mode: 'markers',
          marker: {
            size: [40, 60, 80, 100]
          }
        };

        var data = [trace1];

        var layout = {
          title: 'Marker Size',
          showlegend: false,
          height: 600,
          width: 600
        };

        Plotly.newPlot('#bubble', data, layout);



}










  function labs(otus) {

  for (var i = 0; i < otus.length; i++) {
    var l = 'OTU ' + otus[i]
    labels.push(l)
  }
  labels = labels.slice(0,10)
  labels = labels.reverse()

  return labels
};

function iter(samples) {
  
    for(i = 0; i < samples.length; i++) {

      var id = samples[i]['id']

      var add = samples[i]['sample_values']

      y.append(add)
      x = samples[i]['otu_ids']
      values = samples[i]['sample_values']
    }

  x = x.slice(0,10)
  x = x.reverse()
  x = toString(x)

  return x, y, values
}

function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

function buildTable(m_id, m_ethnicity, m_gender, m_age, m_location, m_bbtype, m_wfreq) {
  var body = d3.select('body')
  var sidebar = body.select("#sample-metadata")
  var table = sidebar.append('table')
  var tbody = table.append('tbody')
  var trow;
    trow = tbody.append("tr");
    trow.append("td").text("id: " + m_id);
    trow = tbody.append("tr")
    trow.append("td").text("ethnicity: " +m_ethnicity);
    trow = tbody.append("tr")
    trow.append("td").text("gender: " + m_gender);
    trow = tbody.append("tr")
    trow.append("td").text("age: " + m_age);
    trow = tbody.append("tr")
    trow.append("td").text("location: " + m_location);
    trow = tbody.append("tr")
    trow.append("td").text("bbtype: " + m_bbtype);
    trow = tbody.append("tr")
    trow.append("td").text("wfreq: " + m_wfreq);
  // }
}

function ddown(names){
  for(i = 0; i < names.length; i++) {
    var selector = d3.select("select").append("option")
    .text(names[i])
    .attr('value',names[i])
  }
}


function optionChanged(d){
d3.select('option').on('change', function(dataset) {

        // var selector = d3.select("#selDataset")
        // selector.on("change");

        d3.select("#selDataset").on("change", function(d){
          console.log('checkbox changed');
      });
    })
}
    // $("#cep").on("change", hi);
// });
  // dataset = selector.node().value;
  // console.log(dataset)
  // d3.selectAll("select").on("optionChange", updatePlotly);
// }

// function ddown(names) {
//   var dropdownMenu = d3.select('selDataset')

//   console.log(names)
//   // dropdownMenu.append('option')
//   for(i = 0; i < names.length; i++){
//     var n = names[i]
//     var dropDown = d3.select("select").append("option").attr("name", "name-list");
//     // dropdownMenu.append('option').text(names[i])
//     var options = dropdown.selectAll("option")
//       .data(n)
//       .enter()
//       .append("option");
//     // op.value(n)
//   }
// }


function init() {

  //var newData;
  d3.select('#selDataset')
  .on('change', function() {
    var newData = eval(d3.select(this).property('value'));
      //updateLegend(newData);
    console.log(newData)
    buildPlot(newData)
  });
};




function init() {

    var i = 0

    buildPlot(i)

  //var newData;
    d3.select('#selDataset')
        .on('change', function(names) {

              var newData = d3.select(this).property('value');
              console.log(newData)
              var newIndex = function(names)  {
              names.findIndex(newData)

              }

                  function theIndex(){
                    (element) => element === newData
                  }
              buildPlot(newData)
        });
};

var x = [];
var y = []

var labels = [];
var values = [];
var samples
var names 
var meta 
var data


init()

// ../../data
var sample = '../../data/samples.json'

console.log(sample)

function buildPlot(i) {
    Plotly.d3.json(sample, function(data) {



        var i = 0;
        console.log(data)

          var names = data.names

          var samples = data.samples[i]; 
          var sample_values = samples.sample_values
          var otus = samples.otu_ids
          var meta = data['metadata']

          iter(samples)
          labs(otus)

          // labels provided in correct order and count

          x = sample_values.slice(0,10).reverse()
          y = otus.slice(0,10).reverse()

          var trace1 = {
              x: x,
              y: labels,
              name: 'Trace1',
              type: 'bar',
              orientation: 'h',
              marker: {
                color: 'rgb(26,119,182)',
                width: 1
              }
            };
          var data = [trace1];

          var layout = {
              width: 700,
              yaxis: {title: 'Y axis'},
              barmode: 'relative',
              title: '',
              xref: 'paper',
              color: 'red',
              text: 'OTU ',
              bargap :0.2 ,
              xaxis: {
                tickson: "boundaries",
                ticklen: 15,
                showdividers: true,
                dividercolor: 'grey',
                dividerwidth: 2,
                text: 'OTU '
              },
              yaxis: {
                type: 'category',
              },
            };

            var m_id = meta[i]['id']
            var m_ethnicity = meta[i]['ethnicity']
            var m_gender = meta[i]['gender']
            var m_age = meta[i]['age']
            var m_location = meta[i]['location']
            var m_bbtype = meta[i]['bbtype']
            var m_wfreq = meta[i]['wfreq']

            ddown(names) 
            var selector = d3.select("select").append("option")
            var dataset = selector.node().value;

            buildTable(m_id, m_ethnicity, m_gender, m_age, m_location, m_bbtype, m_wfreq)
console.log(data)
console.log(layout)
            Plotly.newPlot('bar', data, layout);
          })
};


buildPlot()

// function buildBubbles(data) {

//         var trace1 = {
//           x: [1, 2, 3, 4],
//           y: [10, 11, 12, 13],
//           mode: 'markers',
//           marker: {
//             size: [40, 60, 80, 100]
//           }
//         };

//         var data = [trace1];

//         var layout = {
//           title: 'Marker Size',
//           showlegend: false,
//           height: 600,
//           width: 600
//         };

//         Plotly.newPlot('#bubble', data, layout);



// }










//   function labs(otus) {

//   for (var i = 0; i < otus.length; i++) {
//     var l = 'OTU ' + otus[i]
//     labels.push(l)
//   }
//   labels = labels.slice(0,10)
//   labels = labels.reverse()

//   return labels
// };

// function iter(samples) {
  
//     for(i = 0; i < samples.length; i++) {

//       var id = samples[i]['id']

//       var add = samples[i]['sample_values']

//       y.append(add)
//       x = samples[i]['otu_ids']
//       values = samples[i]['sample_values']
//     }

//   x = x.slice(0,10)
//   x = x.reverse()
//   x = toString(x)

//   return x, y, values
// }

// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }

// function buildTable(m_id, m_ethnicity, m_gender, m_age, m_location, m_bbtype, m_wfreq) {
//   var body = d3.select('body')
//   var sidebar = body.select("#sample-metadata")
//   var table = sidebar.append('table')
//   var tbody = table.append('tbody')
//   var trow;
//     trow = tbody.append("tr");
//     trow.append("td").text("id: " + m_id);
//     trow = tbody.append("tr")
//     trow.append("td").text("ethnicity: " +m_ethnicity);
//     trow = tbody.append("tr")
//     trow.append("td").text("gender: " + m_gender);
//     trow = tbody.append("tr")
//     trow.append("td").text("age: " + m_age);
//     trow = tbody.append("tr")
//     trow.append("td").text("location: " + m_location);
//     trow = tbody.append("tr")
//     trow.append("td").text("bbtype: " + m_bbtype);
//     trow = tbody.append("tr")
//     trow.append("td").text("wfreq: " + m_wfreq);
//   // }
// }

// function ddown(names){
//   for(i = 0; i < names.length; i++) {
//     var selector = d3.select("select").append("option")
//     .text(names[i])
//     .attr('value',names[i])
//   }
// }


// function optionChanged(d){
// d3.select('option').on('change', function(dataset) {

//         // var selector = d3.select("#selDataset")
//         // selector.on("change");

//         d3.select("#selDataset").on("change", function(d){
//           console.log('checkbox changed');
//       });
//     })
// }
//     // $("#cep").on("change", hi);
// // });
//   // dataset = selector.node().value;
//   // console.log(dataset)
//   // d3.selectAll("select").on("optionChange", updatePlotly);
// // }

// // function ddown(names) {
// //   var dropdownMenu = d3.select('selDataset')

// //   console.log(names)
// //   // dropdownMenu.append('option')
// //   for(i = 0; i < names.length; i++){
// //     var n = names[i]
// //     var dropDown = d3.select("select").append("option").attr("name", "name-list");
// //     // dropdownMenu.append('option').text(names[i])
// //     var options = dropdown.selectAll("option")
// //       .data(n)
// //       .enter()
// //       .append("option");
// //     // op.value(n)
// //   }
// // }


// function init() {

//   //var newData;
//   d3.select('#selDataset')
//   .on('change', function() {
//     var newData = eval(d3.select(this).property('value'));
//       //updateLegend(newData);
//     console.log(newData)
//     buildPlot(newData)
//   });
// };
