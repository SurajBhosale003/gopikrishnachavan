import NavBar from '../components/Navbar'
import Gallary from '../components/Gallary'
const items = [
  {
    uid: "1",
    name: "Product 1",
    imgUrl: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1701669654/GopiKrishnaa/Silver/pexels-cottonbro-studio-9431876_vsv5mp.jpg",
    category: "category1",
    type: "Silver",
  },
  {
    uid: "2",
    name: "Product 2",
    imgUrl: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1701669654/GopiKrishnaa/Silver/pexels-alexey-demidov-10877316_nlnctb.jpg",
    category: "category2",
    type: "Silver",
  },
  {
    uid: "3",
    name: "Product 3",
    imgUrl: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1701669653/GopiKrishnaa/Silver/pexels-tima-miroshnichenko-6263064_i3988m.jpg",
    category: "category3",
    type: "Silver",
  },
  {
    uid: "4",
    name: "Product 4",
    imgUrl: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1701669653/GopiKrishnaa/Silver/pexels-esra-af%C5%9Far-14509676_khzwm6.jpg",
    category: "category4",
    type: "Silver",
  },
];

function Silver() {
    return (
      <>
      <div>
      <NavBar/>
      <Gallary items={items} />






      <div className='CenterBody'>
{/* Divide 1 */}
        <div className="AboutMeContainer">
          <div className="itemofAboutMe">
          <h5>Gold Kirit<br/>
              Location: Dajiban Peth Rd, Madhavpura, Kamaripeth, New Hubli, Hubballi, Karnataka 580020<br/>
              <a href='https://maps.app.goo.gl/29LVrrHNvRe2VhEWA'>maps.app.goo.gl/29LVrrHNvRe2VhEWA</a></h5>
          </div>

          <div className="itemofAboutMe">
              <img src="AboutUs/GKArts_Gold_Kirit.jpg" alt="GKArts_Gold_Kirit" />
          </div>

        </div>
{/* Divide2 */}
        <div className="AboutMeContainer">
          <div className="itemofAboutMe">
          <h5>Mukhota,<br/>
              Location <br/>
              Raigad Fort<br/>
              Shree Shirkai Devi Temple<br/>
              <a href='https://maps.app.goo.gl/he3EWjm61HQGdqQk7'>maps.app.goo.gl/he3EWjm61HQGdqQk7</a></h5>
          </div>

          <div className="itemofAboutMe">
              <img src="AboutUs/GKArts_Mukhota.jpg" alt="GKArts_Mukhota" />
          </div>

        </div>
{/* Divide3 */}
        <div className="AboutMeContainer">
          <div className="itemofAboutMe">
          <h5>New Sambhaji Nagar Mandal Near Sunita Bakery
        <br/>
              <a href='https://maps.app.goo.gl/Mj6vuVTxXUSThADM6'>maps.app.goo.gl/Mj6vuVTxXUSThADM6</a></h5>
          </div>

          <div className="itemofAboutMe">
              <img src="AboutUs/GKArts_Ears.jpg" alt="GKArts_Ears" />
          </div>

        </div>
{/* Divide4 */}
        <div className="AboutMeContainer">
          <div className="itemofAboutMe">
          <h5>Shri Ramaling Mandir
        <br/>
              <a href='https://maps.app.goo.gl/UvBHSzyddQAroWLG6'>maps.app.goo.gl/UvBHSzyddQAroWLG6</a></h5>
          </div>

          <div className="itemofAboutMe">
              <img src="AboutUs/GKArts_Shri_Ramaling_Mandir.jpg" alt="GKArts_Shri_Ramaling_Mandir" />
          </div>

        </div>
{/* Divide5 */}
<div className="AboutMeContainer">
          <div className="itemofAboutMe">
          <h5>ಆಂಜನೇಯ ಗುಡಿ
        <br/>
              <a href='https://maps.app.goo.gl/pmbbZVChL8fsoL417'>maps.app.goo.gl/pmbbZVChL8fsoL417</a></h5>
          </div>

          <div className="itemofAboutMe">
              <img src="AboutUs/GKArts_ಆಂಜನೇಯ ಗುಡಿ.jpg" alt="GKArts_ಆಂಜನೇಯ ಗುಡಿ" />
          </div>

        </div>
{/* Divide 6*/}
<div className="AboutMeContainer">
          <div className="itemofAboutMe">
          <h5>Ambika Temple Lake Chaukat
        <br/>
              <a href='https://maps.app.goo.gl/oc5MiHU5npdrXhnw5'>maps.app.goo.gl/oc5MiHU5npdrXhnw5</a></h5>
          </div>

          <div className="itemofAboutMe">
              <img src="AboutUs/GKArts_Ambika_Temple_Lake.jpg" alt="GKArts_Ambika_Temple_Lake" />
          </div>

        </div>
{/* Divide */}
    </div>





      </div>
      </>
    )
  }
  
  export default Silver

  