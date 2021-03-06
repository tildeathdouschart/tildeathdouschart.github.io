makeTop3_2Plot();

function makeTop3_2Plot() {
  d3.csv('visualizations/top3/top3_2.csv', function(data){makeTop3_2Scatter(data)}); //enter file name
};

function makeTop3_2Scatter(dataset) {
  var x = [];
  var y = [];

  for (var i = 0; i < dataset.length - 1; i++) {
    row = dataset[i];
    x.push(row['top3_2']); //enter name of X column values
    y.push(row['LCI']); //enter name of Y column values
  }

  var trace = {
    x: x, 
    y: y,
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: '#6de8e0',
      opacity: 0.5,
      size: 20,
      line: {
        color: '#21918a',
        width: 2
      }
    }
  };

  var data = [trace];
  
  var layout = {
    title: "Marital Status in July 2014 (Age 23) vs. LCI", //enter title
    xaxis: {
      title: "Marital Status in July 2014 (Age 23)", 
      tickangle: -35}, //enter x axis label
    yaxis: {title: "LCI"}, //enter y axis label
    font: {size: 8}
  };

  Plotly.newPlot('top3_2', data, layout)
}