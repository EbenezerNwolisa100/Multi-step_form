import React from 'react'
import { useState } from 'react'
import Signup from './Signup';
import Personalinfo from './Personalinfo';
import Otherinfo from './Otherinfo';

function Form() {

    const [page, setPage] = useState(0);

    const Formtitle = ["Sign Up", "Personal Info", "Other Info"];

    const PageDisplay = () => {
        if (page === 0) {
            return <Signup formData={formData} setFormData={setFormData}/>;
        }
        else if (page === 1) {
            return <Personalinfo formData={formData} setFormData={setFormData}/>;
        }
        else {
            return <Otherinfo formData={formData} setFormData={setFormData}/>
        }
    }

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmpassword: "",
        firstname: "",
        lastname: "",
        username: "",
        nationality: "",
        interests: "",
    });

  return (
    <div className='form'>
        <div className="progressbar">
            <div style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}}></div>
        </div>
        <div className="form-container">
            <div className="header">
                <h1>{Formtitle[page]}</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
                <button
                disabled={page == 0}
                onClick={() => {
                    setPage((currPage) => currPage - 1);
                }}
                >Prev</button>
                <button
                onClick={() => {
                    if (page === Formtitle.length - 1){
                        alert("Form Submitted");
                        console.log(formData);
                    } else {
                        setPage((currPage) => currPage + 1);
                    }
                }}
                >{page === Formtitle.length - 1 ? "Submit" : "Next"}</button>
            </div>
        </div>
    </div>
  )
}

export default Form