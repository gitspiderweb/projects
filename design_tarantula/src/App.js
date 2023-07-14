// Dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom'
// Components
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

//Styling
import './assets/styles/App.css';
//Resources
import profileImg from './assets/img/cabatuan_mark.jpg'
import featureImage from './assets/img/mac.jpg'
import design1 from './assets/designwork/tarp_design2.jpg'
import design2 from './assets/designwork/tarp_design1.jpg'
import design3 from './assets/designwork/advert.jpg'
import design4 from './assets/designwork/tea_tas.png'
import design5 from './assets/designwork/flo_water.png'
import design6 from './assets/designwork/stoney.jpg'




function App() {

  const projects = [
    {
      id: 0,
      name: "Teata's Chew and Brew",
      image: design4,
      text: "Created logo design for TeaTas Chew and Brew, a milk tea business established in 2020 by owners Jega Flores and Shena Mae Flores. The logo reflects the essence of their tea venture, promising an exhilarating journey through a diverse range of milk tea flavors.",
      link: "https://www.facebook.com/teatasCB"
    },
    {
      id: 1,
      name: "Financial Advisor advert",
      image: design3,
      text: "Commissioned in 2020, this Sunlife advertisement was created specifically for Sunlife agent Mr. Jessie. It was intended for personal advertisement and promotion of the insurance services offered by Mr. Jessie. The advertisement was posted on his social media account to reach a wider audience and showcase the benefits and features of Sunlife insurance."
    },
    {
      id: 2,
      name: "Anniversary Tarpaulin",
      image: design1,
      text: "Commissioned in 2020, this tarpaulin design was specifically created for the 23rd founding anniversary of Cebu Grace Gospel Christian Ministries at their Lapulapu Church. It was intended to serve as the main component of their stage decoration, adding visual appeal and significance to the event. The design showcases the theme and highlights the milestone achievement of the church's anniversary, creating a captivating atmosphere for attendees."
    },
    {
      id: 3,
      name: "Anniversary Tarpaulin",
      image: design2,
      text: "Commissioned in 2021, this tarpaulin design was specifically created for the 14th founding anniversary of Cebu Grace Gospel Christian Ministries at their Mandaue Church. The unique design of the tarpaulin incorporates a tree and a person standing, symbolizing the theme of 'Firm Foundation'. The design aims to visually represent the church's commitment to building a strong spiritual foundation for its members and the community. By using these elements, the tarpaulin conveys a powerful message about the church's growth, stability, and the importance of a solid spiritual grounding."
    },
    {
      id: 4,
      name: "Refilling Station Brand",
      image: design5,
      text: "The logo design for Flowater Refilling Station, owned by Jun Flores and located in Tabok, Mandaue City, Cebu, was commissioned in 2020. It was specifically created to be used for the store signs and water gallon stickers of the refilling station."
    },
    {
      id: 5,
      name: "Car Accessories Brand",
      image: design6,
      text: "The logo design for the car accessory shop owned by Mr. Jessie Joseph Cabatuan was commissioned in 2021. It was specifically created as a vector design logo, ensuring scalability and versatility for various applications and marketing materials."
    }
  ];

  const about = {
    profileImg: profileImg,
    bio: [
      "Mark Jay Cabatuan, a skilled web developer from Basak, Mandaue City, holds a degree in BS Information Technology from UC-LM. With a solid foundation in web development, Mark gained valuable experience during his internship at Plonta Creative, where he showcased his creativity and skills by designing impressive website layouts and mockups.",
      "Following his internship, Mark worked as a Product Setup Engineer at Northern Lights Technology Development, utilizing his proficiency in Adobe software applications to create visually appealing stationary products. However, in September of last year, he made a pivotal career move, resigning from his position to fully dedicate himself to web development.",
      "Currently, Mark actively seeks new opportunities to apply his expertise, learn from experienced professionals, and contribute to innovative web development projects."
    ]
  };



  const content = {
    Home: {
      featureImage: featureImage,
      about: about,
      projects: projects
    },
    Projects: {
      featureImage: featureImage,
      projects: projects
    },
    Services: {
      featureImage: featureImage,
    },
    Contact: {
      featureImage: featureImage,
    }
  };



  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home content={content.Home} />} />
        <Route path="/projects" element={<Projects content={content.Projects} />} />
        <Route path="/projects/:itemId" element={<Projects content={content.Projects} />} />
        <Route path="/services" element={<Services content={content.Services} />} />
        <Route path="/contact" element={<Contact content={content.Contact} />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;