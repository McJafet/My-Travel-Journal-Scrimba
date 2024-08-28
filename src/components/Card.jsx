/* eslint-disable react/prop-types */
import pin from '../images/loc.png'
import '../styles/Card.css'

export default function Card(props) {
    return (
        <section className="section">
            <img src={props.img} alt="place picture" />
            <div className="place-content">
                <div className="place-location">
                    <img src={pin} alt="pin" />
                    <p>{props.location}</p>
                    <a href={props.locationUrl} target='_blank'>
                        View on Google Maps
                    </a>
                </div>
                <h1 className="place-name">
                    {props.name}
                </h1>
                <h3 className="place-date">{props.date}</h3>
                <p className="place-description">
                    {props.description}
                </p>
            </div>  
        </section>
    )
}