import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AIProgess1 from './components/AIPages/AIProgress1';
import AIProgess2 from './components/AIPages/AIProgress2';
import AIProgess3 from './components/AIPages/AIProgress3';
import AIProgess4 from './components/AIPages/AIProgress4';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AI/assistant/1" element={<AIProgess1 />} />
          <Route exact path="/AI/assistant/2/:computer" element={<AIProgess2 />} />
          <Route exact path="/AI/assistant/3/:computer/:purpose" element={<AIProgess3 />} />
          <Route exact path="/AI/assistant/4/:computer/:purpose/:budget" element={<AIProgess4 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
