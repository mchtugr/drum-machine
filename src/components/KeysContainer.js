import React from 'react'
import KeyItem from './KeyItem'

const KeysContainer = ({ keysList, getId }) => {
    
    const handleClick = (id) => {
        getId(id)
    }
    return (
        <div className='key-container row'>
            {keysList.map(key => {
                const { keyCode, keyTrigger, id, url } = key;
                return (
                    <KeyItem 
                        key= {id} 
                        keyCode={keyCode} 
                        keyTrigger={keyTrigger} 
                        id={id} 
                        url={url} 
                        handleClick={handleClick} 
                    />
                )
            })}
        </div>
    )
}

export default KeysContainer
