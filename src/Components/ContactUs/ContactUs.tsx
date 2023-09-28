import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className='text-greyText text-xl md:text-2xl lg:text-3xl flex flex-col items-center '>
      <Link className='no-underline my-10' to={'/'}>
        <img src={logo} alt="logo" className='w-24 md:w-28 p-2' />
      </Link>
      <div className='flex flex-col lg:flex-row gap-16 lg:gap-44 text-justify items-center lg:items-start'>
        <div className='w-full md:w-2/3 lg:w-1/2 leading-10'>با تخصص در توسعه و طراحی وب، ما آماده ایم تا به شما در رسیدن به یک تجربه بی نظیر در دنیای دیجیتال و بازاریابی کمک کنیم. با طراحی های خلاقانه و بهینه سازی رابط کاربری، وبسایت شما به یک جاذبه جذاب و قابل دسترس برای مشتریان تبدیل خواهد شد. همچنین، ما به طور مداوم با شما در ارتباط خواهیم بود تا همیشه به نیازهایتان پاسخ دهیم و به رشد و توسعه کسب و کار شما کمک کنیم.</div>

        <div>
          <p>ایمیل: <a href="mailto:arsham7.ae@gmail.com">arsham7.ae@gmail.com</a></p>
          <p>تلفن: <a dir='ltr' href="tel:+989368873519">+98 936 887 3519</a></p>
        </div>
      </div>
    </div>
  )
}
