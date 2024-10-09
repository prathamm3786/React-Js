import React, { useState } from 'react';
import './Count.css'; 

function NewCount() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="count-container">
      <h1 className='CountName'>Counter App</h1>
      <div className="Newcount">{count}</div>
      <div className="counter-controls">
        <button className="btn" onClick={increment}>+</button>
        {
            count<=0 ?<button disabled className="btn" onClick={reset}>R</button>
            :<button className="btn" onClick={reset}>R</button>
        }
        
        {
            count<=0 ?<button disabled className="btn" onClick={decrement}>-</button>
            :<button className="btn" onClick={decrement}>-</button>
        }
        
        
      </div>
    </div>
  );
}

export default NewCount;