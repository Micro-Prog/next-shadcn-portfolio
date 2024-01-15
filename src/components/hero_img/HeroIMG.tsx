import React from 'react'
import Image from 'next/image';


interface HeroIMGInterface {
  containerStyles?: string | undefined,
  imgSrc: string,
}

const HeroIMG = ({ containerStyles, imgSrc } : HeroIMGInterface) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='developer-image'/>
    </div>
  )
}

export default HeroIMG;