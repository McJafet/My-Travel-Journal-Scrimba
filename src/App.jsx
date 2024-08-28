import Header from './components/Header';
import Card from './components/Card';
import data from './data/data.js';
import './App.css';

export default function App() {

  const Cards = data.map((item, index) => {
    return (
      <Card
        key={index}
        img={item.img}
        location={item.location}
        locationUrl={item.locationUrl}
        name={item.name}
        date={item.date}
        description={item.description}
      />
    )
  });

  return (
    <div className="container">
      <Header />
      <main className='card-container'>
        {Cards}
      </main>
    </div>
  )
}