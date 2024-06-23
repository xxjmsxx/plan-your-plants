const GardenCard = ({ garden }) => {
  return (
    <div className="card m-3 p-2">
      <p>Name: {garden.name}</p>
      <p>Category: {garden.category} </p>
      <p>Location: {garden.location}</p>
    </div>
  );
};

export default GardenCard;
