import React from 'react';
import { Provider } from 'react-redux';
import Container from './components/container/Container';
import { Title } from './styles';
import generateStore from './redux/store/store';

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Title>Slot Machine</Title>
      <Container />
    </Provider>
  );
}

export default App;
