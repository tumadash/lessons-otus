import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {Item} from "./Item";
import {checkGuest, deleteGuest, editGuest, getGuests, VisibilityFilters} from "../store/list/actions";

// function calcAllGuest(filter, list) {
//     switch (filter) {
//         case VisibilityFilters.SHOW_TWO:
//             allGuest = list.filter(guest => guest.isChecked).length * 2;
//             break;
//         case VisibilityFilters.SHOW_ONE:
//             allGuest = list.filter(t => !t.isChecked).length;
//             break;
//         default:
//             allGuest = 0;
//             for (let i = 0; i < list.length; i++) {
//                 allGuest = list[i].isChecked ? allGuest + 2 : allGuest + 1;
//             }
//     }
// }

const renderListGuestItem = (item, list, editGuest, deleteGuest, checkGuest, onSelect, selected) => {
    return <Item editGuest={editGuest} deleteGuest={deleteGuest} item={item}
                 selected={selected}
                 onSelect={onSelect}
                 checkGuest={checkGuest}/>
};

const ListGuest = ({list, editGuest, deleteGuest, checkGuest, getGuests}) => {
    const [selected, setSelected] = React.useState();
    const onSelect = React.useCallback(
        id => {
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
            renderItem={({item}) => renderListGuestItem(item, list, editGuest, deleteGuest, checkGuest, onSelect, selected)}
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
    editGuest: id => dispatch(editGuest(id)),
    deleteGuest: id => dispatch(deleteGuest(id)),
    checkGuest: id => dispatch(checkGuest(id)),
    getGuests: () => dispatch(getGuests()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListGuest)