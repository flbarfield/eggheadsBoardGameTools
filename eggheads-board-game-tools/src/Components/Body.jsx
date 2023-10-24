import Image from 'next/image'
import gameWall from '../../public/images/boardGameWall.png'


const Body = () => {
    return (
        <section className='flex flex-col mt-12 gap-10 px-30 sm:px-0 md:px-20 lg:px-10 lg:flex-row lg:gap-0 xl:px-40'>
            <section className='flex flex-col gap-2 lg:basis-1/2'>
                <div className='flex flex-col px-12 gap-5 lg:justify-center'>
                    <h1 className='text-4xl text-EggheadBlue text-center sm:text-left'>EggHead's Board Game Tools</h1>
                    <span className='text-lg'>The one stop shop for all your game-aid needs!</span>
                    <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eum et commodi possimus tempore dolores voluptatibus accusantium necessitatibus dolorum reprehenderit eos distinctio eveniet molestiae quidem, incidunt natus rem omnis ullam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam molestias nisi, incidunt libero ratione et odio officia ipsum earum voluptatum at numquam voluptatibus, aspernatur tempora, porro beatae. Esse, consequuntur repudiandae.</p>
                </div>
            </section>
            <section className='flex px-12 lg:basis-1/2'>
                <Image className='rounded-md mx-auto' src={gameWall} width={800} height={500} placeholder='blur' alt="Egghead Logo" />
            </section>
        </section>
    )
}

export default Body