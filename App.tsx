/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NativeRouter, Routes, Route } from "react-router-native";
import Header from './components/Header/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import MainPage from './pages/MainPage';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


function App(): JSX.Element {


  return (
    <>
    <NativeRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </NativeRouter>
  </>
  );
}


export default App;
