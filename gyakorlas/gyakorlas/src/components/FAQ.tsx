import { useState } from "react"

type FAQProp = {
    question: string,
    answer: string
}



const  FAQ = (props:FAQProp) => {
const[isOpen,setIsOpen] = useState(false)
const toggle = () => {
    setIsOpen(!isOpen)
}
  return (
    <div className='faq-element'>
        <div>
            <button onClick={toggle}>LE</button>
            <h1>{props.question}</h1>
        </div>
        <p className = {isOpen ? "open" : ""}
            style={{
              height:isOpen ? Math.floor(props.answer.length/50)*2 + 2 + "rem" : 0
            }}>
            {props.answer}
            </p>     
            
            
    </div>
  )
}

export default  FAQ