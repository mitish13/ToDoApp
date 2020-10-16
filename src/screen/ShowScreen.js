import React,{useContext} from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';

import {Entypo} from "@expo/vector-icons";


const ShowScreen=({navigation})=>{
    
    const id=navigation.getParam('id');

    const {data}=useContext(BlogContext);
    
    const Blog=data.find((data)=>id===data.id);


    return (
        <View>
            <Text style={styles.title}>Title-{Blog.title}</Text>
             <Text style={styles.content}>Details-{Blog.content}</Text>
        </View>

    )
};

ShowScreen.navigationOptions=(props)=>{
    return{
        headerRight:()=><TouchableOpacity
            onPress={()=>props.navigation.navigate("Edit",{id:props.navigation.getParam('id')})}

        >
        <Entypo name="edit" size={30}/>   
        </TouchableOpacity>
    }

};

const styles=StyleSheet.create({
    title:{
        fontSize:20,
        borderColor:"black",
        borderWidth:1,
        padding:10,
        margin:5
    },
    content:{
        fontSize:18,
        borderColor:'gray',
        borderWidth:1,
        padding:10,
        margin:5    
    }
})


export default ShowScreen;