import Image from 'next/image'
import logo from '../../public/Images/cover.png'
import gameWall from '../../public/images/boardGameWall.png'


const Header = () => {
    return (
        <header className='flex px-80 mt-20 gap-20'>
            <section className='flex flex-col gap-2 text-center'>
                <h1 className='text-4xl'>EggHead's Board Game Tools</h1>
                <span className='text-lg'>The one stop shop for all your game-aid needs!</span>
                <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eum et commodi possimus tempore dolores voluptatibus accusantium necessitatibus dolorum reprehenderit eos distinctio eveniet molestiae quidem, incidunt natus rem omnis ullam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam molestias nisi, incidunt libero ratione et odio officia ipsum earum voluptatum at numquam voluptatibus, aspernatur tempora, porro beatae. Esse, consequuntur repudiandae.</p>
            </section>
            <section className='flex justify-center'>
                <Image className='rounded-md' src={gameWall} height={1000} alt="Egghead Logo" />
            </section>
            
        </header>
    )
}

export default Header