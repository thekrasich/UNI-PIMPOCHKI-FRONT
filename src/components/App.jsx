import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "./Routes/Routes";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";


import { getProducts } from "../features/products/productsSlice";
import { getCategories } from "../features/categories/categoriesSlice";
const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
      }, [dispatch]);

    return <div className="app">
        <Header />
    <div className="conteiner">
        <Sidebar/>
        <AppRoutes/>
    </div>

        <Footer />
    </div>;
};
export default App;