import { ImageComponent, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Clipboard, KeyboardAvoidingView} from "react-native"
import { Feather } from '@expo/vector-icons';

var ru = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']
var eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function shift(text){
  let total = ''
  let lang = 'ENG'
  if (lang == lang) {
    for (let i of text) {
      var place = eng.indexOf(i);
      let new_place = place + 13;
      console.log(new_place);

      if (eng.includes(i)) {
        total += eng[new_place]
      } else {
        total += 1
      }
    }
  }
  return total
}
function copy(text){
  Clipboard.setString(text)
  return text
}
export default function TabOneScreen() {
  const [text, setText] = useState('');
 
 

  return (
  
   
    <View style={styles.container}>
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={{paddingBottom:100}}>
       <Text style={{fontSize:64}}>Шифр </Text>
       <Text style={{fontSize:64, color:'#2f95dc'}}>Цезаря</Text>
      </View>
       <TextInput style={styles.input}
        
        placeholder="Введите текст для шифровки"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        ></TextInput>
     
      <Text style={{padding: 5, fontSize: 42}}>{shift(text)} <Feather onPress={()=>copy(shift(text)) } name="copy" size={32} color="black" /></Text>
     
    
      </KeyboardAvoidingView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    height:20,
   
  },
  input:{
    height:30,
    width:300,
    alignContent: 'center',
    justifyContent:'center',
    borderColor: 'black',
    borderBottomWidth: 1,
    fontSize: 20,
  

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
