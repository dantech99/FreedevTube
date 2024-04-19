'use client'
import styles from './styles.module.css'

export default function Carrousel() {

  interface carrouselProps {
    alt: string;
    image: string;
  }

  const carrouselItems: carrouselProps[] = [
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },



    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
  
  ]



  return (
    <div className={styles.slider}>
    <div className={styles.slidetrack}>
      <div className='grid grid-cols-12 gap-2'>
        {carrouselItems.map(({alt, image}) => (
      <div className={styles.slide} key={alt}>
        <img src={image} height="100" width="250" alt="" />
      </div>  
      ))}
      </div>
      
    </div>
  </div>
    
  )
}