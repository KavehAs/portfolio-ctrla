import { Link } from 'react-router-dom'

export default function Header({ ref }) {
    return (
        <div className="flex flex-col justify-center sm:justify-between items-center h-[10svh]">
            <ul className='flex list-none gap-12 text-lg md:text-xl p-0 mt-7'>
                <li>
                    <Link className='group no-underline text-greyText hover:text-lightText transition-all' to={'/'}>
                        خانه
                        <div className='w-0 h-0.5 md:h-1 bg-lightText group-hover:w-full transition-all rounded-md duration-300'></div>
                    </Link>
                </li>

                <li>
                    <a className='group no-underline text-greyText hover:text-lightText transition-all'>نمونه کار
                        <div className='w-0 h-0.5 md:h-1 bg-lightText group-hover:w-full transition-all rounded-md duration-300'></div>
                    </a>
                </li>

                <li>
                    <Link className='group no-underline text-greyText hover:text-lightText transition-all' to={'/contact'}>ارتباط با ما
                        <div className='w-0 h-0.5 md:h-1 bg-lightText group-hover:w-full transition-all rounded-md duration-300'></div>
                    </Link>
                </li>
            </ul>

        </div>
    )
}
