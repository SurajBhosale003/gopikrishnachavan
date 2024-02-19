import '../App.css'
import NavBar from '../components/Navbar'
import Slider from '../components/parts/Slider'
import { useNavigate } from 'react-router-dom'



// MUI component

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <NavBar/>
      <Slider/>
        
      <div className="HomePageContainer">
        <div className="HomePageSectionTitle">Welcome to the mesmerizing world of bespoke Gold and Silver Arts at Gopikrishna Chavan Arts!</div>

        <div className="HomePageSectionContent">
            <div className="HomePageListItem">🌟 <strong>Discover Your Divine Connection:</strong> Immerse yourself in the divine
                allure of our meticulously crafted Mukhote, each piece telling a unique story and capturing the spiritual
                essence with every intricate detail.</div>

            <div className="HomePageListItem">👑 <strong>Regal Creations:</strong> Elevate your spiritual experiences with our
                majestic Mukuts fit for royalty. Crafted with precision and adorned with timeless designs, these pieces
                are a testament to the grandeur of devotion.</div>

            <div className="HomePageListItem">🕉️ <strong>Divine Manifestations:</strong> Our Murtis transcend the boundaries
                of art and spirituality. Each creation is a divine manifestation, meticulously sculpted to radiate a sense
                of devotion and purity.</div>

            <div className="HomePageListItem">💎 <strong>Ornaments of Elegance:</strong> Indulge in the luxury of our ornate gold
                and silver ornaments. From traditional to contemporary designs, our collection is a blend of elegance and
                opulence, designed to adorn you with grace.</div>

            <div className="HomePageListItem">🕊️ <strong>Sacred Offerings:</strong> Explore our range of Pooja Sahitya, where
                tradition meets innovation. Our offerings include intricately designed pooja items that add a touch of
                spirituality to your sacred rituals.</div>

            <div className="HomePageListItem">🌈 <strong>Prabhavali - A Gateway to the Divine:</strong> Experience the divine
                aura with our Prabhavalis, enhancing the sacred presence of your deities. Each piece is a masterpiece that
                adds a celestial touch to your worship space.</div>
        </div>

        <div className="HomePageSectionContent">
            <div className="HomePageListItem">✨ <strong>Why Choose Gopikrishna Chavan Arts?</strong></div>
            <ul>
                <li className="HomePageListItem"><strong>Customization:</strong> We understand your unique preferences.
                    Customize your pieces to reflect your personal style and spiritual connection.</li>
                <li className="HomePageListItem"><strong>Quality Craftsmanship:</strong> Our artisans bring years of
                    expertise, ensuring each creation is a masterpiece of the highest quality.</li>
                <li className="HomePageListItem"><strong>Timeless Designs:</strong> Embrace the perfect blend of tradition and
                    modernity with our timeless and versatile designs.</li>
            </ul>
        </div>

        <div className="HomePageButtonContainer">
            <div className="HomePageButton" onClick={()=>{navigate('/gold')}}>Explore Our Collections</div>
        </div>
    </div>

        <div className='homepageImageContainer'>
          <div className='items'>
              <Card sx={{ maxWidth: 345 , minWidth: 300}} onClick={()=>{navigate('/gold')}}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="Slider/Gold.jpg"
                  title="Custom-Gold"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gold
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  We provide Custome design in Gold.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Check In Gallary</Button>
              
                </CardActions>
              </Card>
          </div>
          
          <div className='items'>
              <Card sx={{ maxWidth: 345 , minWidth: 300 }} onClick={()=>{navigate('/gold')}}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="Slider/Silver.jpg"
                      title="Custom-Silver"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Silver
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        We provide Custome design in silver.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Check In Gallary</Button>
               
                    </CardActions>
                  </Card>
          </div>
        </div>

    </div>
  )
}

export default Home