import React,{useState} from 'react'
import LogInText from './Log_In_Text'
import './style_Log_in.css'
import LogInButton from './Log_In_Button'


const Log_in = (props) =>{
    
    const [title, setTitle] = useState('')
    
    return (
    <div className="Login" style={{display: props.log ? "block":"none",filter:"blur(0px)"}}>

    <div className="log-Logo">
        <img src="/Bilder/log.png" alt="logo.png"/>
    </div>
    
    <div className="log-input">
       <LogInText first={true} text={setTitle}/>
           
       <LogInText first={false}/>
    </div>
    
    <div className="log-Buttons">
        <LogInButton first={true} text={title}/>
        <LogInButton first={false} showLogin={props.showLogin}/>
    </div>
    </div>
)};
export default Log_in