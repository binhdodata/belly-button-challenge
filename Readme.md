 <h1>Belly Button Biodiversity Dashboard</h1>

  <h2>Code Source and Attribution</h2>
  <p>The code for the Belly Button Biodiversity Dashboard was developed as part of an assignment for the Interactive Web Visualizations course. The code includes elements of data visualization using Plotly.js and D3.js libraries.</p>

  <h2>Code Location</h2>
  <p>The main JavaScript code that creates the dashboard, including the bar chart, bubble chart, gauge chart, and handling the dropdown menu change event, can be found in the following file:</p>
  <p><code>static/js/app.js</code></p>

  <h2>Data Source</h2>
  <p>The data used for the Belly Button Biodiversity Dashboard is sourced from the following URL:</p>
  <p><a href="https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json" target="_blank">Data Source: samples.json</a></p>

  <h2>Dependencies</h2>
  <p>The dashboard relies on the following external libraries:</p>
  <ul>
    <li><a href="https://d3js.org/d3.v7.min.js" target="_blank">D3.js v7.0.0</a></li>
    <li><a href="https://cdn.plot.ly/plotly-latest.min.js" target="_blank">Plotly.js v1.66.0</a></li>
    <li><a href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" target="_blank">Bootstrap v3.3.7</a></li>
  </ul>
  <p>The reason for using these libraries is as follows:</p>
  <ul>
    <li><strong>D3.js:</strong> D3.js is a powerful JavaScript library for manipulating documents based on data. It is used for handling data and binding it to the DOM elements, which is essential for creating data-driven visualizations like the bar chart and bubble chart.</li>
    <li><strong>Plotly.js:</strong> Plotly.js is a graphing library that provides a simple and elegant way to create interactive charts and visualizations. It is used for creating the bar chart and bubble chart with ease, and it offers various customization options and interactivity.</li>
    <li><strong>Bootstrap:</strong> Bootstrap is a popular CSS framework that provides a responsive grid system and pre-designed CSS styles for creating visually appealing and mobile-friendly web pages. It is used for the layout and styling of the dashboard components, ensuring a consistent and user-friendly interface.</li>
  </ul>

  <h2>Instructions</h2>
  <ol>
    <li>Clone the repository to your local machine.</li>
    <li>Open the <code>index.html</code> file in a web browser.</li>
    <li>Use the dropdown menu to select a test subject ID, and the charts will update accordingly.</li>
    <li>The demographic information of the selected test subject will be displayed below the charts.</li>
  </ol>

  <h2>Creating the Bar Chart</h2>
  <p>The bar chart displays the top 10 operational taxonomic units (OTUs) found in the selected individual. To create the bar chart:</p>
  <ol>
    <li>Retrieve the sample data of the selected individual from the <code>samples</code> array in the <code>data</code> object.</li>
    <li>Extract the top 10 OTU IDs, sample values, and OTU labels from the sample data.</li>
    <li>Create a trace using the extracted data, where the <code>x</code> axis represents the sample values, the <code>y</code> axis represents the OTU IDs (formatted as "OTU [ID]"), and the <code>text</code> property contains the OTU labels.</li>
    <li>Set the trace type to "bar" and the orientation to "h" for a horizontal bar chart.</li>
    <li>Create a layout for the chart, including a title and axis labels.</li>
    <li>Use Plotly.newPlot() to create the bar chart in the HTML div with the id "bar".</li>
  </ol>

  <h2>Creating the Bubble Chart</h2>
  <p>The bubble chart displays each sample as a bubble, where the size of the bubble corresponds to the sample value, the color represents the OTU ID, and the text contains the OTU label. To create the bubble chart:</p>
  <ol>
    <li>Retrieve the sample data of the selected individual from the <code>samples</code> array in the <code>data</code> object.</li>
    <li>Create a trace using the sample data, where the <code>x</code> axis represents the OTU IDs, the <code>y</code> axis represents the sample values, and the <code>text</code> property contains the OTU labels.</li>
    <li>Set the trace type to "markers" for a scatter plot-like chart.</li>
    <li>Assign the sample values to the <code>marker.size</code> property to determine the size of the bubbles.</li>
    <li>Assign the OTU IDs to the <code>marker.color</code> property to determine the color of the bubbles.</li>
    <li>Use a suitable colorscale for the bubbles to represent different OTU IDs.</li>
    <li>Create a layout for the chart, including a title and axis labels.</li>
    <li>Use Plotly.newPlot() to create the bubble chart in the HTML div with the id "bubble".</li>
  </ol>

  <h2>Creating the Gauge Chart</h2>
  <p>The gauge chart displays the weekly washing frequency of the selected individual. The chart consists of a dial that indicates the number of weekly scrubs. To create the gauge chart:</p>
  <ol>
    <li>Retrieve the metadata of the selected individual from the <code>metadata</code> array in the <code>data</code> object.</li>
    <li>Extract the washing frequency (wfreq) from the metadata.</li>
    <li>Create a trace using the washing frequency, where the <code>value</code> property represents the frequency to be displayed on the dial.</li>
    <li>Set the trace type to "indicator" and the mode to "gauge+number".</li>
    <li>Define the gauge properties, including the axis range, colors for different ranges, and steps to display different colors.</li>
    <li>Create a layout for the chart, including a title.</li>
    <li>Use Plotly.newPlot() to create the gauge chart in the HTML div with the id "gauge".</li>
  </ol>

  <h2>Note on Code Attribution</h2>
  <p>The code within this project was developed independently by Binh Do.</p>
