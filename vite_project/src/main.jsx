import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h2>
        sukltan muhammah fateh (A historical turkish drama )
      </h2>
      
    </div>
  )

}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me to vist to goole'
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const reactElement = React.createElement (

  'a',
  {href: 'https://google.com' , target: '_blank'}, 
    'click me to visit to the google'

)

//createRoot(document.getElementById('root')).render(
  //<StrictMode>
    
    //reactElement()

  //</StrictMode>,
//)

ReactDOM.createRoot(document.getElementById('root')).
render(
 

  <App />

 
   
)