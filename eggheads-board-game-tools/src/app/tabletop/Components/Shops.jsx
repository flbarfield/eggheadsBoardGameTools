import Image from 'next/image'
import ItemShopImg from '../../../../public/Images/itemShop.webp'

export default function Shops () {
    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Shops</h1>
            <Image className='rounded-md mx-auto' src={ItemShopImg} width={800} height={500} placeholder='blur' alt="Image of an item shop" />
            <p className='text-center text-red-500'>Not Yet Implemented.</p>
        </section>
    )
}