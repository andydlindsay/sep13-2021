import {useState, useEffect, useCallback} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

// let counter = 0;

// const setCounter = () => {
//   counter++;
//   console.log(counter);
// };

const tripleClick = (setCounter) => {
  // setCounter(counter + 1);
  // setCounter(counter + 1);
  // setCounter(counter + 1);

  setCounter((latestCounter) => {
    return latestCounter + 1;
  });
  setCounter((latestCounter) => {
    return latestCounter + 1;
  });
  setCounter((latestCounter) => {
    return latestCounter + 1;
  });
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useDocumentTitle(`useDocumentTitle counter is at ${counter}`);

  // useEffect(() => {
  //   console.log('useEffect is running');
  //   document.title = `counter is at ${counter}`;
  // }, [counter]);

  console.log('the Counter component has rendered');

  

  return (
    <div>
      <h2>This is the counter</h2>

      <h2>Views: {counter}</h2>
      <button onClick={() => tripleClick(setCounter)}>Click me!</button>
    </div>
  );
};

export default Counter;
