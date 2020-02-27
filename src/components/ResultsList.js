import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        data={results}
        horizontal
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <ResultsDetail result={item} />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },  
	title: {
		fontSize: 18,
		fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
	}
});

export default ResultsList;