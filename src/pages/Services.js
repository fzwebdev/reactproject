import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return ( 
    <div className="gt_wrapper servicepage">
      <div className="gt_sub_banner_bg default_width">
        <div className="container">
          <div className="gt_sub_banner_hdg  default_width">
            <h3>Our Services</h3>
            {/* <ul>
              <li><Link to ="/" >Home</Link></li>
              <li><Link to ="/contact-us" >Contact Us</Link></li>
            </ul> */}
          </div>
        </div>
      </div>
      <section id="services" class="services section-bg">
        <div class="container">
          <div class="section-title">
            <h2 data-aos="fade-in">A glimpse of our Dashboards</h2>
          </div>

          <div class="row">
            <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
              <div class="card">
                <div class="card-img">
                  <img src="./assets/images/services-1.PNG" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="">For Student</a></h5>
                  <p class="card-text">
                  <ul>
                    <li><i class="fa fa-check-circle" aria-hidden="true"></i> SEPT</li>
                    <li><i class="fa fa-check-circle" aria-hidden="true"></i> Learning</li>
                    <li><i class="fa fa-check-circle" aria-hidden="true"></i> Assessment</li>
                    <li><i class="fa fa-check-circle" aria-hidden="true"></i> Practice Test</li>
                    <li><i class="fa fa-check-circle" aria-hidden="true"></i> Know my Progress Report</li>
                  </ul>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
              <div class="card">
                <div class="card-img">
                  <img src="./assets/images/services-3.PNG" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="">For Parent</a></h5>
                  <p class="card-text">
                    <ul>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Student Report</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Notes & Notification</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Practice Lesson for Child</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Share Feedback</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Child's Progress Tracking</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
              <div class="card">
                <div class="card-img">
                  <img src="./assets/images/services-2.PNG" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="">For Teacher</a></h5>
                  <p class="card-text">
                    <ul>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Assign Learing</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Assign Assessment</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Generate Test</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Student Attendance</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Sharing</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Timetable</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Report</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            
            <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
              <div class="card">
                <div class="card-img">
                  <img src="./assets/images/services-4.PNG" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="">For School administration</a></h5>
                  <p class="card-text">
                    <ul>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Managing Teacher </li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Managing Student</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Managing Report</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Managing Attendance</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Managing Timetable</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Sharing</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section id="features" class="features section-bg">
        <div class="container">
          <div class="section-title">
            <h2 data-aos="fade-in">SEPT</h2>
            <h5 data-aos="fade-in">Swa-adhyayan Entrants' Profiling Test</h5>
          </div>

          <div class="row content">
            <div class="col-md-5" data-aos="fade-right">
              <img src="./assets/images/features-2.svg" class="img-fluid" alt="" />
            </div>
            <div class="col-md-7 pt-4" data-aos="fade-left">
              <h3>The Gateway to Login | Participate in Swa-adhyayan's Unified Learning Management System</h3>
              <br></br>
              <p class="font-italic">
                The Adaptive Digital algorithm starts with a pre-assessment test aimed at judging the current level of skills and knowledge of a student.
                This is followed by the display of one of the available Remedial Lessons or by moving the student to the Main Topic. 
              </p>
              <p class="card-text">
                <ul>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Proficiency Profilling </li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Learning Style</li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Multiple Intelligences</li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Brain Dominance</li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Knowing Me</li>
                </ul>
              </p>
            </div>
          </div>

          <div class="row content">
            
            <div class="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
              <h3>Swa-Learning</h3>
              <br></br>
              <p class="font-italic">Swa-adhyayan means Self-Learning!</p>
              <p>The most comprehensive and progressive way to learn anywhere you want.</p>
              <p>The biggest interactive learning curriculum with high quality content in the world of K-8 education comprising 10000+ practice questions.</p>
              <p class="card-text">
                <ul>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Learning by knowledge Scoop </li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Learning by Gamification</li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Competitive Exam </li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> NCERT Kit</li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> 10000+ Practice Questions</li>
                </ul>
              </p>
            </div>
            <div class="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src="./assets/images/features-4.svg" class="img-fluid" alt="" />
            </div>
          </div>

          <div class="row content">
            <div class="col-md-5" data-aos="fade-right">
              <img src="./assets/images/features-3.svg" class="img-fluid" alt="" />
            </div>
            <div class="col-md-7 pt-5" data-aos="fade-left">
              <h3>Swa-Assessment</h3>
              <br></br>
              <p>Our evaluation system is 'Inclusive and Progressive' in a true manner for the evaluation of the child. The parameters are based on Multiple Intelligences fuelled by school curriculum (as per the guidelines of CBSE and all other boards). </p>
              <p class="card-text">
                <ul>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> 10000+ Assessment Questions  </li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Assessment Generator</li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Auto Generate Online Tets </li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Add Questions Manually</li>
                </ul>
              </p>
            </div>
          </div>

          <div class="row content">
            <div class="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
              <h3>Swa-Sharing</h3>
              <br></br>
              <p class="font-italic">
                It empowers teachers, students, parents and the school to share useful resources and learning outcomes. It also enables open forum for ineractions between the school and the parents.
              </p>
              <p><b>Exlusive features of our sharing plateform are:</b></p>
              <p class="card-text">
                <ul>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Audio | Video, Images etc.  </li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Webcast, To Do list, Opinion poll</li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Create event, Learing wall,  </li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Personal Chat messenger</li>
                  <li><i class="fa fa-check-circle" aria-hidden="true"></i> Personalized mail box</li>
                </ul>
              </p>
            </div>
            <div class="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src="./assets/images/features-1.svg" class="img-fluid" alt="" />
            </div>
          </div>

        </div>
      </section>      
    </div>
  );
}

export default Services;