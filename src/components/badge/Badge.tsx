"use client";
import React, { ReactElement } from 'react';
import CountUp from 'react-countup';


// typescript types
import { IconType } from 'react-icons/lib';


interface BadgePropsInterface {
  badgeStyles?: string | undefined,
  icon?: ReactElement<IconType> | undefined,
  endNumber: number,
  endCountText?: string | undefined,
  badgeInfo?: string | undefined,
}

const Badge = ({
  badgeStyles,
  icon,
  endNumber,
  endCountText,
  badgeInfo,
}: BadgePropsInterface) => {
  return (
    <div className={`badge ${badgeStyles}`}>
      <div className="text-3xl p-2 text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endNumber} delay={1} duration={5} />
          {endCountText}     
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">{badgeInfo}</div>
      </div>
    </div>
  )
}

export default Badge;