import React from "react";
import "./Shops.css";

class GoldenGrills extends React.Component {
    render(){
        return(
            <>
            <div className="box">
                <img className="Img" src="https://tse2.mm.bing.net/th?id=OIP.Cbcx1e_CzFnR4TeZeMP6ewHaE8&pid=Api&P=0&w=227&h=152"/>
                <h1 className="heading">Golden Grills</h1>
                <p className="category">Fast food</p>
                <p className="address">Address: Plot no. 30, Cafeteria road, Jodhpur</p>
                <p className="rating">Rating:</p>
                <i class="fas fa-star Stars"></i>
                <i class="fas fa-star Stars"></i>
                <i class="fas fa-star Stars"></i>
                <i class="fas fa-star Stars"></i>
            </div>
            </>
        )
    }
}

export default GoldenGrills;