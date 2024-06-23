import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGarden } from "../../../redux/slices/myGardensSlice";

const CreateGarden = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    category: "",
    size: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(createGarden(formData));
    } catch (error) {
      console.error("Error creating garden:", error);
      setError("Failed to create garden. Please try again.");
    }
  };

  return (
    <div>
      <h2>Create Garden</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="size">Size in m2</label>
          <input
            type="number"
            id="size"
            value={formData.size}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <button type="submit">Create Garden</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default CreateGarden;
