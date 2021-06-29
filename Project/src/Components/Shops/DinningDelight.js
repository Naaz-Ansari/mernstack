import React from "react";
import "./Shops.css";

class DinningDelight extends React.Component {
    render(){
        return(
            <>
            <div className="box">
                <img className="Img" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                <h1 className="heading">Delightfull Dining</h1>
                <p className="category">Main Couse</p>
                <p className="address">Address: Plot no. 10, Foodie street, Jodhpur</p>
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

export default DinningDelight;