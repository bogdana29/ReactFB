import React from 'react'
import './Widgets.css'
function Widgets() {
    return (
        <div className="widgets">
            <iframe
            src="https://www.google.com"
            height="100%"
            width="348"
            scrolling="no"
            frameBorder="0"
            allowTransparency="yes"
            style={{border:"none",overflow:"hidden"}}
            ></iframe>
        </div>
    )
}

export default Widgets
