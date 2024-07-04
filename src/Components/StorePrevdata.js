const Store = ({ storeData }) => {
  
  return (
    <>
      <h2 className="display-6 text-center mb-4">Searched Locations</h2>
      
      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Location</th>
              <th style={{ width: '10%' }}>Temperature</th>
              <th style={{ width: '10%' }}>Max Temperature</th>
              <th style={{ width: '10%' }}>Min Temperature</th>
              <th style={{ width: '10%' }}>Humidity</th>
              <th style={{ width: '10%' }}>Wind Speed</th>
              <th style={{ width: '10%' }}>Wind Degrees</th>
            </tr>
          </thead>
          <tbody>
          
            {storeData.map((data, index) => (
              
              <tr key={index}>
                <th scope="row" className="text-start">{data.name}</th>
                <td>{data.main.temp}&#8451;</td>
                <td>{data.main.temp_max}&#8451;</td>
                <td>{data.main.temp_min}&#8451;</td>
                <td>{data.main.humidity}%</td>
                <td>{data.wind.speed} km/hr</td>
                <td>{data.wind.deg}</td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Store;
