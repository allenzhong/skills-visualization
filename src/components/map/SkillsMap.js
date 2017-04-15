import React from 'react';
import styles from './SkillsMap.css';
import * as d3 from 'd3';

class SkillsMap extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.drawSunburst();
  }

  componentDidUpdate() {
    this.drawSunburst();
  }

 
  drawSunburst() {
    const width = 960;
    const height = 700;
    var formatNumber = d3.format(",d");
    const radius = (Math.min(width, height) / 2) - 10;

    var x = d3.scaleLinear()
    .range([0, 2 * Math.PI]);

    var y = d3.scaleSqrt()
    .range([0, radius]);

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var partition = d3.partition();

    var arc = d3.arc()
        .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x0))); })
        .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x1))); })
        .innerRadius(function(d) { return Math.max(0, y(d.y0)); })
        .outerRadius(function(d) { return Math.max(0, y(d.y1)); });

    d3.select("#skillmap").html('');
    var svg = d3.select("#skillmap").append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

    d3.json("flare.json", function(error, root) {
      if (error) throw error;
      
      root = d3.hierarchy(root);
      root.sum(function(d) { return d.size; });
      svg.selectAll("path")
          .data(partition(root).descendants())
        .enter().append("path")
          .attr("d", arc)
          .style("fill", function(d) { return color((d.children ? d : d.parent).data.name); })
          // .on("click", click)
        .append("title")
          .text(function(d) { return d.data.name + "\n" + formatNumber(d.value); });
    });      
  }


  render() {
    return (
      <div id="skills">
        <div id="skillmap">
        </div>
      </div>
    )     
  }
}

export default SkillsMap;
