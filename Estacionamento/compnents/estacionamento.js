import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Modal,
  FlatList,
} from 'react-native';
import ASyncStorage from '@react-native-async-storage/async-storage';
import Badge from '@material-ui/core/Badge';
import { Ionicons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
const img2 = require('./../assets/images/cinemas/vermelhoNovo.png');
const imgCode = require('./../assets/images/cinemas/qrcode.png');
import IonIcon from 'react-native-vector-icons/Ionicons';

const Estacionamento = (props) => {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(null);
  const [placa, setPlaca] = useState('');
  const [hora, setHora] = useState('');
  const [itemCount, setItemCount] = React.useState(0);
  const [lista, setLista] = useState([]);
  const [counter, setCounter] = useState(1);

  let imagens = {
    img1: require('./../assets/images/cinemas/verdeNovo.png'),
    img7: require('./../assets/images/cinemas/vermelhoNovo.png'),
  };

  const [imagem, setImagem] = React.useState('img1');


  function salvar() {
    const obj = { id: counter, placa, hora };
    if (id === null) {
      const tempLista = [...lista, obj];
      setLista(tempLista);
      setCounter(counter + 1);
    } else {
      const tempLista = [...lista];
      for (let i = 0; i < tempLista.length; i++) {
        const o = tempLista[i];
        if (o.id === id) {
          obj.id = o.id;
          tempLista.splice(i, 1, obj);
          setLista(tempLista);
          break;
        }
      }
    }
    ASyncStorage.setItem(placa, hora);
    setImagem((state) => (state === 'img1' ? 'img7' : 'img1'));
    setItemCount(itemCount + 1);
    setId(null);
  }

  function editar(obj) {
    setId(obj.id);
    setPlaca(obj.placa);
    setHora(obj.hora);
    setItemCount(Math.max(itemCount - 1, 0));
  }

  function apagar(obj) {
    const tempLista = [];

    for (let i = 0; i < tempLista.length; i++) {
      const o = tempLista[i];
      if (o.id === obj.id) {
        tempLista.splice(i, 1);
      }
    }
    setLista(tempLista);
    setItemCount(Math.max(itemCount - 1, 0));
    setImagem((state) => (state === 'img1' ? 'img7' : 'img1'));
    {
      ('');
    }
    setPlaca('');
    setHora('');
  }

  function formatarHora (input){
    let formattedInput = input.replace(/\D/g, '');

    if (formattedInput.length > 2) {
      formattedInput = formattedInput.replace(/^(\d{2})(\d{0,2})/, '$1:$2');
    } else {
      formattedInput = formattedInput.replace(/^(\d{0,2})/, '$1');
    }
    return formattedInput;
  }

  let nomeBotao = 'Cadastrar';
  if (id !== null) {
    nomeBotao = 'Salvar';
  }

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.vagasA}>
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -100, marginLeft: 32 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -100, marginLeft: 2 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -100, marginLeft: 2 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -100, marginLeft: 2 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -100, marginLeft: 2 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -100, marginLeft: 2 }}
        />
      </View>

      <View style={styles.vagasB}>
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -115, marginLeft: 1 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -115, marginLeft: 1.5 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -115, marginLeft: 2 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -115, marginLeft: 2 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -115, marginLeft: 2 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -115, marginLeft: 1 }}
        />
      </View>

      <View style={styles.vagasC}>
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}>
          <Image
            source={imagens[imagem]}
            style={{ width: 36, height: 190, marginTop: -115, marginLeft: 35 }}
          />
        </TouchableOpacity>
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -115, marginLeft: 2 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -115, marginLeft: 2 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -115, marginLeft: 2 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -115, marginLeft: 2 }}
        />
        <Image
          source={img2}
          style={{ width: 36, height: 190, marginTop: -115, marginLeft: 1 }}
        />

        <Modal visible={visible}>
          <View style={{ marginTop: 20 }}>
            <IonIcon
              name="arrow-back"
              size={30}
              onPress={() => {
                setVisible(false);
              }}
            />

            <View
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 5,
              }}>
              <Badge color="secondary" badgeContent={itemCount}>
                <TouchableOpacity style={styles.footerButton}>
                  <Icon name="ticket" size={30} color="#FFFFFF" />
                </TouchableOpacity>
              </Badge>
            </View>

            <Text style={styles.textoInput}>Placa do carro: </Text>
            <TextInput
              style={styles.input}
              value={placa}
              onChangeText={setPlaca}
            />
            <Text style={styles.textoInput}>Horario da Reserva: </Text>
            <TextInput
             style={styles.input}
              value={formatarHora(hora)}
              onChangeText={(text) => setHora(formatarHora(text))}
              placeholder="hh:mm"
              keyboardType="numeric"
              maxLength={5}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                margin: 5,
              }}>
              <Button title={nomeBotao} onPress={salvar} />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 1,
              }}>
              <Button
                title="Ler"
                onPress={() => {
                  ASyncStorage.getItem(placa)
                    .then((texto) => {
                      setHora(texto);
                    })
                    .catch((err) => {
                      alert('Erro: ' + err);
                    });
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                margin: 1,
              }}>
              <Button
                title="Todas as Chaves"
                onPress={() => {
                  ASyncStorage.getItem(placa)
                    .then((err) => {
                      alert('Placa: ' + placa + ' \nHora da Reserva: ' + hora);
                    })
                    .catch((err) => {
                      alert('Erro: ' + err);
                    });
                }}
              />
            </View>
            <FlatList
              data={lista}
              renderItem={(props) => {
                return (
                  <DadosPlaca {...props} onEditar={editar} onApagar={apagar} />
                );
              }}
            />
          </View>
        </Modal>
      </View>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Badge color="secondary" badgeContent={itemCount}>
          <TouchableOpacity style={styles.footerButton}>
            <Icon
              name="ticket"
              size={30}
              color="#FFFFFF"
              onPress={() => {
                setVisible(true);
              }}
            />
          </TouchableOpacity>
        </Badge>
      </View>
    </View>
  );
};

