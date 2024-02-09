import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import api from './src/services/api';
import Filme from './src/components/Filme';

class App extends Component<{}, FilmesStates> {
  constructor(props: {}) {
    super(props);
    let filmes: FilmeProps[] = [];
    this.state = {
      filmes: filmes,
    };
  }
  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({filmes: response.data});
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Filme
              id={item.id}
              nome={item.nome}
              sinopse={item.sinopse}
              foto={item.foto}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
