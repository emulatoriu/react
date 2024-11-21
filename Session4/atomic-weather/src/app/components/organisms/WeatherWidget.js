import LocationInfo from "../molecules/LocationInfo";
import WeatherInfo from "../molecules/WeatherInfo";

export default function WeatherWidget() {
    return <div>
        <WeatherInfo />
        <LocationInfo />
    </div>
}