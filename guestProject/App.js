import React from 'react';
import {StyleSheet,} from 'react-native';
import {MainScreen} from "./src/Main";
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components';

const Container = styled.View`
  backgroundColor: #f98500;
  flex:1`;
const App: () => React$Node = () => {
    return (
        <Container>
            <MainScreen></MainScreen>
        </Container>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
