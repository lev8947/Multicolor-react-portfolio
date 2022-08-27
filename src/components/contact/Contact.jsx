import "./contact.css"
import Mail from "../../img/mail.png"
import Github from "../../img/github.png"
import Link from "../../img/link.png"

const Contact = () => {
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
          <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Message" name="user_message" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
          </div>
      </div>

    </div>
  )
}

export default Contact
