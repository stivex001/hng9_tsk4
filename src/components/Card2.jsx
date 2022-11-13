import React from 'react'
// import frame from '../assets/Frame.svg'
import star from "../assets/star.svg"
import { card2 } from './data'


const Card2 = () => {
  return (
    <div className='grid grid-cols-4 gap-6 cursor-pointer '>
        {card2.map(({id, title, desc, available, photo, distance}) => (
            <div key={id} className='border border-[#D7D7D7] rounded-2xl hover:scale-105 duration-200'>
            <img className='mx-auto pt-4' src={photo} alt="" />
            <div className='py-4 px-4 flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <p className='font-normal text-sm'>{title}</p>
                    <p className='font-bold text-sm'>{desc}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-normal text-sm'>{distance}</p>
                    <p className='font-normal text-sm text-center'>{available}</p>
                </div>
                <div className='flex gap-2'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
            </div>
        </div>
        ))}
        
    </div>
  )
}

export default Card2