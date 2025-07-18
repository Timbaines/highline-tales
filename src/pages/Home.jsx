import Destination from "@/components/Destination.jsx";
import ActivityList from "@/components/ActivityList.jsx";


export default function Home() {
    return (
        <div>
            <section>
                {/*DESTINATION COMPONENT | WEATHER CARD COMPONENT */}
                <Destination />
            </section>
            <section>
                {/*ACTIVITIES COMPONENT*/}
                <ActivityList />
            </section>
        </div>
    )
}