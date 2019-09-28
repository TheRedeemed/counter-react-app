import React, {useState} from 'react'
import PropTypes from 'prop-types';
import './Counter.css'

function Counter({...props}) {
    const [count, setCount] = useState(0)
    const { incrementBy } = props;

    const increment= () => {
        setCount(count + incrementBy)
    }

    return (
        <div className="counter">
            <button onClick={increment}>+{incrementBy}</button>
            <span className="count">{count}</span>
        </div>
    )
}

Counter.defaultProps = {
    incrementBy : 1
}

Counter.propTypes = {
    incrementBy : PropTypes.number
}

export default Counter