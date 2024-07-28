import React from "react";

//function with props
//everything same as BankFee
function Interest({ interestRate, setInterestRate, isFixed, setIsFixed }) {
  return (
    <div>
      <label style={{ fontSize: "21px", fontWeight: "500", padding: "8px" }}>
        <input
          style={{ accentColor: "rgb(32, 183, 112)", marginRight: "8px" }}
          type="checkbox"
          checked={isFixed}
          onChange={(event) => setIsFixed(event.target.checked)}
        />
        Fixed interest rate
      </label>
      <br />
      {/*condition for fixed or user input*/}
      {!isFixed && (
        <input
          type="number"
          onChange={(event) => setInterestRate(event.target.value)}
          placeholder="Enter interest rate(%)"
          value={interestRate}
        />
      )}
    </div>
  );
}

export default Interest;
