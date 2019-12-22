import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import styled from "styled-components";
import {connect} from 'react-redux';
import TextInputGuest from '../components/TextInputGuest'
import {editGuest} from "../store/list/actions";

const GuestItem = styled.TouchableOpacity`
  backgroundColor: white
  width: 400;
  border-radius:5
  fontSize: 24;
  alignSelf: center;
  padding:  10px;
  margin: 5px 0 
`;

function Item({editGuest, item, selected, onSelect}) {
    const {name, id} = item;
    const [text, setText] = useState(name);
    return (
        selected === id ?
            <TextInputGuest placeholder="Введите имя гостя"
                            onChangeText={setText} value={text} onBlur={() => {
                editGuest({id: selected, name: text});
                selected = '';
            }}
            ></TextInputGuest> : <GuestItem onLongPress={() => onSelect(id)}>
                <Text style={styles.title}>{name}</Text>
            </GuestItem>
    );
}

const ListGuest = ({list, editGuest}) => {
    const [selected, setSelected] = React.useState();
    const onSelect = React.useCallback(
        id => {
            setSelected(id);
        }, [selected],
    );
    return (<SafeAreaView>
        <FlatList
            data={list}
            renderItem={({item}) => <Item editGuest={editGuest} item={item} selected={selected}
                                          onSelect={onSelect}/>}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>);
};


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
    },
});

const mapStateToProps = state => ({
    list: state.list
});

const mapDispatchToProps = dispatch => ({
    editGuest: id => dispatch(editGuest(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListGuest)