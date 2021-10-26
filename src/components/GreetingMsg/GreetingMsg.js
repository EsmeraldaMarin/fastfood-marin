import React from 'react'

const GreetinMsg = ({greeting}) => (
    <div className="greetingMsg">
        <p>{greeting ? greeting : 'Resultado'}!</p>
        <p>¿Qué te gustaría comer?</p>
    </div>
)

export default GreetinMsg
