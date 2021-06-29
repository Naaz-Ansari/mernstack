import React from 'react'
import './Footer.css';
export const Footer = () => {

    return (
        <footer>
            <h1><i className="fas fa-utensils fa-3x icon"></i>  Food Mania</h1>
            <p className="text-center About">
                For us,it's not just about bringing you good food from your favourite restraunts.It's about making a connection,which is why we sit down with the chefs,dreaming up menus that will arrive fresh and full of flavour.Try us!
                <br />
                <br />
                For more details contact us <a className="Contact" href="">FoodMania@gmail.com</a>
            </p>
        </footer>
    )

}