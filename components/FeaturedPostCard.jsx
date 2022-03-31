/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/27/2022
  Responsive & Interactive React JS Blog
*/

import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => ( //hover:scale-105
  <div className="h-72 mt-8 transition duration-500 ease transform hover:shadow-lg hover:drop-shadow-lg hover:z-5 mt-0 opacity-100 lg:hover:relative lg:hover:-translate-y-4">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
      <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{post.title}</p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle drop-shadow-lg object-cover h-5 w-5"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full transition duration-500 ease transform hover:-translate-y-1 " /></Link>
  </div>
);

export default FeaturedPostCard;
