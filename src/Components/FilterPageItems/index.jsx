import { useState, useEffect } from "react";
import axios from "axios";

const FilterContent = () => {
  // const [categorie, setCategorie] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllcategorie = async () => {
      try {
        const response = await axios.get("http://localhost:4000/categories");
        setCategories(response.data);
      } catch (error) {}
    };
    getAllcategorie();
  }, []);

  // const updateFilter = (e) => {
  //   setFilter(e.target.value);
  // };
  console.log("categories", categories);
  return (
    <div>
      <h4 className="filters-title">Filter column</h4>
      {categories.map((categorie) => (
        <div>
          <input type="checkbox" />
          <label> {categorie.title} </label>
        </div>
      ))}
    </div>
  );
};

export default FilterContent;
