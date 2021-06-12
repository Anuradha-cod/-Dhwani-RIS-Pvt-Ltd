import { useState, useRef, useEffect } from "react";
import "./App.css";

const BoxDesign = () => {
  const aRefColumn = useRef(null);
  const bRefColumn = useRef(null);
  const cRefColumn = useRef(null);
  const dREfColumn = useRef(null);
  const [number, setNumber] = useState([]);
  const [deletData, setDeletData] = useState("");

  useEffect(() => {
    aRefColumn.current.focus();
    if (aRefColumn.current.value.length === 4) {
      bRefColumn.current.focus();
    }
    if (bRefColumn.current.value.length === 4) {
      cRefColumn.current.focus();
    }
    if (cRefColumn.current.value.length === 4) {
      dREfColumn.current.focus();
    }
    if ((!number[3] || !number[3].length) && deletData === 8) {
      cRefColumn.current.focus();
    }
    if ((!number[2] || !number[2].length) && deletData === 8) {
      bRefColumn.current.focus();
    }
    if ((!number[1] || !number[1].length) && deletData === 8) {
      aRefColumn.current.focus();
    }
  }, [number]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number.join(""));
  };

  return (
    <div className="App">
      <div className="creditCard">
        <h2> Card Number*</h2>
        <form onSubmit={handleSubmit} className="credit_Card">
          {[...Array(4).keys()].map((e) => (
            <Input
              number={number}
              setNumber={setNumber}
              key={e}
              index={e}
              setDeletData={setDeletData}
              uRef={
                e === 0
                  ? aRefColumn
                  : e === 1
                  ? bRefColumn
                  : e === 2
                  ? cRefColumn
                  : dREfColumn
              }
            />
          ))}
        </form>
      </div>
    </div>
  );
};

const Input = ({ number, setNumber, index, uRef, setDeletData }) => {
  const handleChange = (e) => {
    let arr = [...number];
    arr[index] = e.target.value.replace(/[^0-9]/g, "");
    setNumber([...arr]);
  };

  const handleKeyUp = (e) => {
    setDeletData(e.keyCode);
  };

  return (
    <input
      className="input_box"
      ref={uRef}
      style={{ maxWidth: "4ch" }}
      value={number[index]}
      size="4"
      name="number"
      maxLength="4"
      onChange={handleChange}
      onKeyUp={handleKeyUp}
    />
  );
};

export default BoxDesign;
