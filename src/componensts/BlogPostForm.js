import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const[title, setTitle] = useState(initialValues.title);
    const[content, setContent] = useState(initialValues.content);

    return(
        <View style={styles.viewStyle}>
        
            <Text>Title</Text>
            <TextInput 
            style ={styles.inputBorder} 
            placeholder = "TITLE" 
            value= {title}
            onChangeText={(text)=>setTitle(text)}
            />
        
            
            <Text>Enter Content</Text>
            <TextInput 
            style ={styles.inputBorder2} 
            placeholder = "Content" 
            value= {content}
            onChangeText={(text)=>setContent(text)}
            />

            <Button 
            
                title="save"
                onPress={()=>onSubmit(title, content)}
                
            
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues:{
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    inputBorder: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginBottom: 50,
        fontSize: 20
    },
    inputBorder2:{
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        height: 150,
        fontSize: 20,
        marginBottom: 10
    },
    viewStyle:{
        padding: 20,
        justifyContent: 'space-between'
    }
});

export default BlogPostForm;