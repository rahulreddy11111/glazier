import React from 'react';
import { View , Text} from 'react-native';
import LottieView from 'lottie-react-native';

const MyLottieAnimation = () => {
  console.log('Rendering MyLottieAnimation');
  return (
    <View style={{ height: '100%', width: '100%',backgroundColor : 'grey' }}>
      <LottieView
        source={require('../../assets/lottie_files/lottie_2.json')}
        autoPlay
        loop
        onAnimationStart={() => console.log('Lottie animation started')}
        onAnimationFinish={() => console.log('Lottie animation finished')}
        onAnimationCancel={() => console.log('Lottie animation cancelled')}
      />
    </View>
    
  );
};

export default MyLottieAnimation;
