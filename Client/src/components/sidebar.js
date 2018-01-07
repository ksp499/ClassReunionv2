import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.


const Sidebar = () => (
 
    <div className= 'sidebar'>
      
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="./Main">Home</Link></li>
          <li><Link to="./Gallery">Classmates</Link></li>
          <li><Link to="./Pgallery">Parents</Link></li>
          <li><Link to="/Faculty">Faculty</Link></li>
        </ul>

        
      
      
      </div>
    
 
)

export default Sidebar