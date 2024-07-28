import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

//tried using Container and the above ,but returned error about {useContext}

function Footer() {
  return (
    <div className="footer">
      <p>Contact us: 044 272 4896</p>
      <p>Email: greenbank@gmail.com</p>
      <label style={{ marginBottom: "8px" }}>Give us feedback</label>
      <br />
      <input placeholder="Type here" />
      <button className="button">Submit</button>
    </div>
  );
}

//just a basic footer
export default Footer;
