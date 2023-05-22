import { useState } from "react";
import Card from "./Card";

const initialState = {
  Name: "",
  Height: "",
  Weight: "",
  PowerLevel: "",
};

const InputTags = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState([]);
  const[maxpower,setMaxpower] = useState(0)

  const handleFormChange = (event) => {
    let { name, value } = event.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setData((prevData) => [...prevData, state]);
    console.log(data);
    console.log(state);
    setState(initialState);
  };

  const handleMostpowerfull = () => {
       
    let max=0;
    data.map((el, i) => {
      max = Math.max(el.PowerLevel, max);
    });

    console.log(max);

    setMaxpower(max);
  };

  const handleShowAll=()=>{

    setMaxpower(0)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "10px auto",
          gap: "10px",
        }}
      >
        <input
          data-testid="input-name"
          type="text"
          name="Name"
          placeholder="Enter SuperHero Name "
          value={state.Name}
          onChange={handleFormChange}
        />
        <input
          data-testid="input-height"
          type="text"
          name="Height"
          placeholder="Enter Height in cms "
          value={state.Height}
          onChange={handleFormChange}
        />
        <input
          data-testid="input-weight"
          type="text"
          placeholder="Enter Weight in kg "
          name="Weight"
          value={state.Weight}
          onChange={handleFormChange}
        />
        <input
          data-testid="input-power"
          type="text"
          name="PowerLevel"
          placeholder="PowerLevel ?"
          value={state.PowerLevel}
          min="0"
          max="10"
          maxLength="10"
          onChange={handleFormChange}
        />
        <button
          data-testid="add-button"
          disabled={
            state.Name && state.Height && state.Weight && state.PowerLevel
              ? false
              : true
          }
        >
          Add SuperHero
        </button>
      </form>
      {data.length > 1 && (
        <>
          {" "}
          <button data-testid="most-powerfull" onClick={handleMostpowerfull}>
            Most Powerful Superhero
          </button>
          <button data-testid="all-superheroes" onClick={handleShowAll}>Show All</button>
        </>
      )}

      <Card data={data} max={maxpower} />
    </>
  );
};

export default InputTags;
