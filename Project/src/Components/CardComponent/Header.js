import React from 'react'

const Header = (props) => {
    const {countCartItems} = props;
    return (
        <div>
          {' '}
          {props.countCartItems ? (
            <div className="badge">{props.countCartItems}</div>
          ) : (
            ''
          )}
          <div className="cart">
            <i class="fas fa-shopping-cart fa-2x"></i>
            </div>
            
        </div>
    )
}

export default Header;
