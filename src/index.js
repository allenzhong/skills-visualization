import _ from 'lodash';
import d3 from 'd3';

function component() {
    let ele = document.createElement('div');
    ele.innerHTML = _.join(['Hello World NZ'], ' ');
    return ele;
}
document.body.appendChild(component());
