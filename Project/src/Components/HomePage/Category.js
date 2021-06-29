import React from 'react'
import './Category.css'
import { Link } from "react-router-dom";
export const Category = () => {
    return (
        <div className="ImageScroll">
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-2">
                    <div className="card Cat-card">
                        <div className="card-body Cat-cardbody">
                            <p className="card-text c-text"> Work Hard Snack Often.</p>
                            <Link to="/SnacksBeverages" className="btn Cat-btn">Snacks & Beverages</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                    <div className="card Cat-card">
                        <div className="card-body Cat-cardbody">
                            <p className="card-text c-text">We only live once so eat like king.</p>
                            <Link to="/MainCourse" className="btn Cat-btn">Main Course</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                    <div className="card Cat-card">
                        <div className="card-body Cat-cardbody ">
                            <p className="card-text c-text">Life is short make it sweet.</p>
                            <Link to="/Deserts" className="btn Cat-btn">Deserts</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>
    )
}