import MealItem from './MealItem';
import classes from './Meals.module.css';

const Meals = () => {
  const meals = [
    {
      name: 'Suchi',
      desc: 'Finest fish and veggies',
      price: '22.99',
    },
    {
      name: 'Schnitzel',
      desc: 'Agerman speciality!',
      price: '16.50',
    },
    {
      name: 'Barbecue Burger',
      desc: 'American, raw, meaty',
      price: '12.99',
    },
    {
      name: 'Green Bowl',
      desc: 'Healthy...and green...',
      price: '18.99',
    },
  ];
  return (
    <ul className={classes.meals}>
      {meals.map(meal => {
        return (
          <MealItem
            key={meal.name}
            name={meal.name}
            desc={meal.desc}
            price={meal.price}
          />
        );
      })}
    </ul>
  );
};

export default Meals;
