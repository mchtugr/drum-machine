import React, { useState } from 'react'

const Toolbar = (props) => {
    const [volLevel, setVolLevel] = useState(null);

    const showVolume = e => {
        setVolLevel(e.target.value)
        // state latenct?????????????
        props.getVolume(e.target.value)
    }
    


    return (
        <div className='toolbar row'>
            <div className="volume col">
                <input id='volume' type='range' min='0' max='100' onChange={showVolume}></input>
                <span>{ volLevel!== null ? `% ${volLevel}` : null }</span>
            </div>
            <div className="btn-container col">
                <span 
                    id="key-1" 
                    className={`toggle-key btn ${props.bankNum === 1 ? 'btn-on-color' : 'btn-off-color'} `}
                    onClick={props.handleBankOne}
                >
                    Bank1
                </span>
                <span 
                    id="key-2" 
                    className={`toggle-key btn ${props.bankNum === 2 ? 'btn-on-color' : 'btn-off-color'} `}
                    onClick={props.handleBankTwo} 
                >
                    Bank2
                </span>
            </div>
        </div>
    )
}

export default Toolbar
