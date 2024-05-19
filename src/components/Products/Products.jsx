import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Products.module.css";

const Products = ({ title, style = {}, products = [], quantity }) => {
    const list = products.filter((_, i) => i < quantity);
  
    return (
      <section className={styles.products} style={style}>
        {title && <h2>{title}</h2>}
  
        <div className={styles.list}>
          {list.map(({ id, name, category: { name: cat }, description, price }) => (
            <Link to={`/products/${id}`} key={id} className={styles.product}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${images[0]})` }}
              />
  
              <div className={styles.wrapper}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.cat}>{cat}</div>
                <div className={styles.description}>
                {description ? description : "No description available"}</div>
                <div className={styles.info}>
                  <div className={styles.prices}>
                    <div className={styles.price}>{price}$</div>
                    <div className={styles.oldPrice}>
                      {Math.floor(price * 0.8)}$
                    </div>
                  </div>
  
                  <div className={styles.purchases}>
                    {Math.floor(Math.random() * 20 + 1)} purchased
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  };
  
  export default Products;