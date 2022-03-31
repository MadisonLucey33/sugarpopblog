/*
  Developer Madison Lucey
  @version 3/17/2022 - 3/26/2022
  Responsive & Interactive React JS Blog
*/

import React, { useState, useEffect } from "react";
import axios from 'axios'
import { submitLog } from '../services';


const GeoLocation = () => {


    const [cat, setCat] = useState('');


    // const [Product_Name, setProduct_Name] = useState(['']);
    // const [Product_Number, setProduct_Number] = useState(['']);
    // const [Product_Details, setProduct_Details] = useState(['']);
    // const [ActivityIndicator_Loading, setActivityIndicator_Loading] = useState([false]);


    // this.state = { 
 
    //     Product_Name: '', 

    //     Product_Number: '', 

    //     Product_Details: '',

    //     ActivityIndicator_Loading: false, 

    // }

    /* 
    CREATE TABLE IF NOT EXISTS `reactlogs` (
        `ID` INTEGER PRIMARY KEY AUTO_INCREMENT,
        `IP` varchar(75),
        `city` varchar(75),
        `state` varchar(75),
        `postal` varchar(75),
        `countryName` varchar(35),
        `countryCode` varchar(35),
        `latitude` varchar(75),
        `longitude` varchar(75),
            time_of_log TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
    */


            /* 
            
            
            CREATE TABLE IF NOT EXISTS `testlogs` (
	`ID` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `city` varchar(75)
)



           CREATE TABLE IF NOT EXISTS `testlogs` (
	`ID` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `city` varchar(75),
    `state` varchar(75)
)
            
            */

//const API_PATH = 'http://localhost.com/components/api/insert/index.php';

    //creating function to load ip address from the API
    const getData = async () => {   
        if (!cat) {
     //   console.log("inside get data function")
        
        const res = await axios.get('https://geolocation-db.com/json/')
      //  console.log( res.data.state)
        
//         header('Access-Control-Allow-Origin: http://localhost:3000/');
//   header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
//   header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
//   header("Content-Type: application/json; charset=UTF-8");

 //       var today = new Date(),

       

     //   date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        // date = (
        //     (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear() + 
        //     " at " + today.getHours() + ":" + today.getMinutes()+ " / " + (today.getHours()-12) +":" + today.getMinutes());

        //     var timeValue = (today.getHours() >= 12) ? " P.M." : " A.M.";  // get AM/PM 
        // //    console.log(timeValue)

        //     date+= timeValue;

    //    console.log("The date is" + date)


        // const obj = {
        //     state: res.data.state, city: res.data.city, 
        //     country: res.data.country_name, 
        //     ip: res.data.IPv4, postal: res.data.postal,
        //     countryCode: res.data.country_code,
        //     latitude: res.data.latitude,
        //     longitude: res.data.longitude, time: date
        // };

       // axios.post("http://localhost:3001/api/insert", { 
       // axios.post("http://ec2-3-87-36-190.compute-1.amazonaws.com:3001/api/insert", { 


// commented bc no longer using express and switching to php due to https to http mixed active content error
    //     axios.post("http://ec2-3-87-36-190.compute-1.amazonaws.com:3001/api/insert", { 
    //         state: res.data.state, city: res.data.city, 
    //         country: res.data.country_name, 
    //         ip: res.data.IPv4, postal: res.data.postal,
    //         countryCode: res.data.country_code,
    //         latitude: res.data.latitude,
    //         longitude: res.data.longitude, time: date
    //     }).then(() => {
    //  //       console.log("succesful")
    //     })


  //  const myVariable = "hello from my variable";





   // console.log(myVariable);

  // fetch("https://cors-anywhere.herokuapp.com/https://madisonlucey.com/api/insert/index.php",{ // doesnt work bc developer shut his software
//   const response = await fetch("https://madisonlucey.com/api/insert/index.php",{
    
//       method: 'POST',
//       mode: 'no-cors',
//       headers: new Headers({
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//                 //  'Content-Type': 'application/x-www-form-urlencoded',
//                   'Access-Control-Allow-Origin': 'http://localhost:3000',
//               //  'Access-Control-Allow-Origin': 'https://madisonlucey.com/api/insert/index.php'
//               'Access-Control-Allow-Headers': 'xxx',
//               'Authorization': 'Basic xxx'
//         }),
        
//         body: JSON.stringify({state: 'state'})
//     });


// const response = await fetch("https://www.madisonlucey.com/api/insert/index.php",{
//     method: 'POST',
//     mode: 'no-cors',
//     headers: new Headers({
//                'Content-Type': 'application/x-www-form-urlencoded',
//                'Access-Control-Allow-Origin': 'http://localhost:3000'
//               // 'Access-Control-Allow-Origin': 'https://www.madisonlucey.com'
//       }),
//     body: "name= " + date
//   });



        // axios.post("https://www.madisonlucey.com/api/insert/index.php", { 
        //     mode: 'no-cors',
        //     state: res.data.state, city: res.data.city, 
        //     country: res.data.country_name, 
        //     ip: res.data.IPv4, postal: res.data.postal,
        //     countryCode: res.data.country_code,
        //     latitude: res.data.latitude,
        //     longitude: res.data.longitude, time: date
        // }).then(() => {
        // //       console.log("succesful")
        // })

    // const Insert_Data_Into_MySQL = () =>
    // {
    //     this.setState({ ActivityIndicator_Loading : true }, () =>
    //     {
    //         fetch('https://www.madisonlucey.com/api/insert/index.php',
    //         {
    //             method: 'POST',
    //             headers: 
    //             {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(
    //             {
    //               product_name : this.state.Product_Name,
 
    //               product_number : this.state.Product_Number,
 
    //               product_details : this.state.Product_Details
 
    //             })
 
    //         }).then((response) => response.json()).then((responseJsonFromServer) =>
    //         {
    //             alert(responseJsonFromServer);
 
    //             this.setState({ ActivityIndicator_Loading : false });
 
    //         }).catch((error) =>
    //         {
    //             console.error(error);
 
    //             this.setState({ ActivityIndicator_Loading : false});
    //         });
    //     });
    // }

  

 //   console.log(obj);

    // axios.post(API_PATH, obj)
    // .then(res => console.log(res.data));

  //  Insert_Data_Into_MySQL();

  const commentObj = {
    ip: res.data.IPv4,
    city: res.data.city,
    state: res.data.state,
  //  slug: slug,
  };

 // console.log(res.data.state);


  submitLog(commentObj)
      .then((res) => {
     //   console.log(res + "success!")
      });


    setCat("the cat is here!");
} else {
 //   console.log("cat si already set")
}
    };
    


    useEffect( () => {
        //passing getData method to the lifecycle method
    //    console.log("usefecct")
      //  getData()
  //      console.log(cat)
        if (!cat) {
  //          console.log(cat);
            getData();
        }
        
    
    }, [])


    // getStaticProps = async function() {
    //     const res = await axios.get('https://geolocation-db.com/json/')
    //     console.log("initial props")
    //     console.log(res)
    //   }

    return (
        <>
        
        </>
    );
};

export default GeoLocation;