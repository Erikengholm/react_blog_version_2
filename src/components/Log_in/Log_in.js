import React,{useState} from 'react'
import Log_in_text from './Log_in_text'
import './style_Log_in.css'
import Log_in_Button from './Log_in_Button'


const Log_in = (props) =>{
    const [title, setTitle] = useState('')

return (
    <div className="Login" style={{display: props.log ? "block":"none",filter:"blur(0px)"}}>

    <div className="log-Logo">
        <img src="/Bilder/log.png"/>
    </div>
    <div className="log-input">
       <Log_in_text first={true} text={setTitle}/>
           
       <Log_in_text first={false}/>
    </div>
    <div className="log-Buttons">
        <Log_in_Button first={true} text={title}/>
        <Log_in_Button first={false} showLogin={props.showLogin}/>

    </div>
    </div>
)};
export default Log_in