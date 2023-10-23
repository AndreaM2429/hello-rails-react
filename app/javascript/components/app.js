import React from 'react';
import Greeting from './greeting';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGreeting } from '../../src/redux/GretingSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);


  return (<main>
      <Greeting/>
    </main>);
}

export default App;