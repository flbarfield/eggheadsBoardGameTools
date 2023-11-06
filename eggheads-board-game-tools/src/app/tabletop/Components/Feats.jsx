import Button from "@/Components/Button"

export default function Feats () {
    function populateContent () {
        //to do
    }

    return (
        <ul className='flex flex-wrap gap-1 py-5'>
            <li onClick={populateContent}>
                <Button label={'Grappler'}/>
            </li>   
        </ul>
    )   
}