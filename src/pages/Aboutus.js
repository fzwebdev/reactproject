import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';


function Aboutus() {
  let styles1 = {
    width: '100%',
    padding : '0px'
  };
    return ( 
        <div className="gt_wrapper">
          {/* <div className="gt_sub_banner_bg default_width aboutus_banner">
            <div className="container">
              <div className="gt_sub_banner_hdg  default_width">
                <h3>&nbsp;</h3>
                <h3>&nbsp;</h3>
                
                <ul>
                  <li><Link to ="/" >Home</Link></li>
                  <li><Link to ="/about-us" >About Us</Link></li>
                </ul>
              </div>
            </div>
          </div> */}
          <div>
            <img src="./assets/images/sub-banner-bg.jpg" alt="" style={styles1} className="img-thumbnail" />
          </div>
          <div className="gt_main_content_wrap">
            <section className="gt_about_bg">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="gt_about_wrap">
                      <h4 className="title" style={{color: '#ED1C24'}}>Welcome To Swaadhyayan</h4>
                      <p style={{color: '#434348'}}> Swa-adhyayan is the most powerful adaptive and comprehensive E-learning, assessment and sharing platform ever for students to identify their learning style and building their progressive proficiency. Activities and assessments on this Digital Platform are mapped to the latest curriculum which make the learning process more effective and adaptive. The assessment for kindergarten to class 8 generates multiple reports and the progress card of the child depicting various parameters. It enables all the users to share useful resources and learning outcomes which are beneficial to interaction between the school and the child. </p>
                      <h4 className="title" style={{color: '#ED1C24'}}>Why Swa-adhyayan?</h4>
                      <p style={{color: '#434348'}}>Swa-adhyayan enables students to identify their learning style and proficiency profile along with their scholastic and co-scholastic areas of opportunity. The platform engages learners from kindergarten to class 8 entailing a series of activities and assessments based on Nobel Prize-winning concept of Multiple Intelligences which helps in building the progressive proficiency of the child. Multiple Intelligences help identify the most suitable stream selection and career choice for the user.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="gt_about_img">
                      <img src="./assets/images/796.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h4 className="title" style={{color: '#ED1C24'}}>Nobody is Left Behind </h4>
                    <p style={{color: '#434348'}}>The basic aim of education is to include all the persons involved in it. The learning suggestions and the learning outcomes of Swa-adhyayan define roles and responsibilities for the continuous evaluation of the learners. It engages pre-learning diagnosis followed by learning suggestions and learning outcomes there by upholding the fundamental right of every learner to have quality education.</p>
                  </div>
                </div>
              </div>
            </section>
            <section id="teamSection">
              <div className="container">
                <div className="gt_hdg_1">
                  <h3>Meet Our Founders</h3>
                  <span><img src="./assets/images/hdg-01.png" alt="" /></span>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <p><img className="img-fluid" src="./assets/images/Rajiv-Sirs-Father.png" alt="team" /></p>
                          </div>
                          <div className="col-md-8 text-left" style={{marginTop : '30px'}}>
                            <h4 className="card-title">Shri HR Gupta</h4>
                            <span>Brand Ambassador of Swa-Adhyayan</span>
                          </div>
                        </div>
                        <p>A visionary with over five decades of experience in the Indian education system, Shri HR Gupta has held numerous esteemed positions in various educational organisations. The following is a glimpse of the positions held by him.</p>
                        <p>
                          <ol style={{marginLeft : '30px'}}>
                            <li>Secretary, CBSE</li>
                            <li>Controller of Examination (AIPMT), CBSE</li>
                            <li>Joint Secretary (Administration and Academics), CBSE</li>
                            <li>Joint Director, National Open School</li>
                            <li>Member of Governing Body, College of Sciences, University of Delhi</li>
                            <li>Member of Delhi University Court</li>
                          </ol>
                        </p>
                        <p>He has always been a firm believer in transforming the primitive ways in order to make learning and teaching more effective and meaningful. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <p><img className="img-fluid" src="./assets/images/team2.png" alt="team" /></p>
                          </div>
                          <div className="col-md-8 text-left" style={{marginTop : '30px'}}>
                            <h4 className="card-title">Dr. Rajeev Gupta</h4>
                            <span>Founder Director of Swa-Adhyayan</span>
                          </div>
                        </div>
                        <p>Emphasising on his motto “Let’s Change the way India Teaches”, CA Dr. Rajeev Gupta has evolved as a transformational leader. He is a strategic advisor and has worked with individuals, groups, corporations and educational institutions. Having over 20 years of vast global work experience, his training models and empowerment workshops systematically allow a personalised understanding and fulfilment of goals.</p>
                        <p>He has a sacred passion of promoting universal human values in the educational institutions. Through his incomparable values in teacher training programs, parenting programs and multiple intelligence based teaching, Dr. Rajeev Gupta has helped many schools in incorporating value-infused methodologies for successfully fulfilment of their aims and objectives.</p>
                        {/* <p>He has been conferred with various awards and recognitions for his innovation in teaching pedagogies: India’s best Pre School for Innovation in Teaching Delhi’s Best School for outstanding contribution in Child Education India’s Standalone Pre School for Innovation in Early Child Care Pedagogy He is also honoured with "Men with Difference" Award and "Lantern of Knowledge" Award in the field of education. Besides this, he holds the position of Governing Body Member at University of Delhi and a key speaker on various Educational Summits, Leadership Platforms and TV Shows. </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
    );
}

export default Aboutus;