import React from 'react';
import MainScreen from "./src/Main";
import {Provider} from 'react-redux'
import styled from "styled-components";
import {store} from  "./src/store/store"

const Container = styled.ScrollView`
  backgroundColor: #f98500;
  flex:1`;

const App = () => (
    <Provider store={store}>
        <Container>
            <MainScreen/>
        </Container>
    </Provider>
);

export default App;
