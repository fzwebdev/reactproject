import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="gt_newsltr_bg default_width">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="gt_newsltr_wrap">
                <form>
                  <input type="text" placeholder="Enter your email" />
                  <input className="button_style_1 btn_lg" type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gt_footer_bg default_width">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="gt_office_wrap default_width">
                <div class="gt_foo_about widget">
                  <h5>About Kidscenter</h5>
                  <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin nibh vel velit auctor aliquet.</p>
                  <ul>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="foo_col_outer_wrap default_width">
                <div class="row">
                  <div class="col-md-12 col-sm-6">
                    <div class="widget">
                      <h5>Our Address</h5>
                      <ul class="gt_team1_contact_info">
                        <li><i class="fa fa-map-marker"></i>14350 60th St North Clearwater FL. 33760 </li>
                        <li><i class="fa fa-phone"></i>1-677-124-44227 </li>
                        <li><i class="fa fa-envelope"></i> <a href="#">info@kidscenter.com</a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;