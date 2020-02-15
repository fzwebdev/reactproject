import React, { Component } from 'react';

function Offersection(props) {
  const content = props.posts.map((post) =>
    <div key={post.id} className="col-md-4 col-sm-6">
      <div className="gt_wht_offer_wrap mb">
        <i className={`icon-meat}`}>
          <img src={`./assets/images/${post.iconName}`} style={{width:'90px'}} alt="" />
        </i>
        <div className="gt_wht_offer_des">
          <h5>{post.title}</h5>
          <span className={post.classname}></span>
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
  return (
    <div>
    
    <section className="gt_wht_offer_bg">
      <div id="latestnews" className="row-fluid mb-5">
      <div className="container-fluid">
      <div className="gt_hdg_1 white_hdg">
      <h3 className="text-center text-primary">Swa-adhyayan</h3>
      <p className="text-primary">Adaptive Digital Platform</p>
      </div>
        <div className="col-md-12">
        <div className="gt_testi2_wrap">
          <p>Swa-adhyayan is the most powerful adaptive
and comprehensive E-learning, assessment
and sharing platform ever for students
to identify their learning style and building
their progressive proficiency. Activities and
assessments on this Digital Platform are
mapped to the latest curriculum which make
the learning process more effective and
adaptive. The assessment for kindergarten
to class 8 generates multiple reports and
the progress card of the child depicting
various parameters. It enables all the users
to share useful resources and learning
outcomes which are beneficial to interaction
between the school and the child.</p>
</div>
      
      </div>
      </div>
      </div>
      <div className="container">
        <div className="gt_hdg_1">
          <h3 className="mt">WHAT WE OFFER</h3>
          {/* <p>Aenean commodo ligula eget dolor. Aenean massa. <span>elit, eget nibh etlibura.</span></p> */}
          <span><img src="./assets/images/hdg-01.png" alt=""/></span>
        </div>
        <div className="row">
          {content}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Offersection;