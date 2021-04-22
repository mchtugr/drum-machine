import React from 'react'

const Preview = ({text}) => {
    return (
        <div className='preview-container'>
            <div className="preview-screen" id='display'>
                {text}
            </div>
        </div>
    )
}

export default Preview
