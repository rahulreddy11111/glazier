import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  searchButton: {
    backgroundColor: '#ebf2ed',
    width: Dimensions.get('screen').width - 20,
    borderRadius: 20,
    marginHorizontal: 10,
    height : 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    //top: 50,
    //zIndex: 1000,
    marginVertical : '6%',
    borderWidth : 1
    

  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color : '#606962'
  },

  image2: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title2: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button2: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  searchButton2: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 20,
    borderRadius: 10,
    marginHorizontal: 10,
    height : 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    //top: 50,
    zIndex: 100,
    marginVertical : '5%'
    

  },
  searchButtonText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color : '#606962'
  },
  productPlaceholder2: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 1,
    borderRadius: 1,
   //height : '10%',
    borderBottomWidth : 0.2,
    
    justifyContent : 'center',
  },
  productTitle2: {
    height:30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer2 : {
    height : '40%',
    justifyContent : 'center',
    marginHorizontal : '5%',
    width : '100%'
    
  },
  searchInput2 : {
    fontSize : 18,

    
  },
  flatListContent2: {
    height : '100%',
    backgroundColor : '#fff'
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  
});

export default styles;