import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

require('dotenv').config()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
