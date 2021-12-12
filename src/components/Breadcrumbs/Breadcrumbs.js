import React from 'react';
import './Breadcrumbs.css';

const Breadcrumbs = (props) => {
  
  return (
    <React.Fragment>
      <div className="breadcrumbContainer">
        <span className="breadCrumb">Home</span>
        <span className="breadCrumb navigation">{props.data.title}</span>
      </div>
    </React.Fragment>
  );
};

export default Breadcrumbs;