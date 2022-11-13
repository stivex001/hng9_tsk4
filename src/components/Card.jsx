import React from 'react'
// import frame from '../assets/Frame.svg'
import star from "../assets/star.svg"
import { card } from './data'


const Card = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 cursor-pointer '>
        {card.map(({id, title, desc, available, photo, distance}) => (
            <div key={id} className='border border-[#D7D7D7] p-4 rounded-2xl hover:scale-105 duration-200'>
            <img className='w-full object-cover mb-4' src={photo} alt="" />
            <div className='flex justify-between'>
                <div className=''>
                    <p className='mb-[10px] text-xs'>{title}</p>
                    <p className='mb-[10px] text-xs'>{desc}</p>
                    <div className='flex gap-2'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                </div>
                <div className='text-right'>
                    <p className='mb-[10px] text-xs font-bold'>{distance}</p>
                    <p className='mb-[10px] text-xs'>{available}</p>
                </div>
                
            </div>
        </div>
        ))}
        
    </div>
  )
}

export default Card