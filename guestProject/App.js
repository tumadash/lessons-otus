import React from 'react';
import MainScreen from "./src/Main";
import {Provider} from 'react-redux'
import styled from "styled-components";
import { store, persistor } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const Container = styled.ScrollView`
  backgroundColor: #f98500;
  flex:1`;

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Container>
                <MainScreen/>
            </Container>
        </PersistGate>
    </Provider>
);

export default App;
