import Button from "@/Components/Button"

export default function Rules () {
    function populateContent () {
        //to do
    }

    return (
        <ul className='flex flex-wrap gap-1 py-5'>
            <li onClick={populateContent}>
                <Button label={'Adventuring'}/>
            </li>   
            <li onClick={populateContent}>
                <Button label={'Appendix'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Combat'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Equipment'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Spellcasting'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Using-Ability-Scores'}/>
            </li> 
        </ul>
    )   
}