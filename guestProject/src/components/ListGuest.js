import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import styled from "styled-components";
import {connect} from 'react-redux';

const GuestItem = styled.TouchableOpacity`
  backgroundColor: white
  width: 400;
  border-radius:5
  fontSize: 24;
  alignSelf: center;
  padding:  10px;
  margin: 5px 0 
`;
const TextInputGuest = styled.TextInput`
  backgroundColor: white
  width: 400;
  border-radius:5
  fontSize: 24;
  alignSelf: center;
  padding:  10px;
  margin-bottom: 15 
`;

function Item({item, selected, onSelect}) {
    const {name, id} = item;
    const [text, setText] = useState(name);
    return (
        selected === id ?
            <TextInputGuest placeholder="Введите имя гостя"
                            onChangeText={setText} value={text}
            ></TextInputGuest> : <GuestItem onLongPress={() => onSelect(id)}>
                <Text style={styles.title}>{name}</Text>
            </GuestItem>
    );
}

const ListGuest = ({list}) => {
    const [selected, setSelected] = React.useState();
    const onSelect = React.useCallback(
        id => {
            console.log(id);
            setSelected(id);
        }, [selected],
    );
    return (<SafeAreaView>
        <FlatList
            data={list}
            renderItem={({item}) => <Item item={item} selected={selected}
                                          onSelect={onSelect}/>}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>);
};


const styles = StyleSheet.create({
    title: {
        fontSize: 32,
    },
});

const mapStateToProps = state => ({
    list: state.list
});

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListGuest)