// Dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom'
// Components
import Home from './pages/Home';
//Styling
import './assets/styles/App.css';
//Resources
import profileImg from './assets/img/cabatuan_mark.jpg'


function App() {

  const about = {
    profileImg: profileImg,
    bio: [
      "Mark Jay Cabatuan, a skilled web developer from Basak, Mandaue City, holds a degree in BS Information Technology from UC-LM. With a solid foundation in web development, Mark gained valuable experience during his internship at Plonta Creative, where he showcased his creativity and skills by designing impressive website layouts and mockups.",
      "Following his internship, Mark worked as a Product Setup Engineer at Northern Lights Technology Development, utilizing his proficiency in Adobe software applications to create visually appealing stationary products. However, in September of last year, he made a pivotal career move, resigning from his position to fully dedicate himself to web development.",
      "Currently, Mark actively seeks new opportunities to apply his expertise, learn from experienced professionals, and contribute to innovative web development projects."
    ]
  }

  return (

    <Routes>
      <Route path="/" element={<Home content={about} />}>
      </Route>
    </Routes>

  );
}

export default App;