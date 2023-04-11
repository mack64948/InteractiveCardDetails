
import './App.css';
import { useState } from 'react';

import { CardFront } from './components/CardFront';
import { CardBack } from './components/CardBack';

import bgImageDesktop from "../src/assets/images/bg-main-desktop.png"
import { CardInfoForm } from './components/CardInfoForm';

function App() {
  const [cvc, setCVC] = useState("000")
  const [name,setName] = useState("Johnny Appleseed")
  const [expMonth, setExpMonth] = useState("12")
  const [expYear, setExpYear] = useState("25")

  const [cardNumber,setCardNumber] = useState("0000 0000 0000 0000")
  
  let bgImageStyle = {
      position: "absolute",
      top: "0px",
      left: "0px", 
      width: "100%", 
      height: "100%"
    }

  let mainStyle = {
    position: "absolute",
    right: "0px",
    top: "0px",
    width: "60%",
    height: "100%",
    backgroundColor: "white"
  }

  return (
    <div className="App">
      <img style={bgImageStyle} src={bgImageDesktop} />
      <main style={mainStyle}>
        <CardFront number={cardNumber} expDate={`${expMonth}/${expYear}`} name={name}></CardFront>
        <CardBack cvc={cvc}></CardBack>
        <CardInfoForm 
          cardNumberHandler={(str) => {
            setCardNumber(str)
          }}

          cvcHandler={(str) => {
            setCVC(str)
          }}

          nameHandler={(str) => {
            setName(str)
          }}

          expYearHandler={(str) => {
            setExpYear(str)
        }}

          expMonthHandler={(str) => {
            setExpMonth(str)
        }}></CardInfoForm>
      </main>
    </div>
  );
}

export default App;
