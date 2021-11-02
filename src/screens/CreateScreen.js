import React, {useContext,useState} from 'react';
import {Text,TextInput, View, StyleSheet, Button} from 'react-native';
import BlogPostForm from '../componensts/BlogPostForm';
import {Context} from '../context/BlogContext';
import { RadioButton} from 'react-native-paper';

const CreateScreen = ({navigation}) =>{
        
        const{addBlogPost} = useContext(Context);
        
    return<BlogPostForm 
        onSubmit ={(title, content)=> {
            addBlogPost(title, content, ()=>navigation.navigate('Index'))
        }}
    />
}

const styles = StyleSheet.create({
})

export default CreateScreen;