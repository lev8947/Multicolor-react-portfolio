import "./contact.css"
import Mail from "../../img/mail.png"
import Github from "../../img/github.png"
import Link from "../../img/link.png"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_v8bo62v', 'template_fs3yeno', formRef.current, 'C6f5P9MJQSH9V34bb')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
<div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Mail} alt="" className="c-icon" />
              Lev_47@hotmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Github} alt="" />
              Lev8947
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Link} alt="" />
              Simon Levey
            </div>
          </div>
        </div>
        <div className="c-right">
        <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thanks! I will be in touch."}
          </form>
          </div>
      </div>

    </div>
  )
}

export default Contact