import { useParams } from 'react-router';

const ProductDetail = () => {
  const params = useParams();
  console.log(params);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
