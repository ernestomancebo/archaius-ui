import React from 'react';

const navBar = () => (
    <div>
      <ul id="slide-out" className="side-nav fixed">
        <li><a href="#!">First Sidebar Link</a></li>
        <li><a href="#!">Second Sidebar Link</a></li>
      </ul>
      <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
    </div>
);

export default navBar;
