import React, { useEffect } from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';
import ReactGa from 'react-ga';

function MyApp({ Component, pageProps }) {



  useEffect(() => {

    var today = new Date(),

       

    //   date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
       date = (
           (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear() + 
           " at " + today.getHours() + ":" + today.getMinutes()+ " / " + (today.getHours()-12) +":" + today.getMinutes());

           var timeValue = (today.getHours() >= 12) ? " P.M." : " A.M.";  // get AM/PM 
       //    console.log(timeValue)

           date+= timeValue;

       console.log(date)


    ReactGa.initialize('UA-223881700-1')
    // to report page view 
    ReactGa.pageview('/')
    console.log("page view")
    ReactGa.set({userId: date}); // Set the user ID using signed-in user_id.
    ReactGa.set({dimension14: 'Likes dogs'});
  }, [])


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
