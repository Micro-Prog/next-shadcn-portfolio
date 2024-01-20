import React from 'react'
import Image from 'next/image';


interface MainIMGInterface {
  containerStyles?: string | undefined,
  imgSrc: string,
}

const MainIMG = ({ containerStyles, imgSrc } : MainIMGInterface) => {
  return (
    <div className={`${containerStyles}`}>
      <Image className='object-fill' src={imgSrc} width={320} height={320} priority alt='developer-image'/>
    </div>
  )
}

export default MainIMG;