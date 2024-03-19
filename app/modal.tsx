import { StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Link, Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Pressable } from 'react-native';
import { Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TabOneScreen() {
  const [text, setText] = useState('');
  const colorScheme = useColorScheme();

  return (
    
    <View style={styles.container}>
      
           
      <TextInput style={styles.input}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        ></TextInput>
      <Text style={{padding: 10, fontSize: 42}}>{text}</Text>
    
     
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
   
  },
  input:{
    height:40,
    width:300,
    marginTop: 80,
    borderColor: 'black',
    borderBottomWidth: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});