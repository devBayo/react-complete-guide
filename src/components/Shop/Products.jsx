import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Pepper"
          price={6}
          description="Lorem ipsium dolet sit."
        />

        <ProductItem
          title="Suya"
          price={3}
          description="Lorem ipsium quam lorent amet."
        />
      </ul>
    </section>
  );
};

export default Products;
