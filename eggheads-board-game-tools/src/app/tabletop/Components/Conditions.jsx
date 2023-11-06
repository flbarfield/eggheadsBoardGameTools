import Button from "@/Components/Button"

export default function Conditions () {
    function populateContent () {
        //to do
    }

    return (
        <ul className='flex flex-wrap gap-1 py-5'>
            <li onClick={populateContent}>
                <Button label={'Blinded'}/>
            </li>   
            <li onClick={populateContent}>
                <Button label={'Charmed'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Deafened'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Exhaustion'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Frightened'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Grappled'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Incapacitated'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Invisible'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Paralyzed'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Petrified'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Poisoned'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Prone'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Restrained'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Stunned'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Unconcious'}/>
            </li> 
        </ul>
    )   
}