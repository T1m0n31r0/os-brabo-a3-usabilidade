import logo from '../../../src/assets/bg-img.png';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import './index.css';

function Home() {
    return (
        <>
            <Header />
            <div className="Home-top">
                </div>
            <div className="Home">
                <h3>Os Brabo</h3>
                <h5>UC - Usabilidade, Desenvolvimento Web, Mobile e Games</h5>
                <h5>2022/02</h5>
                <p>Projeto Front-End da Avaliação A3 da UC de Usabilidade, Desenvolvimento Web, Mobile e Games</p>
                <br />
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Footer />
        </>
    )
}
export default Home;