import React, { useState } from 'react'


export default function TextForm (props) {
    const[text, setText]=useState("");

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

     const handleCLearClick=()=>{
        let newText="";
        setText(newText);
    }



    return (
        <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black',color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCLearClick}>Clear text</button>
      </div>

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black',color:props.mode==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>

        </div>

      </>
    )
  }

