import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const arr = [{
    title:'Test',
    price:6,
    description:'This is a first product - amazing!',
    quantity:1,
    id:'id1',
  },
  {
    title:'Test2',
    price:10,
    description:'This is a first product - amazing!',
    quantity:1,
    id:'id2',
  }]
  const productItem = arr.map((element)=>{
    return <ProductItem
          title={element.title}
          price={element.price}
          description={element.description}
          quantity={element.quantity}
          id={element.id}
        />
  })

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItem}
      </ul>
    </section>
  );
};

export default Products;
