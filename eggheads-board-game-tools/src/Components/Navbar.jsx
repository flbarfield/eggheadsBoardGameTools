'use client'

import logo from '../../public/Images/tabIcon.png'
import Image from 'next/image'
import Link from 'next/link'
import NavbarLink from './NavbarLink'

const Navbar = () => {

    function toggleNavLinks(e) {
        e.target.nextElementSibling.classList.toggle('hidden')
    }

    return (
        <nav> 
            <div>
                <ul className="flex justify-between p-3 items-center mx-auto max-w-4xl">
                    <li>
                        <Link href='/'>
                            <div>
                                <Image className='rounded-md' src={logo} height={40} width={50} placeholder='blur' alt='Egghead Logo'/>
                            </div>
                        </Link>
                    </li>
                    <NavbarLink path='/tabletop' linkName='Tabletop RPGs'/>
                    <li>
                        <span onClick={toggleNavLinks} className='hover:bg-EggheadBlue hover:text-white p-2 rounded-md cursor-pointer relative line-through text-slate-400'>Board Games</span>
                        <ul className='shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden absolute'>
                            <li className='text-red-500'>Not Yet Implemented.</li>
                        </ul>
                    </li>
                    <li>
                        <span onClick={toggleNavLinks} className='hover:bg-EggheadBlue hover:text-white p-2 rounded-md cursor-pointer relative line-through text-slate-400'>Miniatures</span>
                        <ul className='shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden absolute'>
                            <li className='text-red-500'>Not Yet Implemented</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar