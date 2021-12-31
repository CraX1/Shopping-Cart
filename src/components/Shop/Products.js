import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyProducts = [
  {
    id: "p1",
    price: 5,
    title: "First Book",
    description: "First Book I ever wrote",
  },
  {
    id: "p2",
    price: 10,
    title: "Second Book",
    description: "Second Book I ever wrote",
  },
  {
    id: "p3",
    price: 15,
    title: "Third Book",
    description: "Third Book I ever wrote",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map((product)=>(
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
