import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
export default class App extends React.Component {
render() {
return (
<View>
<FlatList
data={[
{key: 'Peeter'},
{key: 'Parker'},
{key: 'James'},
{key: 'Bond'},
{key: 'Goole'},
{key: 'Bing'},
]}
renderItem={({item}) =><Text>{item.key}</Text>}
/>
</View>
);
}
}