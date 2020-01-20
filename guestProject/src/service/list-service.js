import database from '@react-native-firebase/database';

const ref = database().ref(`/guests`);

export const getGuestsService = async () => {
    let recentPostsRef = await database().ref('/guests');
    return recentPostsRef.once('value');
};

export const addGuestService = (guest) => {
    const ref = database().ref(`/guests/${guest.id}`);
    guest.uid = guest.id;
    ref.set(guest);
};

export const checkGuestService = (id) => {
    const ref = database().ref(`/guests/${id}`);
    ref.once('value').then(snapshot => {
        let guest = snapshot.val();
        guest.isChecked = !guest.isChecked;
        ref.set(guest);
    });

};

export const deleteGuestService = (guest) => {
    const ref = database().ref(`/guests/${guest.id}`);
    ref.set(null);
};

export const editGuestService = (guest) => {
    const ref = database().ref(`/guests/${guest.id}`);
    ref.set(guest);
};
