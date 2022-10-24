import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Nav from './components/Nav/Nav';

const DUMMY_MEALS = [
  {
    name: 'Barbecue Burger',
    price: 12.99,
    count: 3,
  },
];

function App() {
  const [meals, setMeals] = useState(DUMMY_MEALS);

  const addMeal = meal => {
    setMeals(prevMeals => {
      if (!prevMeals.some(prevMeal => prevMeal.name === meal.name)) {
        // adds meal if meal is not present
        return [...prevMeals, meal];
      }

      const arr = prevMeals.map(prevMeal => {
        if (prevMeal.name === meal.name) {
          prevMeal.count = prevMeal.count + meal.count;
        }
        // modifies meal if meal is present
        return prevMeal;
      });

      return [...arr];
    });
  };

  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => {
    setCartIsOpen(true);
  };

  const closeCart = () => {
    setCartIsOpen(false);
  };

  return (
    <>
      <Nav meals={meals} onClick={openCart} />
      <Header />
      <Meals onAdd={addMeal} />
      {cartIsOpen && <Cart meals={meals} onClick={closeCart} />}
    </>
  );
}

export default App;