const DadosPlaca = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <View style={{ marginTop: 20, margin: 10 }}>
        <Text style={{ fontSize: 30, color: 'blue' }}>Reservas</Text>
        <Text>Número da Placa: {props.item.placa}</Text>
        <Text>Horario da Reserva: {props.item.hora}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons
            name="trash"
            size={32}
            onPress={() => {
              props.onApagar(props.item);
            }}
          />

          <Ionicons
            name="clipboard"
            size={32}
            onPress={() => {
              props.onEditar(props.item);
            }}
          />
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'space-evenly',
          margin: -10,
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setVisible(true);
          }}>
          Ir para o pagamento
        </TouchableOpacity>
      </View>
      <Modal visible={visible}>
        <View style={styles.viewSob}>
          <View style={styles.viewSob1}>
           <IonIcon
              name="arrow-back"
              size={30}
              onPress={() => {
                setVisible(false);
              }}
            />

            <Text style={styles.textInicial2}>Pagamento</Text>

            <View style={styles.view1}>
              <Image
                source={imgCode}
                style={{
                  width: 250,
                  height: 250,
                  justifyContent: 'center',
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  vagasA: {
    margin: 2,
    flexDirection: 'row',
    marginTop: 30,
    padding: 5,
  },
  vagasB: {
    margin: 2,
    flexDirection: 'row',
    marginTop: -67,
    padding: 37,
  },
  vagasC: {
    margin: 2,
    flexDirection: 'row',
    marginTop: -65,
    padding: 3,
  },
  viewSob1: {
    backgroundColor: '#C4C4C4',
    height: 435,
    borderRadius: 10,
  },
  viewSob: {
    backgroundColor: '#305887',
    height: 700,
    padding: 20,
  },
  view1: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  textInicial2: {
    fontSize: 40,
    fontFamily: 'Italianno',
    padding: 20,
  },
  textoInput: {
    alignSelf: 'center',
    fontSize: 18,
    margin: 5,
  },
  input: {
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 2,
    fontSize: 20,
  },
  footerButton: {
    width: '100%',
    backgroundColor: '#ffbf00',
    borderRadius: 50,
    padding: 13,
    shadowOffset: {
      //Only iOS
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5, //Only Android
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },
});

export default Estacionamento;
