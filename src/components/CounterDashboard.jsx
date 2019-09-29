import React, {useState} from 'react'
import CounterButtonList from './CounterButtonList'
import CounterButton from './CounterButton'
import Count from './Count'

function CounterDashboard({...props}) {
    const [count, setCount] = useState(0)

    const incrementCount = (value) => {
        setCount(count + value)
    }

    const decrementCount = (value) => {
        setCount(count - value)
    }

    const resetCount = () => {
        setCount(0)
    }

    const counterValues = [1, 2, 10, 100]

    return (
        <div className="counter">
            <h1>Counter Dashboard</h1>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '30px' }}>
                <CounterButtonList 
                    name='+'
                    values={counterValues}
                    action={incrementCount}
                />
                <CounterButtonList 
                    name='-'
                    values={counterValues}
                    action={decrementCount}
                />
            </div>
            <Count count={count} />
            <CounterButton name='Reset' action={resetCount} /> 
        </div>
    )
}

export default CounterDashboard