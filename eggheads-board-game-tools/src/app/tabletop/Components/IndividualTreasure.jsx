import Button from "@/Components/Button"
import { useState } from "react"
import csvParse from 'csv-parse'
// import fs from 'fs'



export default function IndividualTreasure () {
    let [treasure, setTreasure] = useState('')
    
    // let filePath04 = '../../lib/treasure.csv'

    // fs.readFile(filePath04, 'utf-8', (err, data) => {
    //     if (err) {
    //         setTreasure(res.status(500).json({error: err.message}))
    //     }

    //     setTreasure(res.status(200).json({content: data}))
    // })
    

    return(
        <div>
            <h1 className='text-center'>Individual Treasure</h1>
            <ul className="flex flex-wrap jusitfy-center mx-auto mt-5">
                <li><Button label={'CR 0-4'}/></li>
                <li><Button label={'CR 5-10'}/></li>
                <li><Button label={'CR 11-16'}/></li>
                <li><Button label={'CR 17+'}/></li>
            </ul>
            {treasure}
        </div>
    )
}