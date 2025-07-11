import Header from './components/Header';
import Card from './components/Card';
import { activities } from './data/activities';
import './styles/globals.css';

export default function App() {

  return (
    <>
      <Header />
        <main>
            <section>
                <div className="gridContainer">
                    <div className="trailContainer">
                        <h2>Our Destination</h2>
                        <div className="trailInfo">
                            <p>Glacier National Park in Montana is an immense park spanning over 1 million acres. It is considered the centerpiece of a vast region of protected land between the United States and Canada. The park features over 700 miles of hiking trails and supports various outdoor activities such as biking, boating, fishing, and horseback riding. It is known for its dazzling hikes, backcountry campsites, glaciers, peaks, and lakes. The park is best visited during the summer months between June and September.</p>
                        </div>
                        <h3>Activities</h3>

                        {activities.map(activity => (
                            <Card key={activity.id} activity={activity} />
                        ))}

                    </div>
                    <div className="weatherContainer">
                        <div className="weatherInfo">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum esse ex explicabo inventore minima! At cumque delectus, dignissimos dolore ea est excepturi fuga in numquam provident quis saepe, vel!</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
};


