import React from 'react';
import MainScreen from "./src/Main";
import styled from 'styled-components';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import listApp from './src/store/list/reducers';
import thunk from 'redux-thunk';

const store = createStore(listApp,  applyMiddleware(thunk));

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
