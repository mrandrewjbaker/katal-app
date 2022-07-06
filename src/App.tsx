import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { RouterContainer } from './components/RouterContainer/RouterContainer';
import { SideMenu } from './components/SideMenu/SideMenu';
import { SetupWalkthrough } from './views/setupWalkthrough/SetupWalkthrough';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <SideMenu />
          <RouterContainer>
              <Routes>
                <Route path="/" element={<SetupWalkthrough />} />
              </Routes>
          </RouterContainer>

        </BrowserRouter>
    </div>
  );
}

export default App;
