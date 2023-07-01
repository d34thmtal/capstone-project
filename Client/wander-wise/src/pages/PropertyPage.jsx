// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";

// export default function PropertyPage() {
//   // const { id } = useParams();
//   // const [property, setProperty] = useState({});
//   // const [checkInDate, setCheckInDate] = useState("");
//   // const [checkOutDate, setCheckOutDate] = useState("");
//   // const [contactForm, setContactForm] = useState({
//   //   name: "",
//   //   email: "",
//   //   message: "",
//   // });

//   // useEffect(() => {
//   //   axios
//   //     .get(`http://localhost:3001/property/${id}`)
//   //     .then((response) => setProperty(response.data))
//   //     .catch((err) => console.log(err));
//   // }, [id]);

//   // const handleCheckInDateChange = (event) => {
//   //   setCheckInDate(event.target.value);
//   // };

//   // const handleCheckOutDateChange = (event) => {
//   //   setCheckOutDate(event.target.value);
//   // };

//   // const handleContactFormChange = (event) => {
//   //   setContactForm({
//   //     ...contactForm,
//   //     [event.target.name]: event.target.value,
//   //   });
//   // };

//   // const handleContactFormSubmit = (event) => {
//   //   event.preventDefault();
//   //   // devo 
//   // };

//   // if (!property) {
//   //   return <div>Loading...</div>;
//   // }

//   return (
//     <div>
//       <img src={property.coverImageUrl} alt="Cover" style={{ width: "100%" }} />

//       <Container className="pt-4">
//         <Row>
//           <Col md={8}>
//             <h1>{property.name}</h1>
//             <h5>Features:</h5>
//             <ul>
//               {property.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//             <p>Location: {property.location}</p>
//             <p>{property.description}</p>
//           </Col>
//           <Col md={4}>
//             <Form onSubmit={handleContactFormSubmit}>
//               <Form.Group controlId="checkInDate">
//                 <Form.Label>Check-In Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   value={checkInDate}
//                   onChange={handleCheckInDateChange}
//                 />
//               </Form.Group>
//               <Form.Group controlId="checkOutDate">
//                 <Form.Label>Check-Out Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   value={checkOutDate}
//                   onChange={handleCheckOutDateChange}
//                 />
//               </Form.Group>
//               <Form.Group controlId="name">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="name"
//                   value={contactForm.name}
//                   onChange={handleContactFormChange}
//                 />
//               </Form.Group>
//               <Form.Group controlId="email">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   value={contactForm.email}
//                   onChange={handleContactFormChange}
//                 />
//               </Form.Group>
//               <Form.Group controlId="message">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   name="message"
//                   value={contactForm.message}
//                   onChange={handleContactFormChange}
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import MainLayout from "../layout/MainLayout";

export default function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/property/${id}`)
      .then((response) => setProperty(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  const latitude = property.gpsPosition?.latitude;
  const longitude = property.gpsPosition?.longitude;

  return (
    <MainLayout>
      <Container fluid>
        <Row>
          <Col>
            <img
              src={property.coverImageUrl}
              alt={property.name + " for rent"}
              className="w-100"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 88%)"
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={8} className="px-5">
            <h1>{property.name}</h1>
            <p>{property.type} for rent in {property.city}</p>
            <p>Guests: {property.maximumGuest} Bedrooms: {property.bedrooms} Bathrooms: {property.bathrooms}</p>
            <hr />
            <p>{property.description}</p>
            <hr />
            <h3>Features:</h3>
            <ul>
              {property.features && property.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

          </Col>
          <Col md={4}>
            <h2>Prova</h2>
            <p>Price €{property.pricePerNight}</p>
          </Col>
        </Row>
        {latitude && longitude && (
          <Row>
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12093.4979802523!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1688205566939!5m2!1sit!2sit`}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Row>
        )}
      </Container>
    </MainLayout>
  );
}



