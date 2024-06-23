import { useDispatch } from "react-redux";
import { deleteGarden } from "../../redux/slices/myGardensSlice";

const GardenCard = ({ garden }) => {
  const dispatch = useDispatch();

  const deleteGardenRequest = async () => {
    try {
      dispatch(deleteGarden(garden.id));
    } catch (error) {
      console.error("Error deleting garden:", error);
    }
  };

  return (
    <div className="card m-3 p-2">
      <p>Name: {garden.name}</p>
      <p>Category: {garden.category} </p>
      <p>Location: {garden.location}</p>
      <button className="btn btn-primary w-50">View Garden</button>
      <button className="btn btn-primary w-50" onClick={deleteGardenRequest}>
        Delete Garden
      </button>
    </div>
  );
};

export default GardenCard;
