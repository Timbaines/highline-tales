import Header from '@/components/Header';
import Card from '@/components/ui/Card.jsx';
import WeatherCard from '@/components/ui/WeatherCard';

import { adventureData } from '@/data/adventure-data.js';

import './styles/globals.css';

export default function App() {

  return (
    <>
      <Header />
        <main>
            <div className="gridContainer">
                <div className="trailContainer">
                    <h2>Our Destination</h2>
                    <div className="trailInfo">
                        <p>This years upcoming vacation destination is Montana, where my wife and I will be staying in Whitefish and exploring the breathtaking Glacier National Park. Spanning over more than 1 million acres, Glacier is the crown jewel of a vast protected wilderness shared by the U.S. and Canada. With more than 700 miles of hiking trails, the park offers endless opportunities for adventure—from scenic hikes and boating on alpine lakes to wildlife viewing and relaxing drives. We’re excited to experience its iconic glaciers, rugged peaks, and crystal-clear lakes during the summer months, which are the ideal time to visit.</p>
                    </div>
                    <h3>Adventures</h3>

                    {adventureData.map(adventure => (
                        <Card key={adventure.id} adventure={adventure} />
                    ))}

                </div>
                <div className="weatherContainer">
                    <WeatherCard />
                </div>
            </div>
        </main>
    </>
  )
};


