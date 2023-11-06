import Button from "@/Components/Button"

export default function Classes () {
    function populateContent () {
        //to do
    }

    return (
        <ul className='flex flex-wrap gap-1 py-5'>
            <li onClick={populateContent}>
                <Button label={'Barbarian'}/>
            </li>   
            <li onClick={populateContent}>
                <Button label={'Bard'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Cleric'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Druid'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Fighter'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Monk'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Paladin'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Ranger'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Rogue'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Sorcerer'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Warlock'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Wizard'}/>
            </li> 
        </ul>
    )   
}