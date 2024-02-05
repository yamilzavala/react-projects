import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>useState error example</h2>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};

export default ErrorExample;
