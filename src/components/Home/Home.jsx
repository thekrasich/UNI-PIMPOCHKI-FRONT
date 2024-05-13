import React from 'react';
import Poster from "../Poster/Poster";
import Products from "../Products/Products";

const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);

const Home = () => {
    return(
        <>
            <Poster/>
            <Products products={list} amount={4} title="Trending" />
            
        </>
    );
};

export default Home;