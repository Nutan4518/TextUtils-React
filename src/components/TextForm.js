import React, {useState} from 'react'

export default function TextForm(props) {


const handleUpClick=()=>{
    // console.log("upper case button was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("success","Text is converted to upper case")
};

const handleLowerClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("success","Text is converted to lower case")

};
const handleOnChange = (event) => {
    // console.log(" On Change");
    setText(event.target.value);
};

const clearDefaultText = () => {
    if (text === "Enter text here") {
        setText("");
    props.showAlert("success","Text is cleared")

    }
};

const handleClearClick = () => { 
        setText("");
};

const handleCopyText = () => {
    const text = document.getElementById('myBox');
    navigator.clipboard.writeText(text.value)
        .then(() => {
            alert('Text copied to clipboard!');
        })
        .catch(err => {
            alert('Failed to copy text: ', err);
        });

    props.showAlert("success","Text is copied to clipboard")

};

const [text,setText] = useState("Enter text here")

// text ="changed the Enter text here"; /// its a wrong way
// setText="changed Enter Text here";
// console.log("true");
  return (
    <>
    <div className="container"  style={{color:props.mode ==='dark'?'white':'grey'}}>
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea 
                className='form-control' 
                onFocus={clearDefaultText}
                value={text}
                onChange={handleOnChange}  
                style={{backgroundColor:props.mode ==='dark'?'grey':'white',
                color:props.mode ==='dark'?'white':'grey'
                }}
                id="myBox" rows="10" >

                </textarea>
            </div>

            <button className="btn btn-primary mx-2" 
            onClick={handleUpClick}> Convert Your Text to UPPERCASE
            </button>
            <button className="btn btn-primary mx-2" 
            onClick={handleLowerClick}> Convert Your Text to lowercase
            </button>
            <button className="btn btn-primary mx-2" 
            onClick={handleClearClick}> Clear text
            </button>
            <button className="btn btn-primary mx-2" 
            onClick={handleCopyText}> Copy text
            </button>
        </div>
        <div className="container my-3" 
         style={{backgroundColor:props.mode ==='dark'?'grey':'white',
         color:props.mode ==='dark'?'white':'grey'}} >
            <h2> your text summary  </h2>              
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p> Reading time: {0.008 * text.split(" ").length}m  </p>    
            <h2> Preview </h2>
            <p>{text.length>0?text:"Write Something to preview" }</p>
        </div>
    </div>
    </>
  )
}
