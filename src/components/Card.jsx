const Card = ({ data = [], max }) => {
  console.log(data);
    
  const filterdata = max ? data.filter((el)=> el.PowerLevel >=max) : data 


  return (
    <div
      data-testid="data-list"
      style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
    >
    {/* one appoach by using HOF  */}
      {/* .filter((el) => el.PowerLevel >= max) */}

      {filterdata.map((item, index) => {
          return (
            <div
              key={index}
              data-testid="superhero-list"
              style={{
                border: "2px solid black",
                width: "90%",
                gap: "50px",
                margin: "30px",
              }}
            >
              {/*All the content of the card has to be added over here*/}
              <h2>Hero Name : {item.Name}</h2>
              <p> Height : {item.Height}</p>
              <p>Weight : {item.Weight}</p>
              <p>PowerLevel : {item.PowerLevel}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
