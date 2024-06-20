import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGardens } from "../../redux/slices/myGardensSlice";
import GardenCard from "../../components/Cards/GardenCard";

const MyGarden = () => {
  const dispatch = useDispatch();
  const { myGardens } = useSelector((state) => state.gardens);

  useEffect(() => {
    if (!myGardens) {
      dispatch(fetchGardens());
    }
  }, [dispatch, myGardens]);

  return (
    <div>
      {myGardens && (
        <div>
          {myGardens.map((garden) => (
            <GardenCard key={garden.id} garden={garden} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGarden;
