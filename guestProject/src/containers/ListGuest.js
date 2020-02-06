import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {Item} from "./Item";
import {checkGuest, deleteGuest, editGuest, getGuests} from "../store/list/actions";
import {VisibilityFilters} from "../store/filter/actions";


const renderListGuestItem = (toAbout, item, list, editGuest, deleteGuest, checkGuest, onSelect, selected) =>
    <Item toAbout={toAbout} editGuest={editGuest} deleteGuest={deleteGuest} item={item}
          selected={selected}
          onSelect={onSelect}
          checkGuest={checkGuest}/>;

const ListGuest = ({toAbout, list, editGuest, deleteGuest, checkGuest, getGuests}) => {
    const [selected, setSelected] = React.useState('null');
    const onSelect = React.useCallback(
        id => {
            console.log(id);
            setSelected(id);
        }, [selected],
    );
    useEffect(() => {
        getGuests();
        setSelected(null);
    }, []);

    return (<SafeAreaView style={{flex: 1}}>
        <FlatList
            data={list}
            renderItem={({item}) => renderListGuestItem(toAbout, item, list, editGuest, deleteGuest, checkGuest, onSelect, selected)}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>);
};


const mapStateToProps = state => ({
    list: getVisibleGuest(state.list, state.visibilityFilter)
});

const getVisibleGuest = (list, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return list;
        case VisibilityFilters.SHOW_TWO:
            return list.filter(t => t.isChecked);
        case VisibilityFilters.SHOW_ONE:
            return list.filter(t => !t.isChecked);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapDispatchToProps = dispatch => ({
    editGuest: guest => dispatch(editGuest(guest)),
    deleteGuest: id => dispatch(deleteGuest(id)),
    checkGuest: id => dispatch(checkGuest(id)),
    getGuests: () => dispatch(getGuests()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListGuest)
