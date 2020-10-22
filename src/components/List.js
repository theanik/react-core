import React from 'react'

const List = () => {
    const numbers = [1, 2, 3, 4, 5];

    const showList = numbers.map((num) => <p>{num}</p>)

    return (
        <div>
            {showList}
        </div>
    )
}

export default List
