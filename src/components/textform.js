import React, {useState} from 'react'

export default function Textform(props) {
    const handleupClick=()=>{
        console.log("Upppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        // props.showalert("Converted to uppercase","success");
    }

    const handleloClick=()=>{
        console.log("Upppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        // props.showalert("Converted to uppercase","success");
    }
    const handleclClick=()=>{
        console.log("Upppercase was clicked" + text);
        let newText=' ';
        setText(newText)
    }
    
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  
  window.speechSynthesis.speak(msg);
}
    const handleonchange=(event)=>{
        console.log(" on change")
        setText(event.target.value);
        }
        const [text, setText] = useState(" ");
  return ( 
    <>
    <div className='container 1' style={{color: props.mode === 'light' ? '#050a22' : 'white' }}>
        <h1 >{props.heading}</h1>
    <div class="mb-3">
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}id="mybox" rows="8" ></textarea>

    </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleupClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleloClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleclClick}>Clear Text</button>
        <button type="submit mx-2 my-2" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
    </div>
   
    <div className="container2 my-5" style={{color: props.mode === 'light' ? 'black' : 'white' }}>
        <h3>Your Text summary:- </h3>
        <p>Words :- {text.split(" ").filter((element)=>{return element.length!==0}).length} Characters :- {text.length}</p>
        <p>{0.008*text.split(" ").length} Minutes take to this</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
