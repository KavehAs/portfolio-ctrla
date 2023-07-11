import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="flex justify-center sm:justify-between items-center ">
            <ul className='hidden sm:flex list-none gap-12 text-lg md:text-xl p-0'>
                <li>
                    <Link className='group' to={'/'}>
                        خانه
                        <div className='w-0 h-0.5 md:h-1 bg-lightText group-hover:w-full transition-all rounded-md duration-300'></div>
                    </Link>
                </li>

                <li>
                    <Link className='group' to={'/portfolio'}>نمونه کار
                        <div className='w-0 h-0.5 md:h-1 bg-lightText group-hover:w-full transition-all rounded-md duration-300'></div>
                    </Link>
                </li>

                <li>
                    <Link className='group' to={'/contact'}>ارتباط با ما
                        <div className='w-0 h-0.5 md:h-1 bg-lightText group-hover:w-full transition-all rounded-md duration-300'></div>
                    </Link>
                </li>

                <li>
                    <Link className='group' to={'/about'}>درباره ما
                        <div className='w-0 h-0.5 md:h-1 bg-lightText group-hover:w-full transition-all rounded-md duration-300'></div>
                    </Link>
                </li>
            </ul>

            <Link to={'/'}>
            <h1 className='text-greyText text-3xl sm:text-4xl md:text-5xl'>Ctrl A</h1>
            </Link>
        </div>
    )
}
