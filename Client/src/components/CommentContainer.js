 

import React, { Component } from 'react';
import Comments from './comment.js'


class CommContain extends Component {
  render() {
    return (

<div>
        <div className = "panel panel-default">
          <div className = "panel-heading">
            <h3 className = "panel-title">What Kind of Party Do You Want?</h3>
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