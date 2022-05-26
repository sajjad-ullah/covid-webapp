import React from "react";
import './front.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import item1 from '../images/xabout.png'
const StartPage=()=>{
return(
  <>
   <div className="header">
    <div className="uppernav">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <i className="fa fa-phone" aria-hidden="true"> + 1235 2355 98</i>
          </div>
          <div className="col">
            <i className="fa fa-paper-plane" aria-hidden="true"> temp@gmail.com</i>
          </div>
          <div className="col">
            <div className="signup">
              <a>SIGNUP</a> | <a>SIGNIN</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid bottomnav">

      <div className="row">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="col-4 ">
              <h5 className="logo">Mediplus</h5>

            </div>

            <div className="col-8">
              <button className="navbar-toggler menu_button" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>MENU
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Department</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Doctors</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Contact</a>
                  </li>
                  <li>
                    <button type="button" className="btn btn-danger btn_app">
                      Appointment
                    </button>
                  </li>

                </ul>
              </div>
            </div>


          </div>
        </nav>


      </div>

    </div>

    <div className="container main1">
      <div className="row">
        <div className="col">

          <p className="blue">Welcome to Mediplus</p>
          <h1 className="title big">
            We are here<br />for your Care
          </h1>
          <p className="grey">
            Far far away behind the word mountains,far from the countries<br />Vokalia and Consonantia, there live the
            blind texts. Seperated<br />
            they live in Bookmarksgrove.
          </p>
          <button type="button" className="btn btn-primary btn-lg round">
            Make an appointment
          </button>
        </div>

      </div>

    </div>
  </div>
  <div className="container-fluid ">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 ">

          <img className="sideimg" src={item1} width="450" height="500" alt="" />
        </div>
        <div className="col-12 col-md-12 col-lg-6 section2">
          <h1 className="title">We Are <span className="blue">Mediplus</span> A Medical Clinic</h1>
          <p className="grey">
            A small river named Duden flows by their place and supplies it with the necessary reglialia. It is a
            paradisematic country, in which roasted parts of sentences fly into your mouth. It
            is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <div className="for_desktop">

            <button type="button" className="btn btn-primary btn-lg round mobile">
              Make an appointment
            </button>


            <button type="button" className="btn btn-danger btn-lg round mobile">
              Contact us
            </button>

          </div>

        </div>

      </div>
    </div>

  </div>

  <div className="container-fluid d-lg-none services">
    <h2 className="title">
      Our Services
    </h2>
    <div className="container-fluid">
      <div className="row services_block">
        <div className="col-2">
          <i className="fa fa-ambulance services_icon" aria-hidden="true"></i>
        </div>

        <div className="col-10">
          <h3>Emergency Services</h3>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary reglialia.
          </p>
        </div>

      </div>
      <div className="row services_block">
        <div className="col-2">
          <i className="fa fa-user-md services_icon" aria-hidden="true"></i>
        </div>

        <div className="col-10">
          <h3>Qualified Doctors</h3>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary reglialia.
          </p>
        </div>

      </div>
      <div className="row services_block">
        <div className="col-2">
          <i className="fa fa-stethoscope services_icon" aria-hidden="true"></i>
        </div>

        <div className="col-10">
          <h3>Outdoors Checkup</h3>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary reglialia.
          </p>
        </div>

      </div>
      <div className="row services_block">
        <div className="col-2">
          <i className="fa fa-clock-o services_icon" aria-hidden="true"></i>
        </div>

        <div className="col-10">
          <h3>24 Hours Services</h3>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary reglialia.
          </p>
        </div>

      </div>

    </div>

    <div className="container-fluid consultation">
      <h5 className="blue">FREE CONSULTATION</h5>
      <form>
      <input type="email" className="form-control appf" placeholder="First Name" />
        <input type="email" className="form-control appf" placeholder="Last Name" />
        <select className="form-control appf">
          <option>Select Your Services</option>
          <option>Service A</option>
          <option>Service B</option>
          <option>Service C</option>
          <option>Service D</option>
        </select>
        <input type="email" className="form-control appf" placeholder="Phone" />
        <input type="date" className="form-control appf" placeholder="Date" />
        <input type="time" className="form-control appf" placeholder="Time" />
        <input type="email" className="form-control appf" placeholder="Message" />



        <button type="submit" className="btn btn-danger btn-sm round mobile">Appointment</button>



      </form>






    </div>
  </div>
  <div className="container-fluid thirdsec">
    <div className="row">
      <div className="sectiontext2">
        <center>
          <h1 className="title1 white">Your Health is Our Priority</h1>
          <p className="white">We can manage your dream building A small river name Duden flows by their place</p>
          <button type="button" className="btn bg-white btn-lg round">Search Places</button>
        </center>
      </div>
    </div>

  </div>

  <div className="container-fluid medical_types d-lg-none">
    <div className="row row_type">
      <i className="fa fa-stethoscope type_icon" aria-hidden="true"></i>
      <h2>Neurology</h2>
      <p className="grey">Far far away, behind the word mountains.</p>
    </div>
    <div className="row row_type">
      <i className="fa fa-stethoscope type_icon" aria-hidden="true"></i>
      <h2>Surgical</h2>
      <p className="grey">Far far away, behind the word mountains.</p>
    </div>
    <div className="row row_type">
      <i className="fa fa-stethoscope type_icon" aria-hidden="true"></i>
      <h2>Dental</h2>
      <p className="grey">Far far away, behind the word mountains.</p>
    </div>
    <div className="row row_type">
      <i className="fa fa-stethoscope type_icon" aria-hidden="true"></i>
      <h2>Opthalmology</h2>
      <p className="grey">Far far away, behind the word mountains.</p>
    </div>
    <div className="row row_type">
      <i className="fa fa-stethoscope type_icon" aria-hidden="true"></i>
      <h2>Cardiology</h2>
      <p className="grey">Far far away, behind the word mountains.</p>
    </div>
    <div className="row row_type">
      <i className="fa fa-stethoscope type_icon" aria-hidden="true"></i>
      <h2>Traumatology</h2>
      <p className="grey">Far far away, behind the word mountains.</p>
    </div>
    <div className="row row_type">
      <i className="fa fa-stethoscope type_icon" aria-hidden="true"></i>
      <h2>Neuclear Magnetic</h2>
      <p className="grey">Far far away, behind the word mountains.</p>
    </div>
    <div className="row row_type">
      <i className="fa fa-stethoscope type_icon" aria-hidden="true"></i>
      <h2>X-ray</h2>
      <p className="grey">Far far away, behind the word mountains.</p>
    </div>

  </div>


  <div className="container">
    <div className="row sec4">
      <center>
        <h1 className="title">Our Qualified Doctors</h1>
        <p className="grey">
          A small river named Duden flows by their place and supplies it with the necessary reglialia. It is a
          paradisematic country, in which roasted parts of sentences fly into your mouth.
        </p>
      </center>

    </div>
    <div className="row doctors">
      <div className="col-md-3">
        <img src="../images/xdoc-1.png" width="100%" alt="" />
        <center>
          <h4 className="dname">Dr. Lloyd Wilson</h4>
        </center>
        <center>
          <p className="dcat blue">NEUROLOGIST</p>
        </center>
        <center>
          <p className="grey">I am an ambitious workholic, but apart from that, pretty simple person</p>
        </center>
        <center><button type="button" className="btn btn-primary btn-sm round">Book now</button></center>
      </div>
      <div className="col-md-3">
        <img src="../images/xdoc-2.png" width="100%" alt="" />
        <center>
          <h4 className="dname">Dr. Lloyd Wilson</h4>
        </center>
        <center>
          <p className="dcat blue">OPHTHAMOLOGIST
            <center>
              <p className="grey">I am an ambitious workholic, but apart from that, pretty simple person</p>
            </center>

          </p>
        </center>
        <center><button type="button" className="btn btn-primary btn-sm round">Book now</button></center>
      </div>
      <div className="col-md-3">
        <img src="../images/xdoc-3.png" width="100%" alt="" />
        <center>
          <h4 className="dname">Dr. Lloyd Wilson</h4>
        </center>

        <center>
          <p className="dcat blue">DENTIST</p>
        </center>
        <center>
          <p className="grey">I am an ambitious workholic, but apart from that, pretty simple person</p>
        </center>
        <center><button type="button" className="btn btn-primary btn-sm round">Book now</button></center>
      </div>
      <div className="col-md-3">
        <img src="../images/xdoc-4.png" width="100%"  alt=""/>
        <center>
          <h4 className="dname">Dr. Lloyd Wilson</h4>
        </center>
        <center>
          <p className="dcat blue">PEDIATROICIAN</p>
        </center>
        <center>
          <p className="grey">I am an ambitious workholic, but apart from that, pretty simple person</p>
        </center>
        <center><button type="button" className="btn btn-primary btn-sm round">Book now</button></center>
      </div>
    </div>
  </div>
  <div className="container-fluid sec5">
    <div className="container sec5inner">

      <div className="row">
        <div className="col-md-6">
          <p className="white">
            FUN FACTS
          </p>
          <h3 className="title2 white">
            Over 5,100 patients
            trust us
          </h3>
          <button type="button" className="btn btn-lg round sec5button mobile">Make an appointment</button>
        </div>
        <div className="col-md-6">
          <table className="web_stat">
            <tbody>
              <tr className="data">
                <td className="block1 b1">
                  <h3 className="title2 white">
                    <center>30</center>
                  </h3>
                  <p className="white">Years of Experienced</p>
                </td>
                <td className="block2 b2">
                  <h3 className="title2 white">
                    4500
                  </h3>
                  <p className="white">Happy Patients</p>
                </td>

              </tr>
              <tr>
                <td className="block1 b3">
                  <h3 className="title2 white">
                    <center>84</center>
                  </h3>
                  <p className="white">Number of Doctors</p>
                </td>
                <td className="block2 b4">
                  <h3 className="title2 white">
                    <center>300</center>
                  </h3>
                  <p className="white">Number of Staff</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-lg-none">
            <div className="row stat_type">
              <h1>30</h1>

              <p className="white">Years of Experienced</p>
            </div>
            <div className="row stat_type">
              <h1>4500</h1>

              <p className="white">Happy Patients</p>
            </div>
            <div className="row stat_type">
              <h1>84</h1>

              <p className="white">Number of Doctors</p>
            </div>
            <div className="row stat_type">
              <h1>45</h1>

              <p className="white">Number of Staff</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid sec4">
    <div>
      <center>
        <h1 className="title">
          Gets Every Single Updates Here
        </h1>
        <p className="grey">Fa far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      </center>
    </div>
    <div className="container">
      <div className="row pt-4 ">
        <div className="col-md-4 ">
          <img src="../images/ximage_1.png" width="100%" alt="" />
          <p className="red">March 17, 2001 Admin <i className="fa fa-envelope"></i> 2</p>
          <h4 className="title5">Scary Things That You Dont Get Enough Sleep</h4>
          <p className="grey">
            A small river named Duden flows by their place and supplies it with the necessary reglialia.It is a
            paradisematic country</p>
          <button type="button" className="btn btn-primary btn-lg round">Read More</button>

        </div>
        <div className="col-md-4">
          <img src="../images/ximage_2.png" width="100%" alt="" />
          <p className="red">March 17, 2001 Admin <i className="fa fa-envelope"></i> 2</p>
          <h4 className="title5">Scary Things That You Dont Get Enough Sleep</h4>
          <p className="grey">
            A small river named Duden flows by their place and supplies it with the necessary reglialia.It is a
            paradisematic country</p>
          <button type="button" className="btn btn-primary btn-lg round">Read More</button>
        </div>
        <div className="col-md-4">
          <img src="../images/ximage_3.png" width="100%" alt="" />
          <p className="red">March 17, 2001 Admin <i className="fa fa-envelope"></i> 2</p>
          <h4 className="title5">Scary Things That You Dont Get Enough Sleep</h4>
          <p className="grey">
            A small river named Duden flows by their place and supplies it with the necessary reglialia.It is a
            paradisematic country</p>
          <button type="button" className="btn btn-primary btn-lg round">Read More</button>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-md-4">
          <img src="../images/ximage_2.png" width="100%" alt="" />
          <p className="red">March 17, 2001 Admin <i className="fa fa-envelope"></i> 2</p>
          <h4 className="title5">Scary Things That You Dont Get Enough Sleep</h4>
          <p className="grey">
            A small river named Duden flows by their place and supplies it with the necessary reglialia.It is a
            paradisematic country</p>
          <button type="button" className="btn btn-primary btn-lg round">Read More</button>
        </div>
        <div className="col-md-4">
          <img src="../images/ximage_5.jpg.jpeg" width="100%" alt="" />
          <p className="red">March 17, 2001 Admin <i className="fa fa-envelope"></i> 2</p>
          <h4 className="title5">Scary Things That You Dont Get Enough Sleep</h4>
          <p className="grey">
            A small river named Duden flows by their place and supplies it with the necessary reglialia.It is a
            paradisematic country</p>
          <button type="button" className="btn btn-primary btn-lg round">Read More</button>
        </div>
        <div className="col-md-4">
          <img src="../images/xdept-1.png" width="100%" alt="" />
          <p className="red">March 17, 2001 Admin <i className="fa fa-envelope"></i> 2</p>
          <h4 className="title5">Scary Things That You Dont Get Enough Sleep</h4>
          <p className="grey">
            A small river named Duden flows by their place and supplies it with the necessary reglialia.It is a
            paradisematic country</p>
          <button type="button" className="btn btn-primary btn-lg round">Read More</button>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid testimonial-section">
    <div className="container py-5">
      <center>
        <p className="white">READ TESTIMONIALS</p>
        <h1 className="title white">Our Patient Says</h1>
      </center>
    </div>

    <div className="container testimonial-inner">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row text-center">
              <div className="col-md-4 m-auto">
                <img src="images/xperson_3.jpg.jpeg" className="card-img" alt="" />
                <p className="card-line1">Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia</p>
                <p className="card-line2">Jeff Freshman</p>
                <p className="card-line3">PATIENTS</p>
              </div>
              <div className="col-md-4 small-hide">
                <img src="images/xperson_3.jpg.jpeg" className="card-img" alt="" />
                <p className="card-line1">Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia</p>
                <p className="card-line2">Jeff Freshman</p>
                <p className="card-line3">PATIENTS</p>
              </div>
              <div className="col-md-4 small-hide">
                <img src="images/xperson_3.jpg.jpeg" className="card-img" alt="" />
                <p className="card-line1">Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia</p>
                <p className="card-line2">Jeff Freshman</p>
                <p className="card-line3">PATIENTS</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row text-center">
              <div className="col-md-4 m-auto">
                <img src="images/xperson_3.jpg.jpeg" className="card-img" alt="" />
                <p className="card-line1">Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia</p>
                <p className="card-line2">Jeff Freshman</p>
                <p className="card-line3">PATIENTS</p>
              </div>
              <div className="col-md-4 small-hide">
                <img src="images/xperson_3.jpg.jpeg" className="card-img" alt="" />
                <p className="card-line1">Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia</p>
                <p className="card-line2">Jeff Freshman</p>
                <p className="card-line3">PATIENTS</p>
              </div>
              <div className="col-md-4 small-hide">
                <img src="images/xperson_3.jpg.jpeg" className="card-img" alt="" />
                <p className="card-line1">Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia</p>
                <p className="card-line2">Jeff Freshman</p>
                <p className="card-line3">PATIENTS</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row text-center">
              <div className="col-md-4 m-auto">
                <img src="images/xperson_3.jpg.jpeg" className="card-img" alt="" />
                <p className="card-line1">Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia</p>
                <p className="card-line2">Jeff Freshman</p>
                <p className="card-line3">PATIENTS</p>
              </div>
              <div className="col-md-4 small-hide">
                <img src="images/xperson_3.jpg.jpeg" className="card-img" alt="" />
                <p className="card-line1">Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia</p>
                <p className="card-line2">Jeff Freshman</p>
                <p className="card-line3">PATIENTS</p>
              </div>
              <div className="col-md-4 small-hide">
                <img src="images/xperson_3.jpg.jpeg" className="card-img" alt="" />
                <p className="card-line1">Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia</p>
                <p className="card-line2">Jeff Freshman</p>
                <p className="card-line3">PATIENTS</p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    </div>
  </div>




  <div className="container-fluid contact-section">
    <center>
      <h1 className="title">Contact Us</h1>
      <p className="grey">
        Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia
      </p>
    </center>
    <div className="row">
      <div className="col-md-3">
        <div className="grey-back px-4 py-4">
          <span className="contact_icon">

            <i className="fa fa-address-card-o"></i>
          </span>
          <h6>Address</h6>
          <p className="grey-text">
            198 west 12th street, suit 721 New York NY 10016
          </p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="grey-back">
          <span className="contact_icon">

            <i className="fa fa-phone"></i>
          </span>
          <h6>Contact NUmber</h6>
          <p>+ 1235 2355 98</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="grey-back">
          <span className="contact_icon">

            <i className="fa fa-envelope-o"></i>
          </span>
          <h6>Email Address</h6>
          <p>info@yoursite.com</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="grey-back">
          <span className="contact_icon">

            <i className="fa fa-globe"></i>
          </span>
          <h6>Website</h6>
          <p>yoursite.com</p>
        </div>
      </div>
    </div>

    <div className="row grey-background">
      <div className="col-md-6 form-section">
        <form id="contact-form" name="contact-form">
          <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" />

          <input type="text" id="name" name="name" className="form-control" placeholder="Your Email" />

          <input type="text" id="name" name="name" className="form-control" placeholder="Subject" />

          <textarea type="text" id="message" name="message" rows="5" className="form-control md-textarea"
            placeholder="Message"></textarea>
        </form>
        <button type="button" className="btn btn-lg form-button">
          Send Message
        </button>
      </div>


    </div>
  </div>

  <footer>
    <div className="footer-up">
      <div className="custom-card">
        <h3>Mediplus</h3>
        <p className="padding-top">
          Far far away, behind the word mountains, far from the countries.
        </p>
        <div className="social-icons">
          <span>

            <i className="fa fa-facebook"></i>
          </span>

          <span>

            <i className="fa fa-twitter"></i>
          </span>

          <span>

            <i className="fa fa-instagram"></i>
          </span>
        </div>
      </div>
      <div className="custom-card">
        <h3>Departments</h3>
        <ul className="custom-list">
          <li>Neurology</li>
          <li>Opthalmology</li>
          <li>Neuclar Magnetic</li>
          <li>Surgical</li>
          <li>Cardiology</li>
          <li>Dental</li>
        </ul>
      </div>
      <div className="custom-card">
        <h3>Links</h3>
        <ul className="custom-list">
          <li>Neurology</li>
          <li>Opthalmology</li>
          <li>Neuclar Magnetic</li>
          <li>Surgical</li>
          <li>Cardiology</li>
          <li>Dental</li>
        </ul>
      </div>
      <div className="custom-card">
        <h3>Services</h3>
        <ul className="custom-list">
          <li>Neurology</li>
          <li>Opthalmology</li>
          <li>Neuclar Magnetic</li>
          <li>Surgical</li>
          <li>Cardiology</li>
          <li>Dental</li>
        </ul>
      </div>
      <div className="custom-card">
        <h3>Have a Question?</h3>
        <div className="address padding-top">
          <i className="fa fa-map-marker"></i>
          <p className="text">
            203 Fake St. Mountain View, Son Francisco, California USA
          </p>
        </div>
        <div className="address padding-top blue-color">
          <i className="fa fa-phone"></i>
          <p className="text">+2 392 3929 210</p>
        </div>

        <div className="address padding-top blue-color">
          <i className="fa fa-envelope"></i>
          <p className="text">info @your domain.com</p>
        </div>
      </div>
    </div>

    <div className="footer-down">
      <p>
        Copyright ©2022 All rights reserved | This template is made with ♥ by
        <span className="blue-color">Sajjad</span>
      </p>
    </div>
  </footer>


  </>
)
}

export default StartPage;
