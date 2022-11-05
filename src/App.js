import './App.scss';
import HeroImg from './components/HeroImg';
import IconMusic from './components/IconMusic';

function App() {
  return (
    <main className="App">
      <section className='card-summary'>
        <div className='card-summary__hero-img'>
          <HeroImg />
        </div>
        <div className='container'>
          <h1 className='card-summary__title'>Order Summary</h1>
          <p className='card-summary__desc'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          <div className='container-music'>
            <IconMusic />
            <div className='container-price'>
              <h2 className='card-summary__price-name'>Annual Plan</h2>
              <p className='card-summary__price'>$59.99/year</p>
            </div>
            <a className='card-summary__change-price' href='index.html' >Change</a>
          </div>
          <button className='card-summary__btn-payment'>Proceed to Payment</button>
          <a className='card-summary__btn-cancel-order' href='index.html'>Cancel Order</a>
        </div>
      </section>
    </main>
  );
}

export default App;
