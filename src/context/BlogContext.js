import React,{useReducer} from 'react';


const funReducer=(state,action)=>{
    
    switch(action.type){
        case "add_BlogPost":
            return [...state,{id:Math.floor(Math.random()*99999) ,title:action.payload.newBlogTitle,content:action.payload.newBlogContent}];


        case "delete_blogpost": 
               return state.filter((data)=>action.idOfPostToDelete!==data.id);
            
        case 'edit_blog':
             return state.map((data)=>{
                    if(data.id===action.payload.id){
                        return action.payload;    
                        //return[...state,{id:action.payload.id,title:action.payload.title,content:action.payload.content}]
                    }
                    else{
                        return state;
                    }});
        default:
                return state; 
    
}}


const BlogContext=React.createContext();

export const BlogProvider=({children})=>{
    
    const[state,dispatch]=useReducer(funReducer,[])

    const addBlogPost=(title,content)=>{
        dispatch({type:"add_BlogPost",payload:{newBlogTitle:title,newBlogContent:content}});
    }
    const deleteBlogPost=(id)=>{ //id will recieve from HomeScreen.js touchable opeacity
        dispatch({type:"delete_blogpost",idOfPostToDelete:id})
    }
    const editBlogPost=(newTitle,newContent,id)=>{
          dispatch({type:"edit_blog",payload:{title:newTitle,content:newContent,id:id}})
                
    }
    return(
         <BlogContext.Provider value={{data:state,addBlogPost,deleteBlogPost,editBlogPost}}>
             {children}
         </BlogContext.Provider>
    );        
};

export default BlogContext;