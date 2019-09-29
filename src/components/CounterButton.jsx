import React from 'react'
import PropTypes from 'prop-types'
import './CounterButton.css'

const CounterButton = ({...props}) => {
    const { name, value, action } = props

    return (
        <div>
            <button onClick={() => action(value)}>{name}{value}</button>
        </div>
    )
}

CounterButton.defaultProps = {
    incrementBy : 1
}

CounterButton.propTypes = {
    incrementBy : PropTypes.number
}

export default CounterButton