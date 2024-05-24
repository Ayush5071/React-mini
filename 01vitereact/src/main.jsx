import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const newUser = "   something "
function Myapp(){
    //iske andar jitne bhi function haisbka conversioon hota hai tree ke andar ...... samjhe 
    return(
        <div>
        <h1> CUSTOM APP ! </h1> 
        </div>
    )
}
const anotherElement =( 
    <a href="https://google.com" target='_blank'>VISIT GOOGLE</a>
)

const reactElement =React.createElement(
    'a',
    {
        href:'https://google.com',
        target:'_blank',
    },
    'click me to visit google',
    newUser   //this place is for evaluated expression of js

)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <Myapp/>//Myapp() -- aise bhi likha ja sakta hai ..
    <App />
    // anotherElement
    // reactElement

)
