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
          <li key={meal.name} className={classes.meal}>
            <div className={classes['meal-text']}>
              <h3 className={classes['meal-name']}>{meal.name}</h3>
              <p className={classes['meal-desc']}>{meal.desc}</p>
              <h3 className={classes['meal-price']}>${meal.price}</h3>
            </div>

            <div className={classes['meal-checkout']}>
              <div className={classes['meal-checkout-group']}>
                <label htmlFor={meal.name}>Amount</label>
                <input type="number" name="amount" id={meal.name} />
              </div>
              <button className={classes['meal-checkout-btn']}>+ Add</button>
            </div>
          </li>
        );
      })}

      {/* <li className={classes.meal}>
        <div className={classes['meal-text']}>
          <h3 className={classes['meal-name']}>Sushi</h3>
          <p className={classes['meal-desc']}>Finnest fish and veggies</p>
          <h3 className={classes['meal-price']}>$22.99</h3>
        </div>

        <div className={classes['meal-checkout']}>
          <div className={classes['meal-checkout-group']}>
            <label htmlFor="">Amount</label>
            <input type="number" name="amount" id="" />
          </div>
          <button className={classes['meal-checkout-btn']}>+ Add</button>
        </div>
      </li> */}
    </ul>
  );
};

export default Meals;
