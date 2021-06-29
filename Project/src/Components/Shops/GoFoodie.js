import React from "react";
import "./Shops.css";

class GoFoodie extends React.Component {
    render(){
        return(
            <>
            <div className="box">
                <img className="Img" src="https://thumbs.dreamstime.com/b/street-food-shop-amsterdam-selling-typical-dutch-culinary-products-netherlands-176264531.jpg"/>
                <h1 className="heading">Go Foodie</h1>
                <p className="category">Street food</p>
                <p className="address">Address: Plot no. 204, Shopper, Jodhpur</p>
                <p className="rating">Rating:</p>
                <i class="fas fa-star Stars"></i>
                <i class="fas fa-star Stars"></i>
                <i class="fas fa-star Stars"></i>
                <i class="fas fa-star-half-alt Stars"></i>
            </div>
            </>
        )
    }
}

export default GoFoodie;