import Link from 'next/link'

export default function NavbarLink ({path, linkName}) {
    return (
        <li className='hover:bg-EggheadBlue hover:text-white cursor:pointer'>
            <Link  href={path}> {linkName}</Link>
        </li>
    )
}