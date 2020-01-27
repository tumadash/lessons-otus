import React from 'react';
import {Provider} from 'react-redux'
import styled from "styled-components";
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from "./src/Navigation";


const Container = styled.ScrollView`
  backgroundColor: #f98500;
  flex:1`;

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Container>
                <Navigation/>
            </Container>
        </PersistGate>
    </Provider>
);

export default App;
