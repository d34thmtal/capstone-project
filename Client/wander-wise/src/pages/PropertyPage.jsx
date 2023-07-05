// import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import { Container, Row, Col, Button } from "react-bootstrap";
// import axios from "axios";
// import MainLayout from "../layout/MainLayout";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'
// import './PropertyPage.css'
// import { Select } from "@mantine/core";

// export default function PropertyPage() {
//   const { id } = useParams();
//   const [property, setProperty] = useState({});

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3001/property/${id}`)
//       .then((response) => setProperty(response.data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   const latitude = property.gpsPosition?.latitude;
//   const longitude = property.gpsPosition?.longitude;
//   const [date, setDate] = useState(new Date());
//   const [startDate, setStartDate] = useState();
//   const [endDate, setEndDate] = useState();

//   return (
//     <MainLayout>
//       <Container fluid>
//         <Row>
//           <Col className="p-0">
//             <img
//               src={property.coverImageUrl}
//               alt={property.name + " for rent"}
//               className="w-100"
//               style={{
//                 maxHeight: "400px",
//                 objectFit: "cover",
//                 clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 88%)"
//               }}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col md={8} className="px-5">
//             <h1>{property.name}</h1>
//             <p><strong>{property.type} for rent in {property.city}</strong></p>
//             <p>Guests: {property.maximumGuest} Bedrooms: {property.bedrooms} Bathrooms: {property.bathrooms}</p>
//             <hr />
//             <p>{property.description}</p>
//             <hr />
//             <h3>Features:</h3>
//             <ul>
//               {property.features && property.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//           </Col>
//           <Col md={4} style={{ backgroundColor: "#4DADB1", clipPath: "polygon(0 0, 100% 3%, 100% 95%, 0 95%)", marginTop: "20px", marginBottom: "20pxS", textAlign: "center" }}>
//             <Container className="p-5">
//               <h5>From €{property.pricePerNight}/Night</h5>
//               <Row>
//                 <Col md={6}>
//                   <DatePicker
//                     selectsStart
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                     startDate={startDate}
//                     placeholderText="Arrival"
//                     className="custom-datepicker"
//                     required="true"
//                   />
//                 </Col>
//                 <Col md={6}>
//                   <DatePicker
//                     selectsEnd
//                     selected={endDate}
//                     onChange={(date) => setEndDate(date)}
//                     endDate={endDate}
//                     startDate={startDate}
//                     minDate={startDate}
//                     placeholderText="Departure"
//                     className="custom-datepicker"
//                     required="true"
//                   />

//                 </Col>
//               </Row>
//               <Row>
//                 <Col className="px-5">
//                   <div className="w/2/12">
//                     <Select
//                       size="lg"
//                       placeholder="Guests"
//                       className="guest-list"
//                       clearable
//                       data={[
//                         { value: 1, label: "1" },
//                         { value: 2, label: "2" },
//                         { value: 3, label: "3" },
//                         { value: 4, label: "4" },
//                         { value: 5, label: "5" },
//                         { value: 6, label: "6" },
//                         { value: 7, label: "7" },
//                         { value: 8, label: "8" },
//                         { value: 9, label: "9" },
//                         { value: 10, label: "10+" },
//                       ]}
//                     />
//                   </div>
//                   <input type="text" placeholder="Name" required />
//                   <input type="text" placeholder="Surname" required />
//                   <input type="email" placeholder="Your Email" required />
//                   <input type="phone" placeholder="Phone" />
//                 </Col>
//                 <Row className="p-5">
//                   <h4>Total €{property.pricePerNight}</h4>
//                   <Button
//                     style={{
//                       maxWidth: "200px",
//                     }}>Send Request</Button>
//                 </Row>
//               </Row>
//             </Container>
//           </Col>

//         </Row>
//         {latitude && longitude && (
//           <Row>
//             <iframe
//               src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12093.4979802523!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1688205566939!5m2!1sit!2sit`}
//               width="600"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </Row>
//         )}
//       </Container>
//     </MainLayout >
//   );
// }


import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
import { faUsers, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import axios from "axios";
import MainLayout from "../layout/MainLayout";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './PropertyPage.css'
import { Select } from "@mantine/core";

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
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <MainLayout>
      <Container fluid>
        <Row>
          <Col className="p-0">
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
            <p><strong>{property.type} for rent in {property.city}</strong></p>
            <p><FontAwesomeIcon icon={faUsers} />  {property.maximumGuest} - <FontAwesomeIcon icon={faBed} /> {property.bedrooms} - <FontAwesomeIcon icon={faBath} /> {property.bathrooms}</p>
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
          <Col md={4} style={{ backgroundColor: "#4DADB1", clipPath: "polygon(0 0, 100% 3%, 100% 95%, 0 95%)", marginTop: "20px", marginBottom: "20pxS", textAlign: "center", zIndex: "0" }}>
            <Container className="p-5">
              <h5>From €{property.pricePerNight}/Night</h5>
              <Row>
                <Col md={6}>
                  <DatePicker
                    selectsStart
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    startDate={startDate}
                    placeholderText="Arrival"
                    className="custom-input custom-datepicker"
                    required="true"
                  />
                </Col>
                <Col md={6}>
                  <DatePicker
                    selectsEnd
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    endDate={endDate}
                    startDate={startDate}
                    minDate={startDate}
                    placeholderText="Departure"
                    className="custom-input custom-datepicker"
                    required="true"
                  />

                </Col>
              </Row>
              <Row>
                <Col className="px-5">
                  <div className="w/2/12">
                    <Select
                      size="lg"
                      placeholder="Guests"
                      className="custom-input guest-list"
                      clearable
                      data={[
                        { value: 1, label: "1" },
                        { value: 2, label: "2" },
                        { value: 3, label: "3" },
                        { value: 4, label: "4" },
                        { value: 5, label: "5" },
                        { value: 6, label: "6" },
                        { value: 7, label: "7" },
                        { value: 8, label: "8" },
                        { value: 9, label: "9" },
                        { value: 10, label: "10+" },
                      ]}
                    />
                  </div>
                  <input type="text" placeholder="Name" className="custom-input" required />
                  <input type="text" placeholder="Surname" className="custom-input" required />
                  <input type="email" placeholder="Your Email" className="custom-input" required />
                  <input type="phone" placeholder="Phone" className="custom-input" />
                </Col>
                <Row className="p-5">
                  <h4>Total €{property.pricePerNight}</h4>
                  <Button
                    style={{
                      maxWidth: "200px",
                    }}>Send Request</Button>
                </Row>
              </Row>
            </Container>
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
    </MainLayout >
  );
}

