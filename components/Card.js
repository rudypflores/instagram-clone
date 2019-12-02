import React, { useState } from 'react';
import { Text, ScrollView, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Card = () => {

    const [liked, setLiked] = useState(false);

    return (
        <ScrollView style={styles.card}>
            {/* Top of Card */}
            <View style={styles.cardTop}>
                <View style={styles.cardTopLeft}>
                    <Image style={styles.iconUser} source={require('../assets/img/ico_pinterestLogo.jpg')} />
                    <Text style={styles.textUserName}>NotPinterest</Text>
                </View>
                <TouchableOpacity>
                    <Image style={styles.iconMore} source={require('../assets/img/ico_more.png')} />
                </TouchableOpacity>
            </View>
            {/* Post image of the card */}
            <Image style={styles.post} source={require('../assets/img/sample.jpg')} />
            {/* Tools section of card */}
            <View style={styles.cardTools}>
                <View style={styles.cardToolsLeft}>
                    <TouchableOpacity
                        onPress={() => setLiked(!liked)}
                    >
                        {
                            liked ?
                            <Image style={styles.iconGeneral} source={require('../assets/img/ico_heartRed.png')} />
                            :
                            <Image style={styles.iconGeneral} source={require('../assets/img/ico_heart.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconGeneral} source={require('../assets/img/ico_comment.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconGeneral} source={require('../assets/img/ico_dms.png')} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Image style={styles.iconGeneral} source={require('../assets/img/ico_tag.png')} />
                </TouchableOpacity>
            </View>
            {/* Bottom of card */}
            <View style={styles.cardBottom}>
                <Text>
                    Liked by <Text style={styles.textBold}>TreelonMusk</Text> and 
                    <Text style={styles.textBold}> millions of others</Text>
                </Text>
                <Text style={styles.description}>
                    Another day taking random pictures that somehow get so many
                    likes for no reason at all.
                </Text>
                <Text style={styles.hash}>#NotPinterest #PleaseDontSueUs #JKYallCant</Text>
                <TouchableOpacity>
                    <Text style={styles.moreComments}>
                        View all {Math.floor(Math.random()*23+1)} comments
                    </Text>
                </TouchableOpacity>
                <View style={styles.cardBottomLeft}>
                    <Image style={styles.iconGeneral} source={require('../assets/img/ico_avatar.jpg')} />
                    <TouchableOpacity>
                        <Text style={{ color:'gray' }}>Add a comment...</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color:'gray', fontSize:10, paddingVertical:10 }}>
                    {Math.floor(Math.random()*23+2)} hours ago
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        flex:1,
        elevation:1,
        marginVertical:10,
    },
    cardTop: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    cardTopLeft: {
        flexDirection:'row',
        alignItems:'center'
    },
    cardTools: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },  
    cardToolsLeft: {
        flexDirection:'row',
        alignItems:'center',
        marginLeft:15,
    },
    cardBottom: {
        flexDirection:'column',
        marginLeft:15,
        marginTop:10,
    },
    cardBottomLeft: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:5,
    },  
    iconUser: {
        width: 32,
        height: 32,
        marginHorizontal:15,
    },
    iconMore: {
        width: 18,
        height:18,
        marginRight:15,
    },
    iconGeneral: {
        width: 32,
        height: 32,
        marginRight:15,
    },
    textUserName: {
        fontFamily:'lato_regular',
    },
    post: {
        marginVertical:10,
        height:undefined,
        width:'100%',
        aspectRatio:1,
    },
    description: {
        marginRight:15,
        marginTop:5,
    },  
    hash: {
        color:'#3f729b'
    },
    moreComments: {
        marginVertical:5,
        color:'gray',
    },
    textBold: {
        fontWeight:'bold',
    }
});

export default Card;