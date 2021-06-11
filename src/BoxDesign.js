import { useState, useRef, useEffect } from "react";
import "./App.css";

const BoxDesign = () => {
  const aRef = useRef(null);
  const bRef = useRef(null);
  const cRef = useRef(null);
  const dRef = useRef(null);
  const [number, setNumber] = useState([]);

  useEffect(() => {
    aRef.current.focus();
    if (aRef.current.value.length === 4) {
      bRef.current.focus();
    }
    if (bRef.current.value.length === 4) {
      cRef.current.focus();
    }
    if (cRef.current.value.length === 4) {
      dRef.current.focus();
    }
    if (number.length === 4 && dRef.current.value.length === 0) {
      cRef.current.focus();
    }
    if (number.length === 3 && cRef.current.value.length === 0) {
      bRef.current.focus();
    }
    if (number.length === 2 && bRef.current.value.length === 0) {
      aRef.current.focus();
    }
    console.log(number, "number");
  }, [number, aRef, bRef, cRef, dRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number.join(""));
  };

  return (
    <div className="App">
      <span>
        <h1>crad</h1>
        <form onSubmit={handleSubmit}>
          {[...Array(4).keys()].map((e) => (
            <Input
              number={number}
              setNumber={setNumber}
              key={e}
              index={e}
              uRef={e === 0 ? aRef : e === 1 ? bRef : e === 2 ? cRef : dRef}
            />
          ))}
        </form>
      </span>
    </div>
  );
};

const Input = ({ number, setNumber, index, uRef }) => {
  const abc = (e) => {
    let arr = [...number];
    arr[index] = e.target.value.replace(/[^0-9]/g, "");
    setNumber([...arr]);
  };

  return (
    <input
      ref={uRef}
      style={{ maxWidth: "4ch" }}
      value={number[index]}
      size="4"
      name="number"
      maxLength="4"
      onChange={abc}
    />
  );
};

export default BoxDesign;
