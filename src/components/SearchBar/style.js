import { StyleSheet } from 'react-native';

const searchComponentStyle = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        paddingVertical: 5,
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 7,
    },
    textInput: {
        flex: 1,
        height: 35,
        padding: 10,
        fontSize: 18,
    }

});

export { searchComponentStyle };