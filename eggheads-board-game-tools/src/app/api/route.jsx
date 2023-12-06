import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({message: 'Hello World'}, {status: 200})
}

export async function POST(request) {
    return NextResponse.json({message: 'HELLO World'}, {status: 200})
}

    // let filePath04 = '../../lib/treasure.csv'

    // fs.readFile(filePath04, 'utf-8', (err, data) => {
    //     if (err) {
    //         setTreasure(res.status(500).json({error: err.message}))
    //     }

    //     setTreasure(res.status(200).json({content: data}))
    // })