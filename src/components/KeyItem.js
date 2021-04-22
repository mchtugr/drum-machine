import React from 'react'

const KeyItem = ({ keyTrigger, url, handleClick, id, keyCode }) => {
    const onKeyClick = event => {
        handleClick(event.target.id);
    }
    
    return (
        <div 
            id={id}
            className={`drum-pad col-4 key-pressed ${keyCode}`} 
            onClick={onKeyClick}
        >
            {keyTrigger}
            <audio className='clip' id={keyTrigger} src={url} />
        </div>
    )
}

export default KeyItem
