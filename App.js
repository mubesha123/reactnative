import  React,{Component} from 'react';
import { View, StyleSheet, Dimensions,Text,ScrollView,FlatList,Image } from 'react-native';




export default class APP extends Component {

  constructor(props) {
    super(props);

    this.state = {

    
       loading:true,
       //orderItem:this.props.route.params('orderItem'),
    };
    
  }

  componentDidMount(){
 
  }


 render(){
  return (
    
      <View style={{margin:10}}>
            <View style={[styles.itemlistview]}>
            
              <View style={styles.Imagedescription}>
              
                <View style={{ flexDirection: 'row',marginTop:10 }}>
                <Image source={require('../riafy/src/Assets/Images/user.png')} style={styles.image} />
                {/* {(item.itemImage == null || item.itemImage == "") ?
                    <Image source={require('../Assets/Images/user.png')} style={styles.image} />
                    :
                    <Image source={{ uri: item.itemImage }} style={styles.image} />
                  } */}
                  <View style={{ marginLeft: 40,marginTop:17 }}>
                    <View style={{ width: '80%', }}>
          <Text style={styles.brandtittle} >itemname</Text>
                    </View>
                    
          <Text style={styles.imagepack}>packSize</Text>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: '60%', flexDirection: 'row' }}>
                        <Text style={styles.actualprice}>Itemprice:</Text>
                        
                      </View>
                    </View>
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
          backgroundColor: '#f5f5f5',
      
      
        },
      
        
      
       
        
      image:{
            height:100,
            width:100
        },
        label: {
          fontSize: 14,
          marginLeft: 15,
          color: '#5b5b5b',
          marginTop: 7,
        },
        
      
        
        itemdetailstext:
        {
          marginTop: 5,
          marginLeft: 13,
          fontSize: 15,
          color: '#5b5b5b',
          marginBottom: 15
      
        },
        itemlistview: {
          //height: 115,
          backgroundColor: 'white',
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
          borderRadius: 10
      
        },
        
        
        imagetitle: {
          marginTop: 5,
          fontSize: 14,
          color: '#555555',
        },
        brandtittle: {
          marginTop: 3,
          fontSize: 14,
          fontWeight: 'bold',
          color: 'darkgrey',
        },
        imagepack: {
          fontSize: 14,
          marginTop: 3,
          color: '#a8a8a8'
        },
        actualprice: {
          fontSize: 14,
          marginLeft: 3,
          marginTop: 3,
          color: '#505050'
        },
        imageprice: {
          fontSize: 12,
          marginLeft: 5,
          marginTop: 5,
          textDecorationLine: 'line-through',
          marginTop: 13,
          color: '#a8a8a8'
        },
        
        
      
      });