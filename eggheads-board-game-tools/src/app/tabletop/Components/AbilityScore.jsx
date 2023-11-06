import Button from "@/Components/Button"

export default function AbilityScores () {
    function populateContent () {
        //to do
    }

    return (
        <ul className='flex flex-wrap gap-1 py-5'>
            <li onClick={populateContent}>
                <Button label={'CHA'}/>
            </li>   
            <li onClick={populateContent}>
                <Button label={'CON'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'DEX'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'INT'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'STR'}/>
            </li> 
        </ul>
    )   
}