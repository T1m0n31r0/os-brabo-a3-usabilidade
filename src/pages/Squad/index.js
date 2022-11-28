import './index.css';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Squad() {
  return (
    <>
      <Header />
      <div className="Squad-top">
      </div>
      <div className="Squad">
        <div className="Squad-left">
        </div>
        <div className="Squad-right">
          <div className="Squad-right-top">
            <h3>Os Brabo</h3>
            <h5>UC - Usabilidade, Desenvolvimento Web, Mobile e Games</h5>
            <h5>2022/02</h5>
          </div>
          <h5>Squad Members:</h5>
          <ul className="Squad-list">
            <li>Pablo Lino</li>
            <li>Nicolas Tavares</li>
            <li>Erickson Margarida</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Squad;