import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {SearchBar} from 'react-native-elements';

const Search = () => {
    const [search, setSearch] = useState('');

  return (
    <View>
         <SearchBar
          round
          searchIcon={{ size: 20 }}
          containerStyle={{width: 250, height: 50, backgroundColor:'#fcebc6', borderTopColor: '#fcebc6', borderBottomColor:'#fcebc6'}}
          inputContainerStyle={{width: 250, height: 20, backgroundColor:'white'}}
          inputStyle={{fontSize: 12,fontFamily: "Cochin"}}
          onChangeText={search => setSearch(search)}
          placeholder="Search product..."
          defaultValue={search}
          value={search}
        />
    </View>
  );
};

export default Search;
