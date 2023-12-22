import React from 'react';
import { Link } from "react-router-native";
import {Text, View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    image_container: {
      marginTop: 70,
      marginBottom: 50,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image_logo: {
        width: 240,
        height: 90,
        resizeMode: 'stretch',
    },
    header_container: {
        backgroundColor: '#FAFAFA',
    },
    menu_container: {
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        gap: 30,
        paddingTop: 5,
        paddingBottom: 12,
    },
    header_text: {
        fontFamily: 'AvenirNext-Medium',
        color: '#6091FF',
        fontSize: 15,
    }

  });

const Header = () => {

    return (
      <View style={styles.header_container}>
          <Link underlayColor="transparent" style={{ textDecoration: "none" }} to="/">
            <View style={styles.image_container}>
              <Image 
              style={styles.image_logo}
              source={require('../../assets/images/logo/image2vector.png')}
              />
            </View>
          </Link>
            <View style={styles.menu_container}>
                <Link underlayColor="transparent" style={{ textDecoration: "none" }} to="/">
                    <Text style={styles.header_text}>Home</Text>
                </Link>
                <Link underlayColor="transparent" style={{ textDecoration: "none" }} to="/about">
                    <Text style={styles.header_text}>About</Text>
                </Link>
                <Link underlayColor="transparent" style={{ textDecoration: "none" }} to="/contact">
                    <Text style={styles.header_text}>Contact</Text>
                </Link>
            </View>
      </View>
    );

  };
  
  export default Header;