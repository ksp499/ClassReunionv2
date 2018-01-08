 

import React, { Component } from 'react';
import Comments from './comment.js'


class CommContain extends Component {
  render() {
    return (

<div>
        <div className = "panel panel-default">
          <div className = "panel-heading">
            <h3 className = "panel-title">It's Your Reunion, Lets Talk About It!</h3>
          </div>

 <div className = "panel-body">
            <Comments />
      </div>
      </div>
      </div>
      
        );
      }
}
  export default CommContain;    