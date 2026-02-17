import react, {useState}  from 'react'
import HourlyForcast from './HourlyForcast';
import HourlyTemp from './HourlyTemp';
import { height } from '@mui/system';

import "./HourlyForcast.css"

function AppHourly({weatherHourly}) {

    if (!weatherHourly.length) return <p>Loading...</p>;

    const days = [...new Set(weatherHourly.map(item => item.day))];

    const [selectedDay, setSelectedDay] = useState(days[0]);

    const filteredHourly = weatherHourly.filter(
        item => item.day === selectedDay
    );

    return (
        <div className="apphourBox">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <p>Hourly forecast</p>
                <HourlyForcast 
                    days = {days}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                />
            </div>
            <div>
                <HourlyTemp hourlyTemp = {filteredHourly} />
            </div>
        </div>
    )
}

export default AppHourly;