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
    
  }

  render() {
    return (
      <div id="skills">
        <div id="skillmap">
          <div className="skills-wrapper">
            <div className="skills-sunburst">
            </div>
            <div className="skills-chart">
              <div className="skills-chart-breadcrumb"></div>
            </div>
          </div>
        </div>
      </div>
    )     
  }
}

export default SkillsMap;
