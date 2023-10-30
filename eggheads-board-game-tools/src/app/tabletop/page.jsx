import Link from 'next/link'

export default function TableTop() {
    return (
        <main>
            <section className="flex flex-col text-center bg-slate-100 w-3/4 mx-auto pb-10 rounded-lg pt-2">
                <h1 className='text-center mt-10'>Table Top Games</h1>
                <ul className='mt-10 flex flex-col gap-2'>
                    <li><Link className='hover:bg-EggheadBlue hover:text-white p-2 rounded-md cursor-pointer' href='/tabletop/DMsTools'>Dms Tools</Link></li>
                    <li><Link className='hover:bg-EggheadBlue hover:text-white p-2 rounded-md cursor-pointer' href='/tabletop/playersCorner'>Player's Corner</Link></li>
                    <li><Link className='hover:bg-EggheadBlue hover:text-white p-2 rounded-md cursor-pointer' href='/tabletop/nameGenerators'>Name Generators</Link></li>
                </ul>
            </section>
        </main>
        
    )
}