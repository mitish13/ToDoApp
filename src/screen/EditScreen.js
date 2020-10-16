import React,{useContext,useState} from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';

const EditScreen=(props)=>{
    const id=props.navigation.getParam('id');
    const {data,editBlogPost}=useContext(BlogContext);
    const Blog=data.find((data)=>id===data.id);
   
    const[newTitle,setNewTitle]=useState(Blog.title);
    const[newContent,setNewContent]=useState(Blog.content);

    return(
        <View>
            <Text style={styles.titleStyle}>Enter Updated To Do:</Text>
            <TextInput
                value={newTitle}
                onChangeText={(text)=>setNewTitle(text)}
            
                style={styles.contentStyle}
            
            ></TextInput>
        <Text style={styles.titleStyle}>Enter New Details:</Text>
            <TextInput
                value={newContent}
                onChangeText={(newCon)=>setNewContent(newCon)}
                style={styles.contentStyle}
            ></TextInput>
        
         <Button
            title="Edit My TO DO"
            onPress={()=>{
                    editBlogPost(newTitle,newContent,props.navigation.getParam('id'))  
                    props.navigation.navigate("Show")
                       }}      
                 
        />
        </View>

    )
};
const styles=StyleSheet.create({
    titleStyle:{
        fontSize:20,
        marginBottom:10,
        margin:5
    },
    contentStyle:{
        borderWidth:1,
        borderColor:"gray",
        fontSize:18,
        padding:5,
        marginBottom:10,
        marginHorizontal:5
    }

})

 
export default EditScreen;