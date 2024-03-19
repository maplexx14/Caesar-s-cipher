import { StyleSheet } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SelectList } from 'react-native-dropdown-select-list'
import { FontAwesome } from '@expo/vector-icons';
const data = [
  {key:'1',value:'1'},
  {key:'2',value:'2'},
  {key:'3',value:'3'},
  {key:'4',value:'4'},
  {key:'5',value:'5'},
  {key:'6',value:'6'},
  {key:'7',value:'7'},
  {key:'8',value:'8'},
  {key:'9',value:'9'},
  {key:'10',value:'10'},
  {key:'11',value:'11'},
  {key:'12',value:'12'},
  {key:'13',value:'13'},
  {key:'14',value:'14'},
  {key:'15',value:'15'},
];
const lang = [
  {key:'1', value:'Русский'},
  {key:'2', value:'English'},
];
function writeSettingsNum(selectedNum){
  const fs = require('fs');

  // данные, которые нужно сохранить в файл
  const sdvig = selectedNum;
 
  // имя файла, в который нужно сохранить данные
  const fileName = 'settings.txt';

  // вызываем метод writeFile для записи данных в файл
  fs.writeFile(fileName, sdvig, (err) => {
    // если произошла ошибка, выбрасываем исключение
    if (err) throw err;
    // выводим сообщение об успешной записи
    console.log('Данные сохранены в файл');
  });
}
function writeSettingsLang(selectedLang){
  const fs = require('fs');

  // данные, которые нужно сохранить в файл
  const setedlang = selectedLang;
  // имя файла, в который нужно сохранить данные
  const fileName = 'settings.txt';

  // вызываем метод writeFile для записи данных в файл
  fs.writeFile(fileName,setedlang, (err) => {
    // если произошла ошибка, выбрасываем исключение
    if (err) throw err;
    // выводим сообщение об успешной записи
    console.log('Данные сохранены в файл');
  });
}
export default function Settings() {

  const [selectedNum, setSelected] = useState("");
  const [selectedLang, setLang] = useState("");

  return(
    <View style={styles.container}>
    
      <Text style={{fontSize:24, padding:20}}>Выберите сдвиг</Text>
      <SelectList 
      setSelected={setSelected} 
      onSelect={() => {return writeSettingsNum(selectedNum)}}
      data={data}  
      arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />} 
      searchicon={<FontAwesome name="search" size={12} color={'black'} />} 
      search={false} 
      boxStyles={{borderRadius:10 ,width:200}} //override default styles
      defaultOption={{ key:'1', value:'13' }}   //default selected option
    />
      <Text style={{fontSize:24, padding:20}}>Выберите язык</Text>
      <SelectList 
      setSelected={setLang} 
      onSelect={() => {return writeSettingsLang(selectedLang)}}
      data={lang}  
      arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />} 
      searchicon={<FontAwesome name="search" size={12} color={'black'} />} 
      search={false} 
      boxStyles={{borderRadius:10, width:200}} //override default styles
      defaultOption={{ key:'1', value:'English' }}   //default selected option
    />
    
    </View>
    

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
