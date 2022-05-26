import React from "react";
import './front.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import item1 from '../images/xabout.png'
const StartPage=()=>{
return(
  <>
   <div className="header">
    <div className="uppernav" >
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <i className="fa fa-phone" aria-hidden="true"> +92 331 5561119</i>
          </div>
          <div className="col">
            <i className="fa fa-paper-plane" aria-hidden="true"> covidapp147@gmail.com</i>
          </div>
          <div className="col">
            <div className="signup">

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid bottomnav" >

      <div className="row">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="col-4 ">
              <h5 className="logo">ST Solutions</h5>

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

    <div className="container main1" >
      <div className="row">
        <div className="col">

          <p className="blue">Welcome to ST Solutions</p>
          <h1 className="title big" style={{color:'white'}}>
            We are here<br />for your Care
          </h1>
          <p style={{color:'black'}}>
            Our main product is basically for the detection and prediction of <br />Covid-19 and also visualize the disease
            by using 3D Model<br />
            of the lungs
          </p>
          <button type="button" className="btn btn-primary btn-lg round">
            Test our Product
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
          <h1 className="title">We Are <span className="blue">ST Solutions</span> A Medical Solutions</h1>
          <p className="grey">
            As our main focus is to make automated tools for doctors and hospitals by using using Machine Learning and
            AI techniques and also our focus is for the 3D world in the medical history show disease visually using
            3D models so easy for doctors to check the disease.
          </p>
          <div className="for_desktop">

            <button type="button" className="btn btn-primary btn-lg round mobile">

            </button>



          </div>

        </div>

      </div>
    </div>

  </div>

  <div className="container-fluid thirdsec">
    <div className="row">
      <div className="sectiontext2">
        <center>
          <h1 className="title1 white">Your Health is Our Priority</h1>

        </center>
      </div>
    </div>

  </div>



  <div className="container">
    <div className="row sec4">
      <center>
        <h1 className="title">Our Product Features</h1>

      </center>

    </div>
    <div className="row doctors">
      <div className="col-md-3">
        <img src="../images/xdoc-1.png" width="100%" alt="" />
        <center>
          <h4 className="dname">AI based Chatbot</h4>
        </center>

        <center>
          <p className="grey">I am an ambitious workholic, but apart from that, pretty simple person</p>
        </center>
            </div>
      <div className="col-md-3">
        <img src="../images/xdoc-2.png" width="100%" alt="" />
        <center>
          <h4 className="dname">Detection of Covid-19</h4>
        </center>


            <center>
              <p className="grey">I am an ambitious workholic, but apart from that, pretty simple person</p>
            </center>



            </div>
      <div className="col-md-3">
        <img src="../images/xdoc-3.png" width="100%" alt="" />
        <center>
          <h4 className="dname">Tells the Percentage of Damage lungs</h4>
        </center>


        <center>
          <p className="grey">I am an ambitious workholic, but apart from that, pretty simple person</p>
        </center>
        </div>
      <div className="col-md-3">
        <img src="../images/xdoc-4.png" width="100%"  alt=""/>
        <center>
          <h4 className="dname">3D Visualization of Disease</h4>
        </center>

        <center>
          <p className="grey">I am an ambitious workholic, but apart from that, pretty simple person</p>
        </center>
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
          Flow of the Product Working
        </h1>
        <p className="grey">Here is the flow of the working of the product</p>
      </center>
    </div>
    <div className="container">
      <div className="row pt-4 ">
        <div className="col-md-4 ">
          <img src="../images/ximage_1.png" width="100%" alt="" />

          <h4 className="title5">AI Based Chatbot</h4>
          <p className="grey">
           First of all user will chat with the AI based chatbot which will take basic information from
           the user and also the symptoms for the covid-19
           </p>
          <button type="button" className="btn btn-primary btn-lg round"></button>

        </div>
        <div className="col-md-4">
          <img src="../images/ximage_2.png" width="100%" alt="" />

          <h4 className="title5">Upload Data</h4>
          <p className="grey">
            The next step is to upload the data which will contain the chest X-rays, HRCT and other lab reports.
            </p>
          <button type="button" className="btn btn-primary btn-lg round"></button>
        </div>
        <div className="col-md-4">
          <img src="../images/ximage_3.png" width="100%" alt="" />

          <h4 className="title5">Machine Learning Model</h4>
          <p className="grey">
            After uploading data the next step is that the data is send to ML model where the data from the lap reports
            will be extracted using OCR and if the HRCT video is given then it will converted into frames.
            </p>
          <button type="button" className="btn btn-primary btn-lg round"></button>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-md-4">
          <img src="../images/ximage_2.png" width="100%" alt="" />

          <h4 className="title5">Detection of Disease</h4>
          <p className="grey">
            Now all the data is used for the detection (X-ray, HRCT, lab reports, symptoms)
            </p>
          <button type="button" className="btn btn-primary btn-lg round"></button>
        </div>
        <div className="col-md-4">
          <img src="../images/ximage_5.jpg.jpeg" width="100%" alt="" />

          <h4 className="title5">Opacity of Damage lungs and Suggestions</h4>
          <p className="grey">
            Now the next step is that we will check that how much lungs are damaged and then we will
            suggest according to that and tells the severity of the disease.
            </p>
          <button type="button" className="btn btn-primary btn-lg round"></button>
        </div>
        <div className="col-md-4">
          <img src="../images/xdept-1.png" width="100%" alt="" />

          <h4 className="title5">3D Modeling</h4>
          <p className="grey">
           In this step we will show the 3D model of the lungs on which the infected area will be highlighted
           </p>
          <button type="button" className="btn btn-primary btn-lg round"></button>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid testimonial-section">
    <div className="container py-5">
      <center>
        <p className="white">READ TESTIMONIALS</p>
        <h1 className="title white">What Our Customer Says</h1>
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

          </p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="grey-back">
          <span className="contact_icon">

            <i className="fa fa-phone"></i>
          </span>
          <h6>Contact NUmber</h6>
          <p>+92 331 5561119</p>
          <p>+92 335 0552435</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="grey-back">
          <span className="contact_icon">

            <i className="fa fa-envelope-o"></i>
          </span>
          <h6>Email Address</h6>
          <p>covidapp147@gmail.com</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="grey-back">
          <span className="contact_icon">

            <i className="fa fa-globe"></i>
          </span>
          <h6>Website</h6>
          <p></p>
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
        <h3>ST Solutions</h3>
        <p className="padding-top">

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
          <li>Machine Learning</li>
          <li>Chatbot</li>
          <li>Web Development</li>
          <li></li>
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
