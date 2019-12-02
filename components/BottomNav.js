import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const BottomNav = () => {
    return (
        <View style={styles.bottomNav}>
            <Image style={styles.icon} source={require('../assets/img/ico_home.png')} />
            <Image style={styles.icon} source={require('../assets/img/ico_search.png')} />
            <Image style={styles.icon} source={require('../assets/img/ico_post.png')} />
            <Image style={styles.icon} source={require('../assets/img/ico_heart.png')} />
            <Image style={styles.icon} source={require('../assets/img/ico_avatar.jpg')} />
        </View>
    );
};

const styles = StyleSheet.create({
    bottomNav: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        padding:15,
        elevation:2,
        backgroundColor:'#FAFAFA',
        borderTopWidth:0.2,
    },  
    icon: {
        width:28,
        height:28,
        aspectRatio:1,
    }
});

export default BottomNav;