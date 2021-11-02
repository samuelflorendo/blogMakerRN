import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import BlogPostForm from '../componensts/BlogPostForm';
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation}) =>{
   
   const {state, editBlogPost} = useContext(Context);
    const id = navigation.getParam('id');
    const editPost = state.find((editPost) => editPost.id === id);
    
    return <BlogPostForm
        initialValues = {{title: editPost.title, content: editPost.content}}
        onSubmit ={(title, content)=>{
            editBlogPost(id, title, content,()=>navigation.pop())
        }} 
    />
}

const styles = StyleSheet.create({})

export default EditScreen;