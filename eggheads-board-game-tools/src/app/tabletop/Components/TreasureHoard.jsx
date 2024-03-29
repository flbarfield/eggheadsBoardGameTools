import Button from "@/Components/Button"

export default function TreasureHoard () {
    return(
        <div>
            <h1 className='text-center'>Treasure Hoard</h1>
            <ul className="flex flex-wrap jusitfy-center mx-auto mt-5">
                <li><Button label={'CR 0-4'}/></li>
                <li><Button label={'CR 5-10'}/></li>
                <li><Button label={'CR 11-16'}/></li>
                <li><Button label={'CR 17+'}/></li>
            </ul>
        </div>
    )
}