export default function Button ({label}) {
    return (
        <>
            <button className="ml-5 bg-white rounded-sm shadow-md text-slate-700 text-md py-0.5 px-2 hover:bg-blue-500 hover:text-white" >
                {label}
            </button>
        </>
    )
}