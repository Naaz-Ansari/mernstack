import React from "react";
import {Main, Main2, Main3, Main4, Main5, Main6} from "./Main";
import Basket from "./Basket";
import { useState } from "react";
import data from "../FoodList/data";
import Header from "./Header";
import data2 from "../FoodList/bakery";
import data3 from "../FoodList/Beverages";
import data4 from "../FoodList/Sweets";
import data5 from "../FoodList/streetFood";
import data6 from "../FoodList/fastFood";

function Work() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

return(
<div>
  <Header countCartItems={cartItems.length} />
  <Main onAdd={onAdd} onRemove={onRemove} products={products} />
  <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
</div>
);
}

function Work2() {
  const { bakery } = data2;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

return(
<div>
  <Header countCartItems={cartItems.length} />
  <Main2 onAdd={onAdd} onRemove={onRemove} bakery={bakery} />
  <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
</div>
);
}

function Work3() {
  const { Beverages } = data3;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

return(
<div>
  <Header countCartItems={cartItems.length} />
  <Main3 onAdd={onAdd} onRemove={onRemove} Beverages={Beverages} />
  <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
</div>
);
}

function Work4() {
  const { Sweets } = data4;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

return(
<div>
  <Header countCartItems={cartItems.length} />
  <Main4 onAdd={onAdd} onRemove={onRemove} Sweets={Sweets} />
  <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
</div>
);
}

function Work5() {
  const { streetFood } = data5;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

return(
<div>
  <Header countCartItems={cartItems.length} />
  <Main5 onAdd={onAdd} onRemove={onRemove} streetFood={streetFood} />
  <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
</div>
);
}

function Work6() {
  const { fastFood } = data6;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

return(
<div>
  <Header countCartItems={cartItems.length} />
  <Main6 onAdd={onAdd} onRemove={onRemove} fastFood={fastFood} />
  <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
</div>
);
}

export {Work, Work2, Work3, Work4, Work5, Work6};