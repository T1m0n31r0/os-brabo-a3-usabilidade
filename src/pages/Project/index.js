import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import './index.css';

function Project() {
  return (
    <>
      <Header />
      <div className="Project-top">
        
      </div>
      <div className="Project">
        <div className="Project-left">
          <div className="Project-left-top">
            <h3>Os Brabo</h3>
            <h5>UC - Usabilidade, Desenvolvimento Web, Mobile e Games</h5>
            <h5>2022/02</h5>
          </div>
          <h5>Tecnologias utilizadas no projeto:</h5>
          <ul className="Project-list">
            <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">HTML5</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS3</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a></li>
            <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank">React Js</a></li>
          </ul>
        </div>
        <div className="Project-right">
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Project;