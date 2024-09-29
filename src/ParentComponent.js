import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <ChildComponent onIncrement={handleIncrement} />
      <p>Count: {count}</p>
    </div>
  );
};

export default ParentComponent;
