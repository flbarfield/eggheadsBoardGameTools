import logo from '../../public/Images/tabIcon.png'
import Image from 'next/image'
import Link from 'next/link'
import NavbarLink from './NavbarLink'

const Navbar = () => {
    return (
        <nav> 
            <div>
                <ul className="flex justify-between p-3 items-center font-medium mx-auto max-w-4xl">
                    <li>
                        <Link href='/'>
                            <div>
                                <Image className='rounded-md' src={logo} height={40} width={50} placeholder='blur' alt='Egghead Logo'/>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <span className='hover:bg-EggheadBlue hover:text-white p-2 rounded-md cursor-pointer relative'>Table Top Roleplay</span>
                        <ul className='shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden'>
                            <NavbarLink path='/tabletop/DMsTools' linkName='DMs Tools'/>
                            <NavbarLink path='/tabletop/playersCorner' linkName="Player's Corner"/>
                            <NavbarLink path='/tabletop/nameGenerators' linkName='Name Generators'/>
                        </ul>
                        
                    </li>
                    <li>
                        <span className='hover:bg-EggheadBlue hover:text-white p-2 rounded-md cursor-pointer relative'>Board Games</span>
                    </li>
                    <li>
                        <span className='hover:bg-EggheadBlue hover:text-white p-2 rounded-md cursor-pointer relative'>Miniatures</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar