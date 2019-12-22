import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import TextInputGuest from '../components/TextInputGuest'
import {deleteGuest, editGuest} from "../store/list/actions";
import {ListItem} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';

function Item({editGuest, deleteGuest, item, selected, onSelect}) {
    const {name, id} = item;
    const [text, setText] = useState(name);
    return (
        selected === id ?
            <TextInputGuest placeholder="Введите имя гостя"
                            onChangeText={setText} value={text} onBlur={() => {
                editGuest({id: selected, name: text});
                selected = '';
            }}
            ></TextInputGuest> : <ListItem titleStyle={styles.inputItem} key={id}
                                           title={name}
                                           bottomDivider onLongPress={() => onSelect(id)}
                                           rightIcon={{
                                               Component: TouchableOpacity,
                                               onPress: () => {
                                                   deleteGuest(id)
                                               },
                                               name: 'ei-close',
                                               type: "evilicon",
                                               color: '#517fa4'
                                           }}>
            </ListItem>
    );
}

const ListGuest = ({list, editGuest, deleteGuest}) => {
    const [selected, setSelected] = React.useState();
    const onSelect = React.useCallback(
        id => {
            setSelected(id);
        }, [selected],
    );
    return (<SafeAreaView>
        <FlatList
            data={list}
            renderItem={({item}) => <Item editGuest={editGuest} deleteGuest={deleteGuest} item={item}
                                          selected={selected}
                                          onSelect={onSelect}/>}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>);
};


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
    },
    inputItem: {
        fontSize: 24,
    }
});

const mapStateToProps = state => ({
    list: state.list
});

const mapDispatchToProps = dispatch => ({
    editGuest: id => dispatch(editGuest(id)),
    deleteGuest: id => dispatch(deleteGuest(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListGuest)