const CreateCard = ({ type, handlePopUp }) => {
  return (
    <div className="card m-3 p-2 align-items-center">
      <h3 className="text-center">Create a new {type}</h3>
      <button className="btn btn-primary w-50" onClick={handlePopUp}>
        +
      </button>
    </div>
  );
};

export default CreateCard;
