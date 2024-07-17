import  { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const FoodDisplay = ({category}) => {
  const { food_list, cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  console.log("🚀 ~ FoodDisplay ~ food_list:", food_list);

  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        
      {food_list
          .filter(item => category === "All" || category === item.category)
          .map(item => (
            <div key={item._id} className="food-item">
            <div className="food-item-img-container">
              <img className="food-item-image" src={item.image} alt={item.name} />
              {!cartItems[item._id] ? (
                <img
                  className="add"
                  onClick={() => addToCart(item._id)}
                  src={assets.add}
                  alt="Add to cart"
                />
              ) : (
                <div className="food-item-counter">
                  <img
                  className="add1"
                    onClick={() => removeFromCart(item._id)}
                    src={assets.minus}
                    alt="Remove from cart"
                  />
                  <p>{cartItems[item._id]}</p>
                  <img
                  className="add1"
                    onClick={() => addToCart(item._id)}
                    src={assets.plus}
                    alt="Add to cart"
                  />
                </div>
              )}
              <div className="food-item-info">
                <div className="food-item-name-rating">
                  <p>{item.name}</p>
                </div>
                <p className="food-item-desc">{item.description}</p>
                <p className="food-item-price">${item.price}</p>
              </div>
            </div>
          </div>
         
          
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
