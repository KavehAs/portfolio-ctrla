import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export default function Header() {
    return (
        <div className="flex flex-col justify-center sm:justify-between items-center ">
            <ul className='hidden sm:flex list-none gap-12 text-lg md:text-xl p-0 mt-7'>
                <li>
                    <Link className='group no-underline text-greyText hover:text-lightText transition-all' to={'/'}>
                        خانه
                        <div className='w-0 h-0.5 md:h-1 bg-lightText group-hover:w-full transition-all rounded-md duration-300'></div>
                    </Link>
                </li>

                <li>
                    <Link className='group no-underline text-greyText hover:text-lightText transition-all' to={'/portfolio'}>نمونه کار
                        <div className='w-0 h-0.5 md:h-1 bg-lightText group-hover:w-full transition-all rounded-md duration-300'></div>
                    </Link>
                </li>

                <li>
                    <Link className='group no-underline text-greyText hover:text-lightText transition-all' to={'/contact'}>ارتباط با ما
                        <div className='w-0 h-0.5 md:h-1 bg-lightText group-hover:w-full transition-all rounded-md duration-300'></div>
                    </Link>
                </li>

                <li>
                    <Link className='group no-underline text-greyText hover:text-lightText transition-all' to={'/about'}>درباره ما
                        <div className='w-0 h-0.5 md:h-1 bg-lightText group-hover:w-full transition-all rounded-md duration-300'></div>
                    </Link>
                </li>
            </ul>

            <Link className='no-underline' to={'/'}>
            {/* <h1 className='text-greyText text-3xl sm:text-4xl md:text-5xl'>Ctrl A</h1> */}
            <img src={logo} alt="logo" className='w-24 md:w-28 p-2 mt-5 md:mt-10 ' />
            </Link>
        </div>
    )
}
