// import React from "react";
// import blogData from "../data/blog";


function About({image = "https://via.placeholder.com/215", about }) {
    return (
        <aside>
            <img src={image} alt='blog logo' />
            <p>{about}</p>
        </aside>
    )
}

export default About;

// function About(props) {
//     return (
//       <div className="App">
//         <aside>
//           <img src= {image} alt="blog logo">{props.name}</h1>
//         </aside>
//       </div>
//     );
//   }
  
//   export default About;
  