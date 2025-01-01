import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {return (<div>Custom App !</div>)}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

const anotherElment=(
  <a href='https://google.com' target='_blank'>visit google </a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target: "_blank"},
  'click me to visit' 
)

createRoot(document.getElementById('root')).render(

  // MyApp()
  
  <App />

  // ReactElement

  // anotherElment

  // reactElement

)
