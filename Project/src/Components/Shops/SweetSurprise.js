import React from "react";
import "./Shops.css";

class SweetSurprise extends React.Component {
    render(){
        return(
            <>
            <div className="box">
                <img className="Img" src="https://img.qraved.co/v2/image/data/Indonesia/Jakarta/Cilandak/Holland_Bakery/IMG_0375-1451989577112.JPG"/>
                <h1 className="heading">Sweet Surprise</h1>
                <p className="category">Cakes and pastries</p>
                <p className="address">Address: Plot no. 109, Bakers point, Jodhpur</p>
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

export default SweetSurprise;