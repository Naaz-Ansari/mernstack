import React from "react";
import "./Shops.css";

class ThirstThrift extends React.Component {
    render(){
        return(
            <>
            <div className="box">
                <img className="Img" src="https://tse2.mm.bing.net/th?id=OIP.sIVj8xHSDwXizzcb_dX20wHaFj&pid=Api&P=0&w=205&h=154"/>
                <h1 className="heading">Thirst Thrift</h1>
                <p className="category">Beverages</p>
                <p className="address">Address: Plot no. 002, AD road, Jodhpur</p>
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

export default ThirstThrift;