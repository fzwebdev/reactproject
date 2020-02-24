import React, { Component } from 'react';

function Solution(props) {
  const content = props.posts.map((post) =>
    <div key={post.id} className="col-md-3">
      <div className={`gt_main_services ${post.classname}`}>
        <i>
          <img src={`./assets/images/${post.iconName}`} style={{width:'70px'}} alt="" />
        </i>
        <h5>{post.title}</h5>
        <p>{post.content}</p>
        <a  className={post.classname} href="#"> <i className="fa fa-arrow-right"></i></a>
      </div>
    </div>
  );
  return (
      <div className="gt_servicer">
        <div className="container">
          <div className="row">
            {content}
          </div>
         </div> 
      </div>
  );
}

export default Solution;