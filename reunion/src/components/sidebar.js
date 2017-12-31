import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.


const Sidebar = () => (
 
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '15%',
        heigth: '100%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="./Main">Home</Link></li>
          <li><Link to="./Gallery">Classmates</Link></li>
          <li><Link to="/Teachers">Teachers</Link></li>
          <li><Link to="/Music">Music</Link></li>
        </ul>

        
      
      
      </div>
    </div>
 
)

export default Sidebar