import React from "react";
import "./Shops.css";

class SweetRepeat extends React.Component {
    render(){
        return(
            <>
            <div className="box">
                <img className="Img" src="http://2.bp.blogspot.com/-sXciNjGD2zA/T0iQSw5czdI/AAAAAAAAC74/aN-WtJvG9cQ/s1600/P1030939.JPG"/>
                <h1 className="heading">Sweet Repeat</h1>
                <p className="category">Indian Sweets</p>
                <p className="address">Address: 112 AB, 326 road, Jodhpur</p>
                <p className="rating">Rating:</p>
                <i class="fas fa-star Stars"></i>
                <i class="fas fa-star Stars"></i>
                <i class="fas fa-star Stars"></i>
                <i class="fas fa-star Stars"></i>
                <i class="fas fa-star-half-alt Stars"></i>
            </div>
            </>
        )
    }
}

export default SweetRepeat;