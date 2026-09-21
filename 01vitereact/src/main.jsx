import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function App() {
     return (
        <div>
            <h1>My React App</h1>
        </div>
     )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },

//     children: 'Click me to go to Google',
// }

const anotherElement = (
   <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to go to Google',
  anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
