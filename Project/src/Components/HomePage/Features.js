import React from 'react'
import './Features.css'
// import { Link } from "react-router-dom";
export default function Features() {
    return (
        <div className="feature">
            <div className="row">
                <div className="col-sm-3">
                    <div className="card f-card">
                        <div className="card-body f-body">
                            <img className="card-img" src="https://tse1.mm.bing.net/th?id=OIP.hFK7KbYodQWRr0WYFaw8rgHaHa&pid=Api&P=0&w=300&h=300" alt="" />
                            <h3 className="card-title">Order</h3>
                            <p className="card-text f-text">Discover many delicious restaurants and order meals.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1" ></div>
                <div className="col-sm-3">
                    <div className="card f-card">
                        <div className="card-body f-body">
                            <img className="card-img" src="https://media.istockphoto.com/vectors/motorbike-delivery-man-logo-icon-symbol-vector-template-vector-id1200224470?k=6&m=1200224470&s=612x612&w=0&h=urcEK2shQXQAimSRvgQhpLQpUasMWws2Ll9EpgGAPwM=" alt="" />
                            <h3 className="card-title">Enjoy</h3>
                            <p className="card-text f-text">Sit back and relax as the restaurant prepares your order.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1" ></div>
                <div className="col-sm-3">
                    <div className="card f-card">
                        <div className="card-body f-body">
                            <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QoFbz2XX0Qtr3LNbM8iIfzxGwor0k2tUj1-eAQnCC1lN5_2Qfhxtkz4laVWk70stpQ4&usqp=CAU" alt="" />
                            <h3 className="card-title">Relax</h3>
                            <p className="card-text f-text">Our rider picks ups your order and brings it to you.Enjoy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}