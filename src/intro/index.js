import React from 'react'
import Header from '../header'

const cardProps = {
  width: '920',
  height: '480'
}

export default function index() {
  return (
    <div style={{
      height: '100%',
      width: '100%',
      }}>
      
      <Header />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100% - 80px)',
        width: '100%',
        background: 'linear-gradient(90deg, rgba(242,97,0,1) 0%, rgba(240,210,74,1) 100%)'
      }}>
        <div style={{...cardProps, backgroundColor: '#000'}}>
          <iframe 
            width={920}
            height={480}
            style={{width: '-webkit-fill-available'}}
            src="https://www.youtube.com/embed/B-u7wtWCKpw?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            
          </iframe>
        </div>
      </div>
    </div>
  )
}
