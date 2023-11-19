export default function TextPill ({header, date, desc1, desc2, desc3}) {
    return (
    <>
        <section className='overflow-scroll overflow-x-hidden max-h-52 px-10 py-5 bg-EggheadBlue max-w-sm mx-auto rounded-lg text-white font-medium mb-5'>
            <span>{header}<br/></span>
            <span>{date}</span>
            <p className='mt-5 border-t-2 pt-4 text-ellipsis'>{desc1} <br /> <br /> {desc2} <br /> <br /> {desc3} </p>
         </section>
    </>
    )
}