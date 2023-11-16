export default function NAButton ({label}) {
    return (
        <>
            <button className="ml-5 line-through bg-slate-100 rounded-sm shadow-md text-slate-400 text-md py-0.5 px-2 hover:bg-blue-500 hover:text-white" >
                {label}
            </button>
        </>
    )
}