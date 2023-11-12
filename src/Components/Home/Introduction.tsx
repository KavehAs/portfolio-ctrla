import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import logo from '../../assets/logo.svg'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

import { Fade } from "react-awesome-reveal";


export default function Introduction() {
  return (
    <div className='flex-col items-center flex justify-around h-[90svh]  mt-8 xs:mt-0'>
      <Fade cascade triggerOnce={true} delay={1500}>
        <Link className='no-underline' to={'/'}>
          <img src={logo} alt="logo" className='w-24 md:w-28 p-2' />
        </Link>

        <span className='sm-mt-[-32px] sm:mt-0 text-greyText text-center block text-xl sm:text-2xl'>سلام ! ما تیم کنترل ای هستیم{'\u2728'}</span>

        <h1 className='sm:mt-4 text-greyText text-center max-w-lg mx-auto text-3xl sm:text-4xl  leading-[50px] md:leading-[60px] font-bold bg-gradient-to-r from-greyText to-lightBlack bg-clip-text text-fill-transparent'>
          طراحی و توسعه تخصصی وبسایت های کاربردی , قدمی رو به جلو در بازاریابی کسب و کار شما
        </h1>

        <Link to={"/contact"}>
          <Button variant="contained" size='large' startIcon={<OpenInNewRoundedIcon className='ml-3' />} className='bg-lightBlack text-greyText border-greyText hover:border-lightText text-lg md:text-xl '>اطلاعات بیشتر</Button>
        </Link>
      </Fade>
    </div>
  )
}
