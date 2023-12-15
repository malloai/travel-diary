import React from "react"

export default function Diary(props) {
    return (
        <section className="sectionDiary">
            <img className="sectionDiary--image" src={props.imageUrl} />
            <div className="details">
                <p className="sectionDiary--location">{props.location} <a className="sectionDiary--link" href={props.googleMapsUrl}>Voir sur Google Maps</a></p>
                <h1 className="sectionDiary--title">{props.title}</h1>
                <h6 className="sectionDiary--dates">{`${props.startDate} - ${props.endDate}`}</h6>
                <p className="sectionDiary--detail">{props.description}</p>
            </div>
        </section>
    )
}