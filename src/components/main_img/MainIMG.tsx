import React from 'react'
import Image from 'next/image';


interface MainIMGInterface {
  containerStyles?: string | undefined,
  imgSrc: string,
}

const MainIMG = ({ containerStyles, imgSrc } : MainIMGInterface) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='developer-image'/>
    </div>
  )
}

export default MainIMG;