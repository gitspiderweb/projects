import Layout from './Layout';

import Home from './components/Home';
import Experience from './components/Experience';
import Certificate from './components/Certificate';
import Education from './components/Education';
import { Routes, Route } from 'react-router-dom'

import me from './img/me.jpeg'
import udemy from './img/udemy.jpeg'
import bsit from './img/bsit.jpeg'
import { useState } from 'react';

function App() {

  const homeDetails = {
    heading: "Mark Jay Fuentes Cabatuan",
    subheadings: ["Full Stack Developer • Graphic Designer"],
    paragraphs: ["Can help you with building web applications from front end: HTML, CSS, React, Adobe Illustrator, InDesign, Photoshop (for logos and icons) - to backend: Node, MongoDB including crypto/ blockchain development on web3 and decentralized applications all powered by Javascript.", "Also familiar with Java and Android."],
    imgSrc: me,
    imgCptn: "profile-image"
  }
  const certificateDetails = {
    heading: "Web Development 2022",
    subheadings: ["Udemy Bootcamp"],
    paragraphs: ["Successfully completed the course The Complete 2023 Web Development Bootcamp on 11/09/2022 as taught by Dr. Angela Yu on Udemy. The certificate indicates the entire course was completed as validated by the student.", "Learned HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps."],
    imgSrc: udemy,
    imgCptn: "udemy-certificate"
  }
  const educationDetails = {
    heading: "Bachelor of Science in Information Technology",
    subheadings: ["University of Cebu - Lapulapu and Mandaue"],
    paragraphs: ["Graduated March 2017.", "Thesis: UI Designer for an automated android application for academic event management called AcadeMeet that allow more range of information dissemination on academic seminars, exhibits, and productive student meet-ups and collaborations."],
    imgSrc: bsit,
    imgCptn: "bsit"
  }

  const experienceDetails = [
    {
      heading: "Northern Lights Technology Development",
      subheadings: ["2017-2022 - Product Set-up Engineer"],
      descriptions: ["Help the company deliver as is, no QA needed with attention to detail products to customers resulting to more in and out projects and expansion of the graphics team.", "Solve complex customer requests and share solutions to the team effectively increasing efficiency and productivity.", "Worked includes but not limited to: web app generated templates for business cards, letterheads, envelopes, notecards and an e-commerce platform for the said products."]
    },
    {
      heading: "Plonta Creative - Cebu",
      subheadings: ["2016-2017 - Website Artist Intern"],
      descriptions: ["Able to provide trendy and information rich website layouts and mockups to developers making the company deliver up to date website designs to users."]
    }
  ]

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (

    <Routes>
      <Route path="/" element={<Layout isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />}>
        <Route index element={<Home details={homeDetails} />} />
        <Route path="experience" element={<Experience details={experienceDetails} />} />
        <Route path="certificate" element={<Certificate details={certificateDetails} />} />
        <Route path="education" element={<Education details={educationDetails} />} />
      </Route>
    </Routes>

  );
}

export default App;
