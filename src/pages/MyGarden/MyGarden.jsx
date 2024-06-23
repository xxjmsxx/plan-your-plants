import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchGardens } from "../../redux/slices/myGardensSlice";
import GardenCard from "../../components/Cards/GardenCard";
import CreateCard from "../../components/Cards/CreateCard";
import CreateGarden from "../../components/Forms/Garden/CreateGarden";

const MyGarden = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { myGardens } = useSelector((state) => state.gardens);

  const handlePopUp = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!myGardens || myGardens.length === 0) {
      dispatch(fetchGardens());
    }
  }, [dispatch, myGardens]);

  return (
    <div>
      {myGardens && myGardens.length > 0 && (
        <div>
          {myGardens.map((garden) => (
            <GardenCard key={garden.id} garden={garden} />
          ))}
        </div>
      )}
      <CreateCard type="garden" handlePopUp={handlePopUp} />
      {open && <CreateGarden />}
    </div>
  );
};

export default MyGarden;
