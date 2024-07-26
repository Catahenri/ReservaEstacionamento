import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const DadosCartao = () => {
  const [lista, setLista] = useState([]);
  const [id, setId] = useState(null);
  const [numCartao, setNumeroCartao] = useState('');
  const [nomeTitular, setNomeTitular] = useState('');
  const [codigo, setCodio] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 4 }}>
        <TextInput
          style={estilos.input}
          placeholder="Número do Cartão"
          value={numCartao}
          onChangeText={setNumeroCartao}
        />
        <TextInput
          style={estilos.input}
          placeholder="Nome do Titular"
          value={nomeTitular}
          onChangeText={setNomeTitular}
        />
        <TextInput
          style={estilos.input}
          placeholder="Código de Segurança"
          value={codigo}
          onChangeText={setCodio}
        />
        <Button
          title={nomeBotao}
          onPress={() => {
           
          }}
        />
      </View>
    </View>
  );
};

export default DadosCartao;