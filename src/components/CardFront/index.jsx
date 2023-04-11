import "./index.scss"
import cardFrontImg from "../../assets/images/bg-card-front.png"
import cardLogo from "../../assets/images/card-logo.svg"

export const CardFront = ({number,name,expDate}) => {

    let imgStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "0px",
        top: "0px"
    }

    return (<div className="card-container">
        <img alt="Card Background" style={imgStyle} src={cardFrontImg} />
        <div className="card-content-container">
        <div className="card-logo-container">
            <img src={cardLogo} />
        </div>
        <p className="number-text">{number}</p>
        <div className="name-and-exp-date-container">
            <p>{name}</p>
            <p>{expDate}</p>
        </div>
        </div>
    </div>)
}