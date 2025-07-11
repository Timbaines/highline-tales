import Header from './components/Header';

import './styles/globals.css'

export default function App() {

  return (
    <>
      <Header />
        <section>
            <div className="gridContainer">
                <div className="trailContainer">
                    <h2>Highline Trail</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum esse ex explicabo inventore minima! At cumque delectus, dignissimos dolore ea est excepturi fuga in numquam provident quis saepe, vel!</p>
                </div>
                <div className="weatherContainer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum esse ex explicabo inventore minima! At cumque delectus, dignissimos dolore ea est excepturi fuga in numquam provident quis saepe, vel!</p>
                </div>
            </div>
        </section>
    </>
  )
};


