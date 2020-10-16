import React,{useContext} from 'react';
import {View,FlatList,Text,TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext';
import {Feather} from "@expo/vector-icons";


const HomeScreen=(props)=>{
  const value=useContext(BlogContext);
  //console.log(value.data) // print array of BlogPost object //value.data is same as state
  return (
  <View>
        
      <FlatList 
            data={value.data}
            keyExtractor={(data)=>data.id.toString()}  //item===individual object of value.data(Array of obj)
            renderItem={({item})=>{
            return (
                <TouchableOpacity   
                    onPress={()=>props.navigation.navigate("Show",{id:item.id})}>

                <View style={{flexDirection:"row",justifyContent:"space-between"
                ,paddingVertical:15,paddingHorizontal:12
                ,borderColor:"gray",borderTopWidth:2}}>

                <Text style={{fontSize:18}}>{item.title}</Text>

                <TouchableOpacity onPress={()=>value.deleteBlogPost(item.id)}>

                <Feather name="trash" style={{fontSize:28,marginRight:2}}></Feather></TouchableOpacity>

                </View>
                 </TouchableOpacity>
            )
          } 

          }   
          />
  </View>
  )};

  HomeScreen.navigationOptions=(props)=>{
    return{
      headerRight:()=><TouchableOpacity onPress={()=>props.navigation.navigate("Create")}>
      <Feather name="plus" size={40} style={{marginRight:5}}></Feather>
      </TouchableOpacity>
  
    };
  };
export default HomeScreen; 