import  React,{Component} from 'react';
import { View, StyleSheet, Dimensions,Text,FlatList,Image,TextInput ,TouchableOpacity} from 'react-native';

import jsondata from './src/Data/jsondata'


export default class tabview extends Component {

  constructor(props) {
    super(props);

    
    
  }
  render() {
    return(
  
   
    <View style={styles.container} >
          
      <View>
        <Text style={styles.searchtext}>Search</Text>
      </View>
      <View style={styles.borderline}></View>
      <View style={styles.searchview}>
        
      <View style={styles.searchicon}>
              <TouchableOpacity >
                  <Image source={require("./src/Assets/Images/serach.png")} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
              </View>
      <TextInput style={styles.textinputstyle}
            
                placeholder="Food name"

                placeholderTextColor="#30384d"
                clearButtonMode='always'>
              </TextInput>
              
      </View>
      <View style={{marginLeft:10,marginRight:10,marginBottom:5}}><Text style={styles.subtittle}>Foods
        </Text></View>
          <FlatList
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              listKey={(item, index) => index.toString()}
              data={jsondata}
              renderItem={this.renderorderitemlist.bind(this)}
              />
        </View>
    )

    //);
  }
  renderorderitemlist(data) {
    let { item, index } = data;


    return (
<View style={{marginLeft:10}}>
  
      <View style={[styles.itemlistview]}>
      
        <View style={styles.Imagedescription}>
        
          <View >
        
          
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
          
            
              <View style={{ width: '100%', }}>
    <Text style={styles.tittle} >{item.Ingredient}</Text>
              </View>
              <View style={{ width: '80%', }}>
              <Text style={styles.shorttext}  >{item.Shorttext}</Text>
              </View>
    
             
          </View>
        </View>
      </View>

</View>
    );
  }
      
      }
      
      const styles = StyleSheet.create({

        container: {
          flex: 1,
          backgroundColor: 'white',
          marginLeft:10,
          marginRight:10
      
      
        },
      
          searchtext:
            {marginLeft:10,
              color : '#30384d',
              fontWeight:'bold',
              fontSize:18,
              marginTop:10
            },
          
       borderline:
        {borderBottomColor:'black',
        borderBottomWidth:2,
        margin:10
      },
       
        searchview:{
          backgroundColor:'#f7f7f7',
          marginLeft:10,
          marginRight:10,
          borderRadius:5
        },
        searchicon:{ 
          position: 'absolute',
           marginTop:18,
           marginLeft:15
          },
      image:{
            height:130,
            width:150,
            resizeMode:'contain'
        },
       
        shorttext:
        {
          color: '#7e8a9a',
          fontWeight:'500',
          fontSize:11.2,
          fontFamily:'Montserrat'
          
        },
      
        
        
        itemlistview: {
          
          backgroundColor: 'white',
         
      
        },
        
        
       
        tittle: {
           
          fontSize: 16,
           color: '#30384d',
           fontFamily:'Montserrat'
         
          
        },
        subtittle: {
           
          fontSize: 18,
           color: '#30384d',
           fontFamily:'Montserrat',
           fontWeight:'bold',
           
          
        },
        textinputstyle: {
        
          paddingLeft: 40,
          
         // backgroundColor:'#f7f7f7',
          
          fontSize: 16,
         
          
          
        },
        headerplaceholder: {
          paddingLeft: 10,
          fontSize: 13,
          
        },
        
      
      });