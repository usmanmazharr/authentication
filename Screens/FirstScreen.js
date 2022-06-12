import React from 'react';
import { Image, StyleSheet,Button, ScrollView, Text, View , TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';

const FirstScreen =({navigation}) => {
    function navigate(){
        navigation.navigate('SignUp');
    }
    function navigate1(){
        navigation.navigate('SignIn');
    }
    return (
      
        <View style={styles.mainView}>
            <View style = {styles.TopView}>
            <Image style={styles.ImageStyle} source={require('../assets/logo.png')}
            />
            </View>
            

            <View style = {styles.BottomView}>
                <View style = {styles.bottom1}>
                <Text style={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged
                </Text>
                </View>

                <View style={styles.FormView}>
               
                <TouchableOpacity style = {styles.Button}>
                    <Text style = {styles.ButtonText} onPress={navigate}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.Button1} >
                    <Text style = {styles.ButtonText1} onPress={navigate1}>Sign In</Text>
                </TouchableOpacity>
                </View>
            </View>
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
        height: '45%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'#000'
    },

    BottomView : {
        width: '100%',
        height: '55%',
        backgroundColor:'#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        
    },

    
    FormView:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:40,
    },
    ImageStyle:{
        alignItems: 'center',
        flex:1,
        width: '40%',
        resizeMode: 'contain',
    },

    bottom1:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: 'white',
        width:'50%',
        fontSize: '20px',
    },

     Button:{
        width:'90%',
        color: '#000',
        height:52,
        paddingLeft:10,
        backgroundColor: '#fff',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     },
     Button1:{
        width:'90%',
        color: '#000',
        height:52,
        paddingLeft:10,
        borderRadius:10,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth:1,
        marginTop:20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     },
     ButtonText:{
      
        fontSize:20,
        fontWeight: 'bold',
     },

     ButtonText1:{
        color: '#fff',
        fontSize:20,
        fontWeight: 'bold',
     }
    
  });
  
  export default FirstScreen;