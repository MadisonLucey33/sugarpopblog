/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/27/2022
  Responsive & Interactive React JS Blog
*/

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

import Geolocation from './Geolocation';
import { FeaturedPosts } from '../sections';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
  
    <div className="container mx-auto px-10 mb-0  pb-5" >
      
      <div className="border-b w-full inline-block border-blue-400 py-8 z-0">
        
        <div className="md:float-left block">
          <Link href="/" >
            <span className="cursor-pointer font-bold text-4xl text-white" style={{textShadow: "1px 1px #000000"}}>Madison Lucey Blog </span>
          </Link>
          <div className="cursor-pointer font-bold text-md text-white mt-2 text-red-200 ">✨ More coming soon -- spoiler Las Vegas & the Mojave Desert! ✨ </div>
        </div>
        
        
        <div className="hidden md:float-left md:contents">
          
        {/* <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
      </Link>
    </div> eventually will use this code for setting a link back to the career portfolio site */}
         
        <a href={`https://www.madisonlucey.com/`} target="_blank"> {/* style={{backgroundColor: '#b8129c'}}   style={{backgroundColor: '#c714a9'}}*/}
          <span className="transition duration-500 ease transform hover:-translate-y-1  md:float-right ml-5 bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer mt-3" style={{backgroundColor: '#d61eb7'}} >Career Portfolio</span>
         
        </a>
       
   
        <Link href="/"><span className="md:float-right mt-6 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-500 hover:text-pink-400 ml-3 mr-3" style={{letterSpacing: "0.034rem"}}>Blog Home</span></Link>
          {categories.map((category, index) => ( // was considering  textShadow: "0px 1px #000000",
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-6 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-500 hover:text-pink-400" style={{ letterSpacing: "0.034rem"}}>{category.name}</span></Link>
          ))}
        </div>
        
      </div>
      
      {/* <Geolocation /> */}
     
      <div>
     
      <FeaturedPosts />
      </div>
    </div>

    
  );
};

export default Header;
