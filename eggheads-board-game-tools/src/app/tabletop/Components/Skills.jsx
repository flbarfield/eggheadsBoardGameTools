import Button from "@/Components/Button"

export default function Skills () {
    function populateContent () {
        //to do
    }

    return (
        <ul className='flex flex-wrap gap-1 py-5'>
            <li onClick={populateContent}>
                <Button label={'Acrobatics'}/>
            </li>   
            <li onClick={populateContent}>
                <Button label={'Animal Handling'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Arcana'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Athletics'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Deception'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'History'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Insight'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Intimidation'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Investigation'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Medicine'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Nature'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Perception'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Performance'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Persuasion'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Religion'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Sleight-Of-Hand'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Stealth'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Survival'}/>
            </li> 
        </ul>
    )   
}