import React from 'react';
import {Text, View, Image, Linking} from 'react-native';

//linking componenti ile satın al butonuna tıklandığında amazon url ne gönderileceğiz.

import Button from './ButtonDesign';//butonu kendimiz tasarladığımız için import edicez. reactNativeden çağırmıyoruz.


const Detay = ({data}) => {
    //sürekli aynı props ı kullandık çünkü biraz önceki gördüğümüz ekranla aynı ekranı görmek için
    
    const {containerStyle, subContainerStyle,imageStyle,titleStyle}=styles;

    return(
      
    <View style={containerStyle}>


        <View style={subContainerStyle}>
            <Text style={titleStyle}>{data.title}</Text>
        </View>
      

        <View style={subContainerStyle}>
            <Image style={imageStyle} source={{uri:data.image}}/>
        </View>


        <View style={subContainerStyle}>

            <Button onPress={()=>Linking.openURL(data.url)}>SATIN AL!</Button>

        </View>

    </View>

    /*https://rallycoding.herokuapp.com/api/music_albums adresinde ki url özelliği
    olduğu için Linking.openURL(data.url) dedik url değilde adres adında olabilirdi.
     */
    );
};

    const styles = {

        containerStyle:{
            borderWidth:1,
            borderRadius:2,
            borderColor:'#ddd',
            borderBottomWidth:0,
            shadowColor:'#000',
            shadowOffset:{width:0, height:2},
            shadowOpacity:0.1,
            shadowRadius:2,
            elevation:1,
            marginLeft:5,
            marginRight:5,
            marginTop:10,
        },

        subContainerStyle:{
            borderBottomWidth:1,
            padding: 5,
            backgroundColor:'#f3a683',
            justifyContent:'flex-start',
            flexDirection:'row',//row dersek veriler alt alta, column dersem yan yana sıralanır.
            borderColor:'#ddd',
            position:'relative',
        },

        imageStyle:{
            height:300,
            flex: 1,

        },

        titleStyle:{
            fontSize:20,
            backgroundColor:'#f7d794',
            color:'#303952'
            
        }
};

export default Detay;