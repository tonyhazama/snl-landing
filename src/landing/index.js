import React from 'react';
import Footer from '../footer';
import Header from '../header';

export default function Landing() {

  return (
    <div style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/background.jpg')`,
      backgroundSize: '100%',
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgrounddivor: '#910100'
    }}>
      <Header />
      <div className='content'>
        <div className='head'>
          <div>
          <a href='https://www.youtube.com/channel/UC8sO6l27VGFjXRX1gaw7q3g' target="_blank">
            Santuy No Life Youtube Channel
          </a>
          </div>
          <div style={{fontFamily: 'paladins'}}>
            Gaming Esport
          </div>
        </div>
        <div className='text'>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div style={{display: 'flex'}}>
            <div className='get-started'>Started</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
