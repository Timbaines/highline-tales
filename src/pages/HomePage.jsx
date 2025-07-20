import Destination from '@/components/Destination';
import WeatherCard from '@/components/ui/WeatherCard.jsx';
import MapContainer from '@/components/map/MapContainer.jsx';
import ActivityList from '@/components/blog/ActivityList';
import SectionLayout from '@/layouts/SectionLayout';

export default function HomePage() {
    return (
        <SectionLayout
            leftTopContent={<Destination />}
            leftBottomContent={<ActivityList />}
            rightTopContent={<WeatherCard />}
            rightBottomContent={<MapContainer />}
        />
    );
}

