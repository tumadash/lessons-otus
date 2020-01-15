import database from '@react-native-firebase/database';
const ref = database().ref(`/guests`);

export const getGuests = () => {
    // const ref = database().ref(`/guests/`);
    // const snapshot = ref.once('value');
    console.log('User data: ');
    let recentPostsRef = database().ref('/guests');
    recentPostsRef.once('value').then(snapshot => {
        // snapshot.val() is the dictionary with all your keys/values from the '/store' path

    });
    console.log('User data: ', snapshot.val());
    return [{name: 'efreterte'}]
};

export const addGuest = (guest) =>  {
    const ref = database().ref(`/guests/${guest.id}`);
    guest.uid = guest.id;
    ref.set(guest);
};

export const deleteGuest = (guest) => {
    const ref = database().ref(`/guests/${guest.id}`);
    ref.set(null);
};

export const editGuest = (guest) => {
    const ref = database().ref(`/guests/${guest.id}`);
    ref.set(guest);
};
