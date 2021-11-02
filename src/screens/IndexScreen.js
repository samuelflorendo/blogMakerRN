import React, { useContext,useEffect, useState } from 'react';
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import { RadioButton, Checkbox} from 'react-native-paper';
  
const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost,getBlogPosts} = useContext(Context);
    const [value, setValue] = useState('true');
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [score, setScore] = useState(0);
    console.log(score);
    
    useEffect(()=>{
        getBlogPosts();
        const listener = navigation.addListener('didFocus',()=>{
            getBlogPosts();
        });
        return () =>{
            listener.remove();
        };
    },[])
    const set = (checked, setChecked) => {
        if(!checked){
            setChecked(!checked);
            setScore(score+1);
            console.log(checked);
        }else{
            setChecked(!checked);
            setScore(score-1);
            console.log(checked);
            
        }
    }
    return(
        <View>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                   set(checked, setChecked);
                    
                    
                }}
            />
            <Checkbox
                status={checked1 ? 'checked' : 'unchecked'}
                onPress={() => {
                   set(checked1, setChecked1);
                    
                    
                }}
            />
            <Text>{score}</Text>
            <FlatList 
                keyExtractor= {(blogPost) => blogPost.title}
                data= {state}
                renderItem = {({item})=> {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.row}> 
                                <Text style={styles.title}>{item.title}{item.id}</Text>
                                <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
                                    <Feather name = "trash" style={styles.icon}></Feather>
                                </TouchableOpacity>
                            </View> 
                        </TouchableOpacity>    
                    );
                }}
            />
            
        </View>
    );
};


IndexScreen.navigationOptions = ({navigation}) =>{
    return{
        
        headerRight: () => (
           
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={24} color="black" />
                </TouchableOpacity>
            
          ),
       
       

    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderTopWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 10
    },
    title:{
        fontSize: 18
    },
    icon:{
        fontSize:24
    },
    plusIcon:{
        marginRight: 20
    }
});

export default IndexScreen;