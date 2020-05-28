import React from 'react'
import Styles from "./App.module.css"
import Title from "./components/Title/Title"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Whyus from "./components/Whyus/Whyus"
import Footer from "./components/Footer/Footer"

const App = () => {
  	return (
		<div className={Styles.app}>
			<Navbar />
			<Title />
			<About />
			<Services />
			<Whyus />
			<Footer />
		</div>
  	);
}

export default App