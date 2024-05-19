import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import Products from "../Products/Products";
import { getCategories } from '../../features/categories/categoriesSlice';
//import Poster from './Poster/Poster';
//<Poster />


const Home = () => {
    const dispatch = useDispatch();
    const { list: products, isLoading, error } = useSelector((state) => state.categories);
  
    useEffect(() => {
      dispatch(getCategories());
    }, [dispatch]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        <Products title="Our Products" products={products} quantity={10} />
      </div>
    );
  };


export default Home;