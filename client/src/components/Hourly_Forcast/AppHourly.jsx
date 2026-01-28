import react, {useState}  from 'react'
import HourlyForcast from './HourlyForcast';
import HourlyTemp from './HourlyTemp';

const box = {
    background: "hsl(243, 27%, 20%)",
    borderRadius: "15px",
    maxWidth: "100%",
    padding: "20px"
};

function AppHourly({weatherHourly}) {

    if (!weatherHourly.length) return <p>Loading...</p>;

    const days = [...new Set(weatherHourly.map(item => item.day))];

    const [selectedDay, setSelectedDay] = useState(days[0]);

    const filteredHourly = weatherHourly.filter(
        item => item.day === selectedDay
    );

    return (
        <div style={box}>
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