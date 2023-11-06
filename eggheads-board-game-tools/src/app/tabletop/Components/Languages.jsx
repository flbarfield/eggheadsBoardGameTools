import Button from "@/Components/Button"

export default function Languages () {
    function populateContent () {
        //to do
    }

    return (
        <ul className='flex flex-wrap gap-1 py-5'>
            <li onClick={populateContent}>
                <Button label={'Abyssal'}/>
            </li>   
            <li onClick={populateContent}>
                <Button label={'Celestial'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Common'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Deep-Speech'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Draconic'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Dwarvish'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Elvish'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Giant'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Gnomish'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Goblin'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Halfling'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Infernal'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Orc'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Primordial'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Sylvan'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Undercommon'}/>
            </li> 
        </ul>
    )   
}