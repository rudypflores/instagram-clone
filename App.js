import React from 'react';
import { StyleSheet } from 'react-native';
import Navbar from './components/Navbar';
import Card from './components/Card';


const App = () => {
  return (
    <>
        {/* Navbar */}
        <Navbar />
        {/* Cards */}
        <Card />
    </>
  );
};

//Style properties for app
const styles = StyleSheet.create({});

export default App;