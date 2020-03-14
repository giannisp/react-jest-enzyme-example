/**
 * @file Simple Calculator component for example purposes.
 */

import React, { useRef, useState } from 'react';

const getSum = (value1, value2) => {
  return value1 + value2;
};

const Calculator = () => {
  const inputValueOne = useRef(null);
  const inputValueTwo = useRef(null);
  const [sum, setSum] = useState(null);

  const add = () => {
    const result = getSum(
      parseFloat(inputValueOne.current.value),
      parseFloat(inputValueTwo.current.value),
    );

    setSum(result);
  };

  return (
    <form>
      <input type="number" defaultValue={0} ref={inputValueOne} />
      <input type="number" defaultValue={0} ref={inputValueTwo} />
      <button type="button" onClick={add} aria-label="Add" />
      <p className="result">{sum}</p>
    </form>
  );
};

export { getSum };
export default Calculator;
