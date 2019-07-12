import React from 'react'

import { View, Button, TextInput } from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View>
                <TextInput placeholder="Nom du film"></TextInput>
                <Button title="Rechercher" onPress={() => {}}></Button>
            </View>
        )
    }
}

export default Search