const PlantCard = ({ plant }) => {
  return (
    <div>
      <h1>{plant.name}</h1>
      <p>Description: {plant.description}</p>
      <p>Water Amount: {plant.water_amount}</p>
      <p>Bloom Date: {plant.bloom}</p>
      <p>Weather Preference: {plant.weather_preference}</p>
      <p>Sunlight: {plant.sunlight}</p>
      <p>Soil Type: {plant.soil_type}</p>
    </div>
  );
};

export default PlantCard;
