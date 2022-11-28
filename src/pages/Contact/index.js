import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './index.css';

function Contact() {
    return(
      <>
      <Header />
      <div className="Contact-us-header">

      </div>
        <div className="Contact-us">
        <div className="Contact-us-top">
          <h4>Os Brabo</h4>
          <h5>UC - Usabilidade, Desenvolvimento Web, Mobile e Games</h5>
          <h5>2022/02</h5>
        </div>
        <h5>Contact Us</h5>
        <div className="Contact-us-form">
          <form action='mailto:richard.souza@animaeducacao.com.br' method='POST' encType='text/plain'>
            <fieldset>
              <legend>Contact Us</legend>
              <br />
              <label for="name">Full Name</label>
              <br />
              <input type="text" className="Name-email" id="name" name="name" placeholder="Full Name" />
              <br />
              <label for="email">Email</label>
              <br />
              <input type="email" className="Name-email" id="email" name="email" placeholder="Email" />
              <br />
              <label for="message">Message</label>
              <br />
              <textarea name="message" rows="10" cols="30">
                
              </textarea>
              <input type="submit" className="Contact-us-send" id="submit" name="submit" />
            </fieldset>
          </form>
        </div>
      </div>
      <Footer />
      </>
    )
}
export default Contact;