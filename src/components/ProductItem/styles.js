import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#edede8',
    borderRadius: 10,
    backgroundColor: '#fff',
    width : '100%',
    marginVertical : '1%',
    padding : 10,
    resizeMode : 'cover',
    justifyContent : 'center',
    height : 150
    
  },
  image: {
    flex: 2,
    height: 120,
    resizeMode: 'contain',
    
  },
  rightContainer: {
    padding: 5,
    flex: 2,
    flexDirection : 'column'
    
  },
  title: {
    fontSize: 18,
    fontWeight : '600',
    height : '20%',
    
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    height : '20%'
  },
  oldPrice: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    height : '20%'
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    height : 140
  },
  star: {
    margin: 2,
  },
  heartIcon: {
   resizeMode : 'cover',
   //backgroundColor: 'black',

    
    
  },
  
});

export default styles;