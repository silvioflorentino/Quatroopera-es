import React,{useState} from 'react';
import {View,Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';

export default function App(){

const [numero1, setNUMERO1] = useState('');
const [numero2, setNUMERO2] = useState('');

function soma(){
  const resultado = parseFloat(numero1) + parseFloat(numero2);
  alert('A soma dos dois números são ' + resultado);
} 
  return(
<View style={estilo.container}>
<Text style={estilo.titulo}> Somando Valores</Text>

<TextInput style={estilo.input} value={numero1} keyboardType='numeric' onChangeText={(numero1)=> setNUMERO1(numero1)} placeholder="Digite um número"/>
<TextInput style={estilo.input} value={numero2} keyboardType='numeric' onChangeText={(numero2)=> setNUMERO2(numero2)} placeholder="Digite um número"/>

<TouchableOpacity style={estilo.botao} onPress={soma}>
  <Text style={estilo.textobotao}> Calculando </Text>
</TouchableOpacity>

</View>
  );
}

const estilo = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  backgroundColor:'#DCDCDC',
},
input:{
backgroundColor: '#778899',
marginLeft:35,
marginRight:35,
marginBottom:15,
padding:10,
borderRadius: 15,
fontSize:20
},
titulo:{
fontSize: 30,
marginTop: 60,
marginBottom: 30,
color: '#A52A2A',
textAlign:'center'
},
botao:{
justifyContent:'center',
backgroundColor:'#E9967A',
margin:30,
padding: 10,
borderRadius:10
},
textobotao:{
textAlign:'center',
}

});