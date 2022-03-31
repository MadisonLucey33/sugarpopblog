/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/29/2022
  Responsive & Interactive React JS Blog
*/

import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import MagicRainbowButton from './MagicRainbowButton';

const PostCard = ({ post }) => {




  const getContentFragment = () => {
   // let src = post.featuredImage.url;
    let slug = post.slug;
    let imageClass = "object-center absolute object-cover shadow-xl rounded-t-lg lg:rounded-lg";
    let width = "1092px";
    let height = "417px";

    // content = (<Image   unoptimized
    // loader={grpahCMSImageLoader} src={post.featuredImage.url} alt=""   height={height}
    // width={width} className={imageClass} />);

    console.log(slug);

    // if (slug == "blog-1") { // #1 An Instagram Worthy Road Trip!
    //   console.log("In blog 1")
    //   imageClass = "-translate-y-6   object-cover shadow-xl rounded-t-lg lg:rounded-lg";

    //   // content = 
    //   // height="500px";
    //   // width="1092px";
    //   // if (obj.bold) {
    //   //   modifiedText = (<b key={index}>{text}</b>);
    //   // }

    //   // if (obj.italic) {
    //   //   modifiedText = (<em key={index}>{text}</em>);
    //   // }

    //   // if (obj.underline) {
    //   //   modifiedText = (<u key={index}>{text}</u>);
    //  // }
    // }  
    // if (slug == "blog-2") { // #2 The Windy City - Chicago
    //   // imageClass = "object-center absolute object-cover shadow-xl rounded-t-lg lg:rounded-lg";
    //   // leave default as above
    // }
    // if (slug == "blog-3") { // #3 Getting Around the City and the Significance of Cloud Gate
    //   <Image   unoptimized
    // loader={grpahCMSImageLoader} src={post.featuredImage.url} alt=""   height={height}
    // width={width} className={imageClass} />
    // }
    // if (slug == "blog-4") { // #4 The Cave State Missouri 
    // }
    // if (slug == "blog-5") { // #5 The Lone Star - Texas
    //   imageClass = "object-top absolute object-cover shadow-xl rounded-t-lg lg:rounded-lg";
    // }
    // if (slug == "blog-6") { // #6 Enchanting New Mexico
    // }
    // if (slug == "blog-7") { // The Golden State - California
    // }
    // if (slug == "blog-8") { // Beaver State - Oregon
    // }
    // if (slug == "blog-9") { // Amazon Day 1
    // }
  

    switch (slug) {
  
      case 'blog-1':
        console.log(post.previewImage.url); // apparently with negative margins rounding doesn't take effect...?
       // imageClass = "object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg";
       
        return (  <Link href={`/post/${post.slug}`}><Image   unoptimized
        loader={grpahCMSImageLoader} src={post.previewImage.url} alt=""   height={height}
        width={width} className={imageClass} /></Link>);
      case 'blog-5':
        imageClass = "object-top absolute object-cover shadow-xl rounded-t-lg lg:rounded-lg";
        return (   <Link href={`/post/${post.slug}`}><Image   unoptimized
          loader={grpahCMSImageLoader} src={post.featuredImage.url} alt=""   height={height}
          width={width} className={imageClass} /></Link>);
      case 'blog-6': // #6 Enchanting New Mexico
        imageClass = "object-center absolute object-cover shadow-xl rounded-t-lg lg:rounded-lg ";
        return (   <Link href={`/post/${post.slug}`}><Image   unoptimized
          loader={grpahCMSImageLoader} src={post.previewImage.url} alt=""   height={height}
          width={width} className={imageClass} /></Link>);
      case 'blog-7': // The Golden State - California
        imageClass = "object-center absolute object-cover shadow-xl rounded-t-lg lg:rounded-lg ";
        return (   <Link href={`/post/${post.slug}`}><Image   unoptimized
          loader={grpahCMSImageLoader} src={post.previewImage.url} alt=""   height={height}
          width={width} className={imageClass} /></Link>);
      case 'blog-9': // Amazon Day 1
        imageClass = "object-center absolute object-cover shadow-xl rounded-t-lg lg:rounded-lg ";
        return (   <Link href={`/post/${post.slug}`}><Image   unoptimized
          loader={grpahCMSImageLoader} src={post.previewImage.url} alt=""   height={height}
          width={width} className={imageClass} /></Link>);
      default: 
          return (   <Link href={`/post/${post.slug}`}><Image   unoptimized
            loader={grpahCMSImageLoader} src={post.featuredImage.url} alt=""   height={height}
            width={width} className={imageClass} /></Link>);

    }


  };

  const getUpdatedDate = () => {
      let slug = post.slug;

      switch(slug) {
        case 'blog-1': // May 20, 2021
          return (<span>May 20, 2021</span>);
        case 'blog-2': // Sat May 22, 2021
          return (<span>May 22, 2021</span>);
        case 'blog-3': // Sun May 24, 2021
          return (<span>May 24, 2021</span>);
        case 'blog-4': // Tue May 25, 2021
          return (<span>May 25, 2021</span>);
        case 'blog-5': // Wed May 26, 2021
          return (<span>May 26, 2021</span>);
        case 'blog-6': // Thurs May 27, 2021
          return (<span>May 27, 2021</span>);
        case 'blog-7': //  Sat May 29, 2021
          return (<span>May 29, 2021</span>);
        case 'blog-8': //  Sun May 30, 2021
          return (<span>May 30, 2021</span>);
        case 'blog-9': // Tue June 1, 2021
          return (<span>June 01, 2021</span>);
        default:
          return (moment(post.createdAt).format('MMM DD, YYYY'));
      }

  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 ">
      
      {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.title}
          className="shadow-lg rounded-t-lg lg:rounded-lg"
          layout="fill"
          src={post.featuredImage.url}
        />
      </div> */}
      <div className="relative overflow-hidden mb-6 ">
         { getContentFragment() }
      </div>

      <h1 className="transition duration-400 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
          <Image
            unoptimized
            loader={grpahCMSImageLoader}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle object-cover h-5 w-5"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle"> { getUpdatedDate() }</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center"> {/* style={{backgroundColor: '#d61eb7'}} I like this purple color
      
      <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer" >Continue Reading</span>
      */}
        {/* <Link href={`/post/${post.slug}`} > 
       
         
        </Link> */}
       
      </div>
    </div>
  );
};

export default PostCard;
