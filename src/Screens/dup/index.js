import {React} from 'reat';
import {View , Text, ImageBackground , Image} from 'react-native';

const Dup_screen = (props) => {
  

  const imagePaths = {
    1: '/Users/rahul/Glaizer/assets/glaizer_images/faces/sad_face.jpeg',
    2: '/Users/rahul/Glaizer/assets/glaizer_images/faces/happy_face.jpeg',
  };

  const defaultImagePath = '/Users/rahul/Glaizer/assets/glaizer_images/faces/satisfied_face.jpeg';
  
  const imagePath = imagePaths[3] || defaultImagePath;

return(
<View style = {{width : '100%' , height : '100%', borderWidth : 3 , borderColor : '#fff'  }}>
    <ImageBackground style = {{backgroundColor : '#c9f0f2' , width : '98%' 
    , height : '100%' , margin : '1%' ,borderRadius : 20 }}>
        <ImageBackground source={ require('../../../assets/glaizer_images/istockphoto-1255979864-170667a.jpg')}
        style = {{width : '99%' , height : '60%' , borderRadius : 20 , overflow : 'hidden'  }}>

           <View
    style={{width : '99%' , height : '60%' ,
      
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust the opacity (0.5 in this case)
    }}
  >
  </View>
  
  <View style = {{height : '21%' , width : '55%' ,bottom : '50%' ,backgroundColor : '#fff'
  , borderRadius : 20 , flexDirection  : 'row' , borderWidth : 1 , borderColor : '#686b69'}}>
     
     <View style = {{height : '100%' , width : '100%' , flexDirection : 'row'}}>
     <Image 

     source = {require('../../../assets/glaizer_images/indications/images-2.png')} 
     style = {{height : '100%' ,width : '50%' , resizeMode : 'cover'  , overflow : 'hidden' , borderRadius : 20}}
     >
    
     </Image>
     <View style  = {{alignItems : 'center' , justifyContent : 'center' , width : '40%' }}>
     <Text style = {{fontWeight : '600' }}>
        Average water consumed
      </Text>
      </View>
  </View>

  <View style = {{height : '100%' , width : '60%' , backgroundColor : '#fff' , left : '30%', 
  borderWidth : 1 , borderRadius : 20 , alignItems : 'center' , borderColor : '#686b69'}}>
  <Image source={{ uri: imagePath }} 
   style = {{resizeMode : 'contain' , height : '80%' , width : '100%'}}
   ></Image>
   <Text  style = {{fontWeight : '500'}}>
    12L/day
   </Text>
  </View>
  </View>


  <View style = {{flexDirection : 'row' , height : '100%' , width: '100%' , justifyContent : 'space-around' }}>

  

  <View style = {{height : '20%' ,width : '25%' ,borderWidth : 2 
  , borderColor : '#686b69' ,bottom : '35%' , borderRadius : 10 , backgroundColor : '#7eede0'}}>
    
    <Image source = {require('../../../assets/glaizer_images/indications/images-3.jpeg')}
    style = {{height : '80%' , width : '80%' , margin : '10%' , borderRadius : 30}} >
    </Image>

</View>

<View style = {{height : '20%' ,width : '25%' ,borderWidth : 2 
  , borderColor : '#686b69' ,bottom : '35%' , borderRadius : 10 ,backgroundColor : '#e8a88b'}}>

<Image source = {require('../../../assets/glaizer_images/indications/images-2.jpeg')}
    style = {{height : '80%' , width : '80%' , margin : '10%' ,  borderRadius : 30}} >
    </Image>

</View>

<View style = {{height : '20%' ,width : '25%' ,borderWidth : 2 
  , borderColor : '#686b69' ,bottom : '35%' , borderRadius : 10 , backgroundColor : '#f24438'}}>

<Image source = {require('../../../assets/glaizer_images/indications/images.jpeg')}
    style = {{height : '80%' , width : '80%' , margin : '10%' , borderRadius : 30}} >
    </Image>

</View>

</View>

        </ImageBackground>

    </ImageBackground>
</View>
)
}
export default Dup_screen;