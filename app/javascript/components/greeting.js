import React from 'react';
import { useSelector } from 'react-redux';

function Greeting() {
  const { greeting } = useSelector((state) => state.greeting)
  return (<main>
      <h1>Rails Todo Playground GREETING COMPONENT</h1>
      <span>{greeting.text}</span>
    </main>);
}

export default Greeting;