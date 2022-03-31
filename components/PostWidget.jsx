/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/26/2022
  Responsive & Interactive React JS Blog
*/

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <Link href={`/post/${post.slug}`} className="text-md" key={index}>
          <div key={index} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <Image
                loader={grpahCMSImageLoader}
                alt={post.title}
                height="60px"
                width="60px"
                unoptimized
                className="align-middle rounded-full"
                src={post.featuredImage.url}
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
              <Link href={`/post/${post.slug}`} className="text-md" key={index}>
                <span className="transition duration-400 hover:text-pink-600">{post.title}</span>
                </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
