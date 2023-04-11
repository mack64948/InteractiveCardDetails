import "./index.scss"
import cardBackImg from "../../assets/images/bg-card-back.png"

export const CardBack = ({cvc}) => {

    let imgStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "0px",
        top: "0px"
    }

    return (<div className="card-back-container">
        <img style={imgStyle} src={cardBackImg} />
        <p className="cvc-text">{cvc}</p>
    </div>)
}