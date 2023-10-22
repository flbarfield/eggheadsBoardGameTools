import logo from '../../public/Images/tabIcon.png'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div>
                <ul className="flex justify-between p-3 items-center font-medium mx-auto max-w-4xl">
                    <li>
                        <div>
                        <Image className='rounded-md' src={logo} height={40}/>
                        </div>
                    </li>
                    <li><a className='hover:bg-slate-200 p-2 rounded-md' href="">Table Top Roleplay</a></li>
                    <li><a className='hover:bg-slate-200 p-2 rounded-md' href="">Board Games</a></li>
                    <li><a className='hover:bg-slate-200 p-2 rounded-md' href="">Miniatures</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar