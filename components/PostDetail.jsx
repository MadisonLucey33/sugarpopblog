/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/26/2022
  Responsive & Interactive React JS Blog
*/

import React from 'react';

import moment from 'moment';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
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
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6 h-full">
          <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg  " />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
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
              <span className="align-middle">{getUpdatedDate()}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>

    </>
  );
};

export default PostDetail;
