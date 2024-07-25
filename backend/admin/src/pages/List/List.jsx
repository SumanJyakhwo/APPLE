import  { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./List.css";

const List = ({ url }) => {
  console.log("🚀 ~ List ~ url:", url);
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching the list");
      }
    } catch (error) {
      toast.error("Error fetching the list");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood = async (foodId) => {
    try {
      console.log(foodId);
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error");
      console.error(error);
    }
  };

  return (
    <div className="list add flex-col">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Description</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <button onClick={() => removeFood(item._id)} className='cursor'>Delete</button>
            <Link to={`/add/${item._id}`} className='cursor'>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
