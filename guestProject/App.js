import React from 'react';
import MainScreen from "./src/Main";
import styled from 'styled-components';
import {Provider} from 'react-redux'
import {createStore} from "redux";
import listApp from './src/store/list/reducers'

const store = createStore(listApp);

const Container = styled.ScrollView`
  backgroundColor: #f98500;
  flex:1`;

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <Container>
                <MainScreen></MainScreen>
            </Container>
        </Provider>
    );
};

export default App;
