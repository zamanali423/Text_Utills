import React, { useState, useEffect } from "react";

export default function Form(props) {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    // array of words
    const words = text.split(' ');

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (text.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);
})

  const upChange = () => {
    let newText= text.toUpperCase();
    setText(newText);
  };
  const lrChange = () => {
    let newText= text.toLowerCase();
    setText(newText);
  
  };
  const clChange = () => {
    let newText= '';
    setText(newText);
  
  };
  const tlChange = () => {
    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function(text) {
            return (text.charAt(0).toUpperCase() + text.slice(1));
        }).join(' ');
        }
        setText(titleCase(text))
  
  };
  const handleClick=(event)=>{
   setText(event.target.value);
  }
  return (
    <>
      <div className="container">
      <h2 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="MyBox"
          value={text}
          onChange={handleClick}
          rows="10"
          style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={upChange}>
        Uppercase
      </button>
      <button className="btn btn-primary mx-2"onClick={lrChange} >
        Lowercase
      </button>
      <button className="btn btn-primary"onClick={clChange} >
        Clear Text
      </button>
      <button className="btn btn-primary mx-2"onClick={tlChange} >
        Title Case
      </button>
      <div className="container">
        <h3 className="my-3" style={{color:props.mode==='light'?'black':'white'}}>Your Text Summary</h3>
        <p style={{color:props.mode==='light'?'black':'white'}}>{wordCount} words and {text.length} characters</p>
        <p style={{color:props.mode==='light'?'black':'white'}}>{wordCount*0.008} minutes to read words</p>
        <h2 style={{color:props.mode==='light'?'black':'white'}}>Preview</h2>
        <p style={{color:props.mode==='light'?'black':'white'}}>{text}</p>
      </div>
      </div>
    </>
  );
}
