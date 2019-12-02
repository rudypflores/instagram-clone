import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Navbar = () => {
  return (
    <>
        {/* Navbar */}
        <View style={styles.navbar}>
            <View style={styles.navLeft}>
                <TouchableOpacity>
                  <Image style={styles.icons} source={require('../assets/img/ico_camera.png')} />
                </TouchableOpacity>
                <Image style={styles.title} source={require('../assets/img/ico_instagram.png')} />
            </View>
            <View style={styles.navRight}>
                <TouchableOpacity>
                  <Image style={styles.icons} source={require('../assets/img/ico_tv.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.icons} source={require('../assets/img/ico_dms.png')} />
                </TouchableOpacity>
            </View>
        </View>
    </>
  );
};

//Style properties for app
const styles = StyleSheet.create({
  navbar: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    elevation:2,
    paddingVertical:10,
    paddingHorizontal:10,
    borderBottomWidth:0.1,
  },
  navLeft: {
    flexDirection:'row',
    alignItems:'center',
  },
  navRight: {
    flexDirection:'row',
    alignItems:'center',
  },
  icons: {
    height:32,
    width:32,
    margin:3,
  },
  title: {
    height:40,
    width:128,
  }
});

export default Navbar;