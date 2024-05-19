import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../features/categories/categoriesSlice";

const Categories = () => {
    const dispatch = useDispatch();
    const { list, isLoading, error } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getCategories());

    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {list.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default Categories;