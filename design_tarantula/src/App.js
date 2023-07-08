// Dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom'
// Components
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
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

  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('./assets/designwork/', false, /\.(png|jpe?g)$/));
  const items = images.map((image, index) => (
    {
      id: index + 1,
      title: `Item ${index + 1}`,
      image: image,
    }));

  const printMedia =
  {
    design1: design1,
    design2: design2,
    design3: design3
  }
  const logos =
  {
    design4: design4,
    design5: design5,
    design6: design6
  }


  const content = {
    Home: {
      featureImage: featureImage,
      section1: {
        profileImg: profileImg,
        bio: [
          "Mark Jay Cabatuan, a skilled web developer from Basak, Mandaue City, holds a degree in BS Information Technology from UC-LM. With a solid foundation in web development, Mark gained valuable experience during his internship at Plonta Creative, where he showcased his creativity and skills by designing impressive website layouts and mockups.",
          "Following his internship, Mark worked as a Product Setup Engineer at Northern Lights Technology Development, utilizing his proficiency in Adobe software applications to create visually appealing stationary products. However, in September of last year, he made a pivotal career move, resigning from his position to fully dedicate himself to web development.",
          "Currently, Mark actively seeks new opportunities to apply his expertise, learn from experienced professionals, and contribute to innovative web development projects."
        ]
      },
      section2: {
        items: items
      }
    },
    Projects: {
      featureImage: featureImage,
      printMedia: printMedia,
      logos: logos
    }
  };



  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home content={content.Home} />} />
        <Route path="/projects" element={<Projects content={content.Projects} />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;