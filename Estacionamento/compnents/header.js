import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Badge from '@material-ui/core/Badge';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
  return (
    <View style={styles.headerWrapper}>
      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        colors={['#ffd900', '#feb300']}
        style={styles.linearGradient}></LinearGradient>

      <View style={styles.header}>
        <Text style={styles.textInicial}>Poupe seu tempo!</Text>
        <View style={styles.traco2} />
        <Text style={styles.textSub}> Venha garantir sua vaga</Text>
        <View style={styles.traco3} />
      </View>
    </View>
  );
};
//<View
//   style={{
//     alignSelf: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   }} showsVerticalScrollIndicator={false}>
//   <Badge color="secondary">
//     <TouchableOpacity style={styles.footerButton}>
//       <Icon
//         name="ticket"
//         size={40}
//         color="black"
//         onPress={() => {
//           setVisible(true);
//         }}
//       />
//     </TouchableOpacity>
//   </Badge>
// </View>
const styles = StyleSheet.create({
  header: {
    position: 'relative',
    flexDirection: '',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 130,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
  },
  textInicial: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Italianno',
    padding: 20,
  },
  textSub: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Italianno',
    padding: 10,
    color: 'white',
  },
  traco2: {
    backgroundColor: 'black',
    height: 1,
    maarginTop: 20,
    width: 270,
    position: 'center',
    alignSelf: 'center',
  },
  traco3: {
    backgroundColor: 'black',
    height: 1,
    maarginTop: 20,
    width: 270,
    alignSelf: 'center',
    marginBottom: 25,
  },
});

export default Header;
