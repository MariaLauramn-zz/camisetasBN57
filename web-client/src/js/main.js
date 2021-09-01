// Al incluír aquí el SCSS hacemos que webpack genere
// un archivo bundle.js que contiene tanto el javascript
// como el CSS
import '../scss/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'


ReactDOM.render(
    <div className="greeting">⚛️ la vida es dura! ⚛️</div>,
    document.getElementById("app")
)
