import Button from "./Button";



export default function Footer () {
    return (
        <footer className="bg-EggheadBlue py-10 text-white mt-auto">
                <section className="flex flex-col text-center gap-2">
                    <label className='text-2xl' htmlFor='email'>Subscribe for updates!</label>
                    <form action="">
                        <input type="text" placeholder="Email:" name="email"/>
                        <Button label='Submit'/>
                    </form>
                    <span className='text-red-500'>Not Yet Implemented.</span>
                </section>
                <section className="mt-5 text-center">
                    <span className="">Follow Us:</span>
                    <ul className="flex justify-center gap-5">
                        <li><a className="cursor-pointer fa-brands fa-twitter hover:text-blue-500" href="#"></a></li>
                        <li><a className="cursor-pointer fa-brands fa-instagram hover:text-blue-500" href="#"></a></li>
                        <li><a className="cursor-pointer fa-brands fa-facebook hover:text-blue-500" href="#"></a></li>
                    </ul>
                 </section>
        </footer>
    )
}