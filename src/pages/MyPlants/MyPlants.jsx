import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPlants } from "../../redux/slices/myPlantsSlice";
import PlantCard from "../../components/Cards/PlantCard";

const MyPlants = () => {
  const { myPlants } = useSelector((state) => state.plants);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!myPlants) {
      dispatch(fetchPlants());
    }
  }, [dispatch, myPlants]);

  return (
    <div>
      {myPlants ? (
        myPlants.map((plant) => <PlantCard key={plant.id} plant={plant} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyPlants;
