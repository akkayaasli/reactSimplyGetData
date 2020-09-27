import React from 'react';
import Header from './src/components/Header';

import Liste from './src/components/Liste';
import { View } from 'react-native';

import Detay from './src/components/Detay';

import ButtonDesign from './src/components/ButtonDesign';



const App = () =>{
  return(

    //burası ana view, diğer tüm componentleri kapsaması için bir flex değeri atamamız gerekti.
    <View style={{flex: 1,}}>

    <Header headerText={'BALIKESİR ÜNİVERSİTESİ CENG'}/>
    <Liste/>

    </View>
  );
}

export default App;








/*import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const App = () => {

  const press = (deneme) => {
    console.log('ikinci kez tıklandı');
    console.log(deneme);
  }

  let deneme = 'aslı';

  return(
    <View>
      <TouchableOpacity onPress={() => {console.log('tıklandı'); press(deneme); }}>
        <Text>deneme</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;*/

//BURADA DİLEKLE YAPTIĞIMIZ ÖRNEK KOD VAR.