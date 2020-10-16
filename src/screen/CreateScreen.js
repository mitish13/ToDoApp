import React,{useContext,useState} from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';

const CreateScreen=(props)=>{
    const value=useContext(BlogContext);
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    return(
        <View>
        <Text style={styles.titleStyle}>Enter Title of To Do:</Text>
            <TextInput
                value={title}
                onChangeText={(newTitle)=>setTitle(newTitle)}
                style={styles.contentStyle}
            
            ></TextInput>
        <Text style={styles.titleStyle}>Enter Details:</Text>
            <TextInput
                value={content}
                onChangeText={(newContent)=>setContent(newContent)}
                style={styles.contentStyle}
            ></TextInput>
        <Button
                title="Add To Do"
                onPress={
                    ()=>{
                        value.addBlogPost(title,content);
                        props.navigation.navigate("Home")
                        
                    }

                }

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


export default CreateScreen;