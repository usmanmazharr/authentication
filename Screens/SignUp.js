import React from 'react';
import { Image, StyleSheet,Button, ScrollView, Text, View , TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';

const SignUp = ({navigation}) => {

    function navigate(){
        navigation.navigate('SignIn')
    }

    return (
      
        <View style={styles.mainView}>
            <View style = {styles.TopView}>
            <Image style={styles.ImageStyle} source={require('../assets/logo.png')}
            />
            </View>
            

            <ScrollView style = {styles.BottomView}>
                <Text style={styles.Heading}>
                    Hey Welcome
                </Text>
                <View style={styles.FormView}>
                <TextInput placeholder={"First Name"} placeholderTextColor = {"#fff"}  style = {styles.TextInput}></TextInput>
                <TextInput placeholder={"Last Name"} placeholderTextColor = {"#fff"}  style = {styles.TextInput}></TextInput>
                <TextInput placeholder={"Email Address"} placeholderTextColor = {"#fff"}  style = {styles.TextInput}></TextInput>
                <TextInput placeholder={"Password"} secureTextEntry = {true} placeholderTextColor = {"#fff"}  style = {styles.TextInput}></TextInput>
                <TextInput placeholder={"Confirm Password"} secureTextEntry = {true} placeholderTextColor = {"#fff"}  style = {styles.TextInput}></TextInput>                
                <TouchableOpacity style = {styles.Button}>
                    <Text style = {styles.ButtonText} >Sign Up</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      marginTop:40,
      flexDirection: 'column',
      backgroundColor: '#ffff ',
      alignItems: 'center',
      justifyContent: 'center',
    },

    TopView : { 
        width: '100%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'#000'
    },

    BottomView : {
        width: '100%',
        height: '75%',
        backgroundColor:'#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    ImageStyle:{
        alignItems: 'center',
        flex:1,
        width: '40%',
        resizeMode: 'contain',
    },

    Heading : {
        color: '#fff',
        fontSize: 40,
        fontWeight:'bold',
        marginLeft: 30,
        marginTop:60,
        
     },

     FormView:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:40,
     },
     TextInput:{
        width: '90%',
        height: 52,
        borderRadius:10,
        borderWidth:1,
        borderColor: '#fff',
        paddingLeft:10,
        marginTop:20,
        color: '#fff',

     },

     Button:{
        width:'90%',
        color: '#000',
        height:52,
        backgroundColor: '#fff',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     },
     ButtonText:{
        fontSize:20,
        fontWeight: 'bold',
     }
    
  });
  
  export default SignUp;