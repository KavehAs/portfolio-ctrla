import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

export default function Introduction() {
  return (
    <div className='mt-6 flex-col items-center flex'>
      <span className='text-greyText text-center block text-lg sm:text-xl'>سلام ! ما تیم کنترل ای هستیم{'\u2728'}</span>

      <h1 className='text-greyText text-center max-w-lg mx-auto text-3xl sm:text-4xl  leading-[50px] md:leading-[60px] font-bold bg-gradient-to-r from-greyText to-lightBlack bg-clip-text text-fill-transparent'>
        طراحی و توسعه تخصصی وبسایت های کاربردی , قدمی رو به جلو در بازاریابی کسب و کار شما
      </h1>

      <Link to={"/about"}>
        <Button variant="contained" size='small' startIcon={<OpenInNewRoundedIcon className='ml-3'/>} className='bg-lightBlack text-greyText border-greyText hover:border-lightText md:text-lg'>اطلاعات بیشتر</Button>
      </Link>
    </div>
  )
}
