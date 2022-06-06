import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
    
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  //   if(user){
  //       setEmail(user?.email)
  //   }

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handleCityPassBlur = (event) => {
    setCity(event.target.value);
  };

  const handlePhonePassBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleShippingInfoSubmit = (event) => {
    event.preventDefault();

    const shipping = { name, email, address, city, phone };
    console.log(shipping);
  };

  return (
    <div className="w-50 mx-auto border border-4 rounded m-3 p-5">
      <h2>Shipping Information !!!</h2>
      <Form onSubmit={handleShippingInfoSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            onBlur={handleNameBlur}
            type="text"
            name="name"
            placeholder="your name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={user?.email}
            readOnly
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Control
            onBlur={handleAddressBlur}
            type="text"
            name="address"
            placeholder="enter your address"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Control
            onBlur={handleCityPassBlur}
            type="text"
            name="city"
            placeholder="enter your city"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Control
            onBlur={handlePhonePassBlur}
            type="text"
            name="phone"
            placeholder="enter phone number"
            required
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <p className="text-danger">{error}</p>

        <Button
          className="btn btn-warning mx-auto"
          variant="primary"
          type="submit"
        >
          Add Shipping
        </Button>
      </Form>
    </div>
  );
};

export default Shipment;
