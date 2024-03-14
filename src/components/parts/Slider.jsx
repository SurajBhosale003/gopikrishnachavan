import { Slide } from 'react-slideshow-image';
import '../../App.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '80vh',
  width: "100%",
}

const slideImages = [
  {
    url: 'Slider/Main.jpg',
    caption: 'GopikrishnaChavan',
    caption1: 'Custom jewellery'
  },
  {
    url: 'Slider/Gold.jpg',
    caption: 'Custom Gold',
    caption1: 'Gold'
  },
  {
    url: 'Slider/Silver.jpg',
    caption: 'Custom Silver',
    caption1: 'Silver'
  },
];

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide indicators={true}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className='home_slider'
              style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}
            >
              <div className='home_slider_captions'>
                <p>{slideImage.caption}</p>
                <p>{slideImage.caption1}</p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slider;
