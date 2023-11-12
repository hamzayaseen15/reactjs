import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "Success");
        props.showAlertColor("success");

    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "Success");
        props.showAlertColor("success");

    }
    const searchEmail = () => {
        let emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
        let extractedEmails = text.match(emailRegex);
        if(extractedEmails && extractedEmails.length > 0){
            setExtractedEmails(extractedEmails);
            setNoEmailsFound(false);
            props.showAlert("Email Found", "Success");
            props.showAlertColor("success");
        }else{
            setExtractedEmails([]);
            setNoEmailsFound(true);
            props.showAlert("Email not found", "Please try again");
            props.showAlertColor("danger");

        }
       
    }
    const handleClearClick = () => {
        let newText = ("");
        setText(newText);
        setExtractedEmails([]);
        setNoEmailsFound(false);
        props.showAlert("Cleared", "Success");
        props.showAlertColor("success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    const [extractedEmails, setExtractedEmails] = useState([]);
    const [noEmailsFound, setNoEmailsFound] = useState(false);


    return (
        <>
          <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} id="mybox" rows="8"></textarea>
            </div>
            <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button disabled ={text.length === 0} className="btn btn-secondary mx-2 my-2" onClick={searchEmail}>Find Emails</button>
            <button disabled ={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleClearClick}>Clear</button>
          </div>
          <div className='container my-3'style={{color: props.mode==='light'?'black':'white'}} >
            <h1>Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} mins to read all characters</p>
            <h2>Preview</h2>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length > 0? text: "Enter some text to preview it" }</p>
          </div>
          <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
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
    