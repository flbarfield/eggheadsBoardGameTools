export default function Footer () {
    return (
        <footer className="bg-EggheadBlue py-10 text-white mt-auto">
                <section className="flex flex-col text-center gap-2">
                    <label className='text-2xl' htmlFor='email'>Subscribe for updates!</label>
                    <form action="">
                        <input type="text" placeholder="Email:" name="email"/>
                        <button className="ml-5">Submit</button>
                    </form>
                </section>
                <section className="mt-5 text-center">
                    <span className="">Follow Us:</span>
                    <ul className="flex justify-center gap-5">
                        <li><a className="cursor-pointer" href="#">Twitter</a></li>
                        <li><a className="cursor-pointer" href="#">Instagram</a></li>
                        <li><a className="cursor-pointer" href="#">Facebook</a></li>
                    </ul>
                 </section>
        </footer>
    )
}