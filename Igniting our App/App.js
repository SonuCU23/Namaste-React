/*** 
 * 
 * ! Parcel Features
 *    ? HRM -> Hot Module Replacemant { File Watcher Algorithm - C++ }
 *    ? BUILDING
 *    ? MINIFY
 *    ? Code Cleaning and Compression { Removing console.log, renaming varibales to small ones }
 *    ? Manitaing Dev and Production Builds Efficiently
 *    ? Caching while Develoment { Consistent Hasing Algorithm }
 *    ? Super Fast Build Algorithm 
 *    ? Compatable with older version of browser
 *    ? Enable HTTPS on Development
 *          * -> npx parcel index.html --https
 *    ? Zero Configuration
 * 
 * 
 *  ! Important Points to be noted
 *      * Whenever we chage something in our build process e.g, --https, build etc.  , it takes
 *      * Some time but for subsequent build it becomes very fast
 * 
 *      * We should put .parcel-cache in .gitignore because it can be regenerated 
 * 
 * 
*/

import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1"
  );
  
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "Heading 2"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading2]
  );
  
  console.log(heading);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  //passing a react element inside the root
  
  //async defer
  root.render(container);