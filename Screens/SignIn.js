import React, {useEffect, useState} from "react";
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  Button,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native";
import {auth } from './firebase';


const SignIn = () => {

  // function navigate() {
  //   navigation.navigate("MainScreen");
  // }

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user){
        navigation.navigate("MainScreen")
      }
    })
  
    return unsubscribe
  }, [])
  
 
  
  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with Email",user.email);
        
      })
      .catch((error) => alert(error.message));
  };

  


  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}>
        <Image
          style={styles.ImageStyle}
          source={require("../assets/logo.png")}
        />
      </View>

      <View style={styles.BottomView}>
        <Text style={styles.Heading}>
          Welcome{"\n"}
          Back
        </Text>

        <View style={styles.FormView}>
          <TextInput
            
            
            placeholder={"Email Address"}
            placeholderTextColor={"#fff"}
            style={styles.TextInput}
          />
          
          <TextInput
            
            
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"#fff"}
            style={styles.TextInput}
          />


          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText} onPress = {handleSignIn} >
              Sign In
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              color: "#ffff",
              fontSize: "15px",
              paddingLeft: "70%",
              paddingTop: "10px",
            }}
          >
            Forget Password
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: 40,
    flexDirection: "column",
    backgroundColor: "#ffff ",
    alignItems: "center",
    justifyContent: "center",
  },

  TopView: {
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:'#000'
  },

  BottomView: {
    width: "100%",
    height: "70%",
    backgroundColor: "#000",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  ImageStyle: {
    flex: 1,
    width: "40%",
    resizeMode: "contain",
  },

  Heading: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 60,
  },

  FormView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
  },
  TextInput: {
    width: "90%",
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    paddingLeft: 10,
    marginTop: 20,
    color: "#fff",
  },

  Button: {
    width: "90%",
    color: "#000",
    height: 52,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SignIn;
