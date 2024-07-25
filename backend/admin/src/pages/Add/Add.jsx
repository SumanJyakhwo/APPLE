import  { useState, useEffect } from 'react';
import './Add.css';
import axios from "axios";
import { assets } from '../../assets/assests';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Add = ({ url }) => {
  const { id } = useParams(); // Destructure `id` from useParams

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
    image:"",
  });

  // Function to fetch data by ID
  const fetchDataById = async (foodId) => {
    try {
      const response = await axios.get(`${url}/api/food/get/${foodId}`);
      if (response.data.success) {
        const { name, description, price, category,image } = response.data.data;
        setData({ name, description, price, category,image });
       
      } else {
        toast.error("Error fetching product");
      }
    } catch (error) {
      console.error("Error fetching product", error);
      toast.error("Error fetching product");
    }
  };

  // Effect to fetch data when `id` changes
  useEffect(() => {
    if (id) {
      fetchDataById(id);
    }
  }, [id]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    
    if (image) {
      const imageUrl = `${url}/images/${data.image}`; 
      formData.append('image', image, imageUrl); 
    }
    try {
      let response;
      if (id) {
        response = await axios.put(`${url}/api/food/edit/${id}`, formData);
        console.log("formData",formData)
      } else {
        response = await axios.post(`${url}/api/food/add`, formData);
      }
      
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        console.error("Failed to add/update product", response.data.message);
        toast.error("Failed to add/update product", response.data.message);
      }
    } catch (error) {
      console.error("Error adding/updating product", error);
      toast.error("Error adding/updating product");
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.logo} alt="Upload"/>
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required={!id} // Require image upload only for new items
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name='name'
            placeholder='Type here'
            required
          />
        </div>

        <div className='add-product-description flex-col'>
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
              required
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
              required
            />
          </div>
        </div>

        <button type="submit" className='add-btn'>
          {id ? "Update" : "Add"} {/* Dynamic button text based on whether it's an update or add */}
        </button>
      </form>
    </div>
  );
};

export default Add;
