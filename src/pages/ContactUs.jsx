import NavBar from '../components/Navbar'

import '../App.css'
function ContactUs() {
    return (
      <>
      
      <NavBar/>
        <div className='homepageTextContainer'>
          <h3>Contact Us</h3>
        </div>
        <div className='homepageImageContainer'>
          <div className='company-info'>
            <h3>Gopikrishna Arts</h3>
            <h3>Mobile: +91 9172115699</h3>
            <h3>Owner: Gopikrishna<br/> Purushottam Chavan( Artist )</h3>
            <h3>Email: gopikrishnachavan@gmail.com</h3>
            
          </div>

        </div>
        <div className='homepageImageContainer'>
           <img src="AboutUs/GKArts_Gold_Kirit.jpg" alt="Gopikrishna_Chavan" height={"460px"} width={"330px"}/>
        </div>  


      
      </>
    )
  }
  
  export default ContactUs

//   <iframe
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61133.1969763881!2d74.20324707182326!3d16.735590808775637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1701672748753!5m2!1sen!2sin"

//   height="600"
//   style={{
//     border: 0,
//     width: '50vh',  // Set a default width for smaller screens
//     '@media only screen and (max-width: 767px)': {
//       width: '10px',  // Adjust the width for laptops (you can customize the percentage)
//     },
//   }}
//   allowFullScreen={true}
//   loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade"
// ></iframe>