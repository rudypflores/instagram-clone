import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Navbar from './components/Navbar';
import Card from './components/Card';
import BottomNav from './components/BottomNav';


const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <ScrollView style={{ flex:1 }}>
          {/* Cards */}
          <Card />
          <Card />
          <Card />
      </ScrollView>
      <BottomNav />
    </>
  );
};

//Style properties for app
const styles = StyleSheet.create({});

export default App;