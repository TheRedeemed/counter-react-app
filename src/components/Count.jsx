import React from 'react';

const Count = ({...props}) => {
    const { count } = props;
    return (
        <div>
            <span className="count">{count}</span>
        </div>
    )
}

export default Count