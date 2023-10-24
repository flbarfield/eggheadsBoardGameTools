import logo from '../../public/Images/tabIcon.png'
import Image from 'next/image'
import Link from 'next/link'

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
                        <Link className='hover:bg-EggheadBlue hover:text-white p-2 rounded-md' href="/tabletop">Table Top Roleplay</Link>
                    </li>
                    <li>
                        <Link className='hover:bg-EggheadBlue hover:text-white p-2 rounded-md' href="/boardgames">Board Games</Link>
                    </li>
                    <li>
                        <Link className='hover:bg-EggheadBlue hover:text-white p-2 rounded-md' href="/miniatures">Miniatures</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar