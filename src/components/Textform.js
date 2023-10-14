import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        console.log("LowerCase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const searchEmail = () => {
        console.log("email")
        let emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
        let extractedEmails = text.match(emailRegex);
        if(extractedEmails && extractedEmails.length > 0){
            setExtractedEmails(extractedEmails);
            setNoEmailsFound(false);
        }else{
            setExtractedEmails([]);
            setNoEmailsFound(true)
        }
       
    }
    const handleClearClick = () => {
        console.log("Clear")
        let newText = ("");
        setText(newText);
        setExtractedEmails([]);
        setNoEmailsFound(false)
    }
    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    const [extractedEmails, setExtractedEmails] = useState([]);
    const [noEmailsFound, setNoEmailsFound] = useState(false);


    return (
        <>
          <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-secondary mx-2" onClick={searchEmail}>Find Emails</button>
            <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear</button>
          </div>
          <div className='container my-3'>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} mins to read all characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
          </div>
          <div className="container my-3">
            {noEmailsFound ? (
              <h3>No email addresses found .</h3>
            ) : (
              <div>
                <h3>Found Emails</h3>
                <ul>
                  {extractedEmails.map((email, index) => (
                    <li key={index}>{email}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )
    }
    