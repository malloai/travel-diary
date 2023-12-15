import React from "react"
import Navbar from "./components/Navbar"
import Diary from "./components/Diary"
import data from "./data.js"

let travelData = data.map(destination => <Diary key={destination.title} {...destination}/>)

export default function App() {
    return (
        <div>
            <Navbar />
            {travelData}
        </div>
    )     
}

