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
      image: '/afor_digital.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/noelia.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/moure.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/s4vitar.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/afor_digital.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/noelia.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/moure.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/s4vitar.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/afor_digital.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/noelia.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/moure.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/s4vitar.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/afor_digital.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/noelia.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/moure.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/s4vitar.dev.jpg'
    },








    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/afor_digital.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/noelia.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/moure.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/s4vitar.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/afor_digital.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/noelia.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/moure.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/s4vitar.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/afor_digital.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/noelia.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/moure.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/s4vitar.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/midudev.jpeg'
    },
    {
      alt: 'slider',
      image: '/afor_digital.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/noelia.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/moure.dev.jpg'
    },
    {
      alt: 'slider',
      image: '/s4vitar.dev.jpg'
    },



 
  
  ]



  return (
    <div className={styles.slider}>
    <div className={styles.slidetrack}>
      <div className='grid grid-cols-12 gap-2'>
        {carrouselItems.map(({alt, image}, index) => (
      <div className={styles.slide}  key={`${alt}-${index}`}>
        <img src={image} height="100" width="250" alt="" />
      </div>  
      ))}
      </div>
      
    </div>
  </div>
    
  )
}