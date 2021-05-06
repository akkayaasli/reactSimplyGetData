import React, {Component} from 'react'; // {Component} sınıf tabanlı component oluşturuyoruz.
import { ScrollView} from 'react-native';

import axios from 'axios';
import Detay from './Detay';
//2: <View style={{marginTop:5}}> yazma sebebi önceden verdiğimiz shadow yeni eklenen view den dolayı görünmüyordu. 5 cm kaydırdık.

class Liste extends Component{
    state = {data: [] };
    componentDidMount(){//internetten veri alıcaz.
       // console.log('componentDidMount'); çalısıp calısmadıgı terminalden kontrol edildi.

       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
       .then(response=>this.setState({data:response.data}));//çektiğim datayı state içindeki data array ne aktarıyorum.
       //yukarda yazılan adres response deniyor.
       //Biz bu responsa içindeki dataları alıp dizi halinde göstermeye çalışıyoruz.
    }
    renderData(){//bu metot ile belirtile url deki öncelikle title kısımlarını alıcaz.
        return this.state.data.map(responseData=>
            /*<Text>
                {responseData.title}
            </Text>*/

            <Detay data={responseData}/>//ıd adında bir id ataması yapıldı.Burada data değikenine atadığımız bilgiyi Detay.js de yazıcaz.
            );
    }
    render()
    {
        /*console.log('gelen_data'+this.state);*/   //state içi boş geliyormu kontrolü terminalden sağlanıyor.
        //gelen_data[object Object] terminalde böyle geldi.Demek ki içi dolu geliyor.

       // console.log('render');

        return(
            //<Text>Örnek Proje Liste Sayfası</Text> 2 view arasında bu vardı. Şöyle yaptık;

            <ScrollView style={{marginTop:5}}> 

               {this.renderData()}

            </ScrollView>
        );
    };
    
};
/*const Liste = () =>{
    return(
        <View style={{marginTop:5}}>
            <Text>Örnek Proje Liste Sayfası</Text>
        </View>
    );
};*///1:sınıf tabanllı olacağı için burayı daha farklı yazıcaz yukarda.

export default Liste;
