/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/26/2022
  Responsive & Interactive React JS Blog
*/

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 ">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
         
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3 ${(window.location.pathname == `/category/${category.slug}`) ? 'text-pink-600 font-semibold' : ''} transition duration-400 hover:text-pink-600`}  style={{letterSpacing: "0.027rem"}}>{category.name}</span>
        </Link>
      ))
      
      }
    
     
    </div>
  );
};

export default Categories;
