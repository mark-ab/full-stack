import  ReactDOM from 'react-dom/client'
import React, { Children } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Me from './asd.jsx'

const reactElement2 = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: '_blank'
  },
  'Click me to visit google'
)

function Myapp(){
  return (
    <div>
      <h1>
        custom react app
      </h1>
    </div>
  )
}

const AnotherElement = (
  <a href="http://google.com" target='blank'>Visit Google</a>

)

const areactElement = React.createElement(
  'a',
  {href: 'https://google.com', 
  target: "_blank"},
  'cllick to visit google'
)

// createRoot(document.getElementById('root')).render(
//   // <>
//   // <App />
//   // <Me />
//   // <Myapp/>
//   // </>
//   //AnotherElement
  
  
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  //areactElement
  <App/>
)