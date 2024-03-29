import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class Filme extends Component<FilmeProps, {}> {
  constructor(props: FilmeProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <View>
        <View style={styles.card}>
          <Text style={styles.titulo}>{this.props.nome}</Text>
          <Image source={{uri: this.props.foto}} style={styles.capa} />
          <View style={styles.areaBotao}>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>LEIA MAIS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    padding: 15,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9,
  },
  botao: {
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
  },
  botaoTexto: {
    textAlign: 'center',
  },
});

export default Filme;
