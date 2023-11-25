import Button from "@/Components/Button"
// import d3 from 'd3'
import { useState } from "react"


export default function InduvidualTreasure () {
    // let [treasure, setTreasure] = useState('')

    // async function generateData (req, res) {
    //     res = await d3.csv('../../lib/treasure.csv').row(function(d) { return {key: d.key, value: +d.value}; })
    //     .get(function(error, rows) { console.log(rows); });
    
    //     setTreasure(res)
    // } 

    return(
        <div>
            <h1 className='text-center'>Individual Treasure</h1>
            <ul className="flex flex-wrap jusitfy-center mx-auto mt-5">
                <li><Button label={'CR 0-4'}/></li>
                <li><Button label={'CR 5-10'}/></li>
                <li><Button label={'CR 11-16'}/></li>
                <li><Button label={'CR 17+'}/></li>
            </ul>
            {/* {treasure} */}
        </div>
    )
}