import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllMachine from "../AllMachine/AllMachine";

const SideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(" https://machinaries-shop-server.vercel.app/machine_category")
      .then((res) => res.json())
      .then((data) => {
        console.log("category data ", data);
        setCategories(data);
      });
  }, []);

  return (
    <div className=" w-2/3  ">
      <h1 className="text-xl font-bold font-serif my-2">Categories</h1>
      <hr />
      {categories?.map((category) => (
        <>
          <p key={category?.category_id}>
            <Link to={`/machine_category/${category?.category_id}`}>
              <p className="capitalize"> {category?.name}</p>
            </Link>
          </p>
        </>
      ))}
    </div>
  );
};

export default SideBar;
