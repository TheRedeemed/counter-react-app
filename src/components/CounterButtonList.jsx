import React from 'react'
import CounterButton from './CounterButton'

const CounterButtonList = ({...props}) => {
    const { name, values, action } = props
    
    return (
        <div style={{ margin: '15px' }}>
            {values.map(value => <CounterButton
                                    key={`${name} ${value} ${action}`} 
                                    name={name}
                                    value={value}
                                    action={action}
                                />
                      )}
        </div>    
    ) 
}

export default CounterButtonList