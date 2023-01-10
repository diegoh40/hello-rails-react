import { Controller } from '@hotwired/stimulus'
import React from 'react'
import App from './components/App.js'
import ReactDOM from 'react-dom'

// Connects to data-controller="react"
export default class extends Controller {
  connect () {
    const app = document.getElementById('root')
    console.log('app')
    ReactDOM.render(<App />, app)
  }
}
