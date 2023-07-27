// Step 1: Fetch data from samples.json using D3.js
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(function(data) {
  // Step 2: Create bar chart, bubble chart, and gauge chart functions using the data
  function createBarChart(sampleData) {
    // Find the selected test subject data
    const selectedData = data.samples.find(sample => sample.id === sampleData);

    // Get the top 10 OTUs for the selected test subject
    const top10OTUs = selectedData.otu_ids.slice(0, 10).reverse();
    const top10SampleValues = selectedData.sample_values.slice(0, 10).reverse();
    const top10OTULabels = selectedData.otu_labels.slice(0, 10).reverse();

    // Create the horizontal bar chart
    const trace = {
      x: top10SampleValues,
      y: top10OTUs.map(otuID => `OTU ${otuID}`),
      text: top10OTULabels,
      type: "bar",
      orientation: "h"
    };

    const layout = {
      title: "Top 10 OTUs",
      xaxis: { title: "Sample Values" },
      yaxis: { tickfont: { size: 10 } }
    };

    Plotly.newPlot("bar", [trace], layout);
  }

  // Function to create the bubble chart
  function createBubbleChart(sampleData) {
    // Find the selected test subject data
    const selectedData = data.samples.find(sample => sample.id === sampleData);

    // Create the bubble chart
    const trace = {
      x: selectedData.otu_ids,
      y: selectedData.sample_values,
      text: selectedData.otu_labels,
      mode: 'markers',
      marker: {
        size: selectedData.sample_values,
        color: selectedData.otu_ids,
        colorscale: 'Earth'
      }
    };

    const layout = {
      title: 'Belly Button Biodiversity - Bubble Chart',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Sample Values' },
      showlegend: false
    };

    Plotly.newPlot('bubble', [trace], layout);
  }

  // Function to create the gauge chart
  function createGaugeChart(sampleData) {
    // Find the selected test subject's metadata
    const selectedMetadata = data.metadata.find(metadata => metadata.id === parseInt(sampleData));

    // Create the gauge chart
    const trace = {
      domain: { x: [0, 1], y: [0, 1] },
      value: selectedMetadata.wfreq,
      title: { text: 'Belly Button Washing Frequency <br> Scrubs per Week' },
      type: 'indicator',
      mode: 'gauge+number',
      gauge: {
        axis: { range: [null, 9] },
        steps: [
          { range: [0, 1], color: 'rgb(255, 255, 204)' },
          { range: [1, 2], color: 'rgb(255, 255, 178)' },
          { range: [2, 3], color: 'rgb(255, 255, 153)' },
          { range: [3, 4], color: 'rgb(255, 255, 128)' },
          { range: [4, 5], color: 'rgb(255, 255, 102)' },
          { range: [5, 6], color: 'rgb(255, 255, 77)' },
          { range: [6, 7], color: 'rgb(255, 255, 51)' },
          { range: [7, 8], color: 'rgb(255, 255, 26)' },
          { range: [8, 9], color: 'rgb(255, 255, 0)' }
        ]
      }
    };

    const layout = { width: 600, height: 400, margin: { t: 0, b: 0 } };

    Plotly.newPlot('gauge', [trace], layout);
  }

  // Step 3: Update dropdown menu options with test subject IDs
  const dropdownMenu = d3.select("#selDataset");
  data.names.forEach(function(name) {
    dropdownMenu.append("option").text(name).property("value", name);
  });

  // Step 4: Handle change event of dropdown menu and update charts and metadata
  function optionChanged(newSample) {
    // Find the metadata of the selected test subject
    const selectedMetadata = data.metadata.find(metadata => metadata.id === parseInt(newSample));

    // Display demographic information
    displayMetadata(selectedMetadata);

    // Create/update the bar chart with the selected test subject ID
    createBarChart(newSample);

    // Create/update the bubble chart with the selected test subject ID
    createBubbleChart(newSample);

    // Create/update the gauge chart with the selected test subject ID
    createGaugeChart(newSample);
  }

  // Step 5: Display demographic information of the selected test subject
  function displayMetadata(metadata) {
    // Select the "sample-metadata" div and clear its content
    const metadataDiv = d3.select("#sample-metadata");
    metadataDiv.html("");

    // Loop through the metadata object and append key-value pairs to the div
    Object.entries(metadata).forEach(([key, value]) => {
      metadataDiv.append("p").text(`${key}: ${value}`);
    });
  }

  // Call the function to initialize the dashboard with the first test subject ID
  optionChanged(data.names[0]);

  // Update the plots when a new sample is selected
  dropdownMenu.on("change", function() {
    const newSample = this.value;
    optionChanged(newSample);
  });
});
