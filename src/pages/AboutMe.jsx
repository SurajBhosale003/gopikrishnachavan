import NavBar from '../components/Navbar'
import '../App.css'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import { useNavigate } from 'react-router-dom'

function AboutMe() {

  // const navigate = useNavigate();
  return (
    <>
    <div>
        <NavBar/>  
        <br/>

        <center>
          <h3 style={ {fontSize:"2rem"}}>My Work</h3>
          </center>
        <div className='BodyOfAboutMe'>
        {/* 1st Work  */}
        <div className='AboutMeItems'>
              <Card sx={{ maxWidth: 345 , minWidth: 300 }} onClick={()=>{window.open('https://maps.app.goo.gl/29LVrrHNvRe2VhEWA', '_blank');}}>
                    <CardMedia
                      sx={{ height: 400 }}
                      image="public/AboutUs/GKArts_Gold_Kirit.jpg"
                      title="GKArts_Gold_Kirit"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Gold Kirit
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Location: Dajiban Peth Rd, Madhavpura, Kamaripeth, New Hubli, Hubballi, Karnataka 580020
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Check Location</Button>
               
                    </CardActions>
                  </Card>
          </div>
{/* 2nd Work  */}
          <div className='AboutMeItems'>
              <Card sx={{ maxWidth: 345 , minWidth: 300 }} onClick={()=>{window.open('https://maps.app.goo.gl/he3EWjm61HQGdqQk7', '_blank');}}>
                    <CardMedia
                      sx={{ height: 400 }}
                      image="public/AboutUs/GKArts_Mukhota.jpg"
                      title="GKArts_Mukhota"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Mukhota
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Location: Raigad Fort,  Shree Shirkai Devi Temple.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Check Location</Button>
               
                    </CardActions>
                  </Card>
          </div>
          {/* 3rd Work */}
          <div className='AboutMeItems'>
              <Card sx={{ maxWidth: 345 , minWidth: 300 }} onClick={()=>{window.open('https://maps.app.goo.gl/Mj6vuVTxXUSThADM6', '_blank');}}>
                    <CardMedia
                      sx={{ height: 400 }}
                      image="public/AboutUs/GKArts_Ears.jpg"
                      title="GKArts_Ears"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Mukut & Ears
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Location: New Sambhaji Nagar Mandal Near Sunita Bakery, Kolhapur.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Check Location</Button>
               
                    </CardActions>
                  </Card>
          </div>
           {/* 4th Work */}
           <div className='AboutMeItems'>
              <Card sx={{ maxWidth: 345 , minWidth: 300 }} onClick={()=>{window.open('https://maps.app.goo.gl/UvBHSzyddQAroWLG6', '_blank');}}>
                    <CardMedia
                      sx={{ height: 400 }}
                      image="public/AboutUs/GKArts_Shri_Ramaling_Mandir.jpg"
                      title="GKArts_Shri_Ramaling_Mandir"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Ornament
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Location: Shri Ramaling Mandir.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Check Location</Button>
               
                    </CardActions>
                  </Card>
          </div>
     {/* 5th Work */}
     <div className='AboutMeItems'>
              <Card sx={{ maxWidth: 345 , minWidth: 300 }} onClick={()=>{window.open('https://maps.app.goo.gl/pmbbZVChL8fsoL417', '_blank');}}>
                    <CardMedia
                      sx={{ height: 400 }}
                      image="public/AboutUs/GKArts_ಆಂಜನೇಯ ಗುಡಿ.jpg"
                      title="GKArts_ಆಂಜನೇಯ ಗುಡಿ"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Murti
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Location: ಆಂಜನೇಯ ಗುಡಿ.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Check Location</Button>
               
                    </CardActions>
                  </Card>
          </div>
           {/* 6th Work */}
     <div className='AboutMeItems'>
              <Card sx={{ maxWidth: 345 , minWidth: 300 }} onClick={()=>{window.open('https://maps.app.goo.gl/oc5MiHU5npdrXhnw5', '_blank');}}>
                    <CardMedia
                      sx={{ height: 400 }}
                      image="public/AboutUs/GKArts_Ambika_Temple_Lake.jpg"
                      title="GKArts_Ambika_Temple_Lake"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      Chaukat
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Location: Ambika Temple Lake Chaukat.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Check Location</Button>
               
                    </CardActions>
                  </Card>
          </div>
          </div>
    </div>
    </>
  )
}

export default AboutMe