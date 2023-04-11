import "./index.scss"
import { useState, useEffect } from "react";
import iconComplete from "../../assets/images/icon-complete.svg"

export const CardInfoForm = ({nameHandler,cvcHandler,expYearHandler,expMonthHandler,cardNumberHandler}) => {
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [hasNumberError, setHasNumberError] = useState(true)
    const [hasCVCError, setHasCVCError] = useState(true)
    const [hasExpMonthError, setHasExpMonthError] = useState(true)
    const [hasExpYearError, setHasExpYearError] = useState(true)
    const [hasNameError, setHasNameError] = useState(true)

    const isValidNumber = (numberStr) => {
      
        return numberStr.match(`[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}`) !== null
    }

    const isValidName = (nameStr) => {
        return nameStr.match(`[a-zA-Z]* [a-zA-Z]*`) !== null

    }

    const isValidExpMonth = (numStr) => {
        return numStr.match(`[0-9][0-9]`) !== null

    }

    const isValidExpYear = (numStr) => {
        return numStr.match(`[0-9][0-9]`) !== null
    }

    const isValidCVC = (numStr) => {
        return numStr.match(`[0-9]{3}`) !== null
    }
    
    return (!hasSubmitted ? <form onSubmit={(e) => {
        e.preventDefault()
    }}>
        <div className="form-group">
            <label>Cardholder Name</label>
            <input onChange={(e) => {
                if(!isValidName(e.target.value)){
                    e.target.style.border = "thin solid red"
                    setHasNameError(true)
                    nameHandler(e.target.value)

                    return
                }

                e.target.style.border = "thin solid grey"
                setHasNameError(false)
                nameHandler(e.target.value)
            }} placeholder="e.g. Jane Appleseed" type="text"></input>
        </div>

        <div className="form-group">
            <label>Card Number</label>
            <input id="number-input" onChange={(e) => {
                if(!isValidNumber(e.target.value)){
                    e.target.style.border = "thin solid red";
                    setHasNumberError(true)
                    cardNumberHandler(e.target.value)
                    return;
                }

                e.target.style.border = "thin solid grey";
                setHasNumberError(false)
                cardNumberHandler(e.target.value)
            }} placeholder="e.g. 1234 3333 8543 3434" type="text"></input>
            {hasNumberError && <p className="error-message">Invalid Card Number</p>}
        </div>

        <div className="bottom-form-group-container">
            <div className="form-group">
                <label>Exp. Date (MM/YY)</label>
                <input
                     onChange={(e) => {
                        if(!isValidExpMonth(e.target.value)){
                            e.target.style.border = "thin solid red"
                            setHasExpMonthError(true)
                            expMonthHandler(e.target.value)
                            return
                        }

                        setHasExpMonthError(false)
                        e.target.style.border = "thin solid grey"

                        expMonthHandler(e.target.value)
                    }}
                type="text" placeholder="MM"></input>
                <input 
                    onChange={(e) => {
                        if(!isValidExpYear(e.target.value)){
                            e.target.style.border = "thin solid red"
                            setHasExpYearError(true)
                            expYearHandler(e.target.value)
                            return
                        }

                        setHasExpYearError(false)
                        e.target.style.border = "thin solid grey"
                        expYearHandler(e.target.value)
                    }}
                    type="text" placeholder="YY"></input>
            </div>

            <div className="form-group">
                <label>CVC</label>
                <input 
                    onChange={(e) => {
                        if(!isValidCVC(e.target.value)){
                            e.target.style.border = "thin solid red"
                            setHasCVCError(true)
                            cvcHandler(e.target.value)
                            return
                        }
                        e.target.style.border = "thin solid grey"
                        setHasCVCError(false)
                        cvcHandler(e.target.value)
                    }}
                    placeholder="e.g. 123" type="text"></input>
            </div>


            { (hasCVCError || hasExpMonthError || hasExpYearError) 
                && <p className="error-message">{hasCVCError ? "Invalid CVC Number" : (hasExpMonthError ? "Invalid Exp Month" : (hasExpYearError ? "Invalid Exp Year" : ""))}</p>}

        </div>

        <button onClick={() => {
            let hasNoErrors = !hasNumberError && !hasCVCError && !hasNameError && !hasExpMonthError && !hasExpYearError
          
            if(hasNoErrors){
                setHasSubmitted(true)
            } else {
                alert("Enter valid card info in order to submit")
            }
            
        }}>Confirm</button>
    </form> : <form onSubmit={(e) => {
        e.preventDefault()
    }} className="complete-form">
        <div className="image-container">
            <img src={iconComplete} />  
        </div>
        <h2>Thank You!</h2>
        <p className="confirmation-message-text">We've added your card details</p>
        <button onClick={() => {
            cvcHandler('')
            nameHandler('')
            expMonthHandler('')
            expYearHandler('')
            cardNumberHandler('')

            setHasSubmitted(false)
            setHasCVCError(true)
            setHasNumberError(true)
            setHasExpYearError(true)
            setHasExpMonthError(true)
        }}>Continue</button>
    </form>);
}