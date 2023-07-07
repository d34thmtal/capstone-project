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


// import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { faUsers, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import MainLayout from "../layout/MainLayout";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './PropertyPage.css';
// import { Select } from "@mantine/core";
// import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';

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

//   const greenOptions = { color: 'green', fillColor: 'green' }


//   const [reservation, setReservation] = useState({});
//   const navigate = useNavigate();

//   const formHandler = (event) => {
//     const { name, value } = event.target;
//     setReservation({
//       ...reservation,
//       [name]: value
//     });
//   };

//   const guestsNumberHandler = (value) => {
//     setReservation({
//       ...reservation,
//       guestsNumber: value
//     });
//   };

//   const formSubmittedHandler = () => {
//     let data = new FormData();
//     data.append('arrivalDate', reservation.arrivalDate)
//     data.append('departureDate', reservation.departureDate)
//     data.append('guestsNumber', reservation.guestsNumber)
//     data.append('guestName', reservation.guestName);
//     data.append('guestLastname', reservation.guestLastname);
//     data.append('guestEmail', reservation.guestEmail);
//     data.append('guestPhone', reservation.guestPhone);

//     const config = {
//       headers: { 'content-type': 'multipart/form-data' }
//     }

//     axios.post('http://localhost:3001/reservation', data, config)
//       .then((response) => { navigate(`/property/${id}`); })
//       .catch(error => { console.error(error) })
//   };

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
//             <p><FontAwesomeIcon icon={faUsers} />  {property.maximumGuest} - <FontAwesomeIcon icon={faBed} /> {property.bedrooms} - <FontAwesomeIcon icon={faBath} /> {property.bathrooms}</p>
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
//           <Col md={4} style={{ backgroundColor: "#4DADB1", clipPath: "polygon(0 0, 100% 3%, 100% 95%, 0 95%)", marginTop: "20px", marginBottom: "20pxS", textAlign: "center", zIndex: "0" }}>
//             <Container className="p-5">
//               <h5>From €{property.pricePerNight}/Night</h5>
//               <Row>
//                 <Col md={6}>
//                   <DatePicker
//                     selectsStart
//                     selected={startDate}
//                     onChange={(date) => {
//                       setStartDate(date);
//                       formHandler();
//                     }}
//                     startDate={startDate}
//                     placeholderText="Arrival"
//                     name="arrivalDate"
//                     required="true"
//                   />
//                 </Col>
//                 <Col md={6}>
//                   <DatePicker
//                     selectsEnd
//                     selected={endDate}
//                     onChange={(date) => {
//                       setEndDate(date);
//                       formHandler();
//                     }}
//                     endDate={endDate}
//                     startDate={startDate}
//                     minDate={startDate}
//                     placeholderText="Departure"
//                     name="departureDate"
//                     required="true"
//                   />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col className="px-5">
//                   <div className="w/2/12">
//                     <Select
//                       size="lg"
//                       name="guestsNumber"
//                       placeholder="Guests"
//                       className="custom-input guest-list"
//                       clearable
//                       onChange={guestsNumberHandler}
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
//                   <input type="text" name="guestName" placeholder="Name" className="custom-input" required onChange={formHandler} />
//                   <input type="text" name="guestLastname" placeholder="Lastname" className="custom-input" required onChange={formHandler} />
//                   <input type="email" name="guestEmail" placeholder="Your Email" className="custom-input" required onChange={formHandler} />
//                   <input type="phone" name="guestPhone" placeholder="Phone" className="custom-input" onChange={formHandler} />
//                 </Col>
//                 <Row className="p-5">
//                   <h4>Total €{property.pricePerNight}</h4>
//                   <Button
//                     onClick={formSubmittedHandler}
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
//             <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: "400px", width: "100%" }} scrollWheelZoom={false}>
//               <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//               <Circle
//                 center={[latitude, longitude]}
//                 pathOptions={greenOptions}
//                 radius={200}
//               />
//             </MapContainer>
//           </Row>
//         )}
//       </Container>
//     </MainLayout>
//   );
// }



import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
import { faUsers, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import MainLayout from "../layout/MainLayout";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PropertyPage.css';
import { Select } from "@mantine/core";
import { MapContainer, TileLayer, Circle } from 'react-leaflet';

export default function PropertyPage() {

  //Costanti Relative ai property data
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/property/${id}`)
      .then((response) => setProperty(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  //Costanti Maps
  const latitude = property.gpsPosition?.latitude;
  const longitude = property.gpsPosition?.longitude;
  const greenOptions = { color: 'green', fillColor: 'green' }

  //Costanti Date Picker
  const [date, setDate] = useState(new Date());
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (date) => {
    const formattedDate = date.toLocaleDateString('en-US');
    setFormState({
      ...formState,
      arrivalDate: formattedDate,
    });
  };

  // console.log("start" + startDate)
  // console.log("end" + endDate)

  const propertyName = property.name

  //Costanti relative a Reservation
  //fatto con marco
  useEffect(() => {
    const propertyName = document.getElementById("propertyName")?.textContent;
    setFormState((prevFormState) => ({
      ...prevFormState,
      propertyName: propertyName,
    }));
  }, [property.name]);

  const [formState, setFormState] = useState({
    propertyName: "",
    arrivalDate: "",
    departureDate: "",
    guestName: "",
    guestLastName: "",
    guestEmail: "",
    guestPhone: ""
  });
  console.log(formState)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  //
  const [reservation, setReservation] = useState({});
  const navigate = useNavigate();

  const formHandler = (event) => {
    const { name, value } = event.target;
    setReservation({
      ...reservation,
      [name]: value
    });
  };

  const formSubmittedHandler = () => {
    const data = {
      propertyName: formState.propertyName,
      guestName: formState.guestName,
      guestLastName: formState.guestLastName,
      guestMail: formState.guestEmail,
      guestPhone: formState.guestPhone,
      arrivalDate: formState.arrivalDate,
      departureDate: formState.departureDate,
      guestsNumber: formState.guestsNumber
    };


    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }


    axios
      .post('http://localhost:3001/reservation', data)
      .then((response) => {
        navigate(`/property/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
            <h1 id="propertyName">{property.name}</h1>
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
                    name="arrivalDate"
                    placeholderText="Arrival"
                    selected={new Date()}
                    minDate={endDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                  />
                  <DatePicker
                    selectsEnd
                    name="departureDate"
                    placeholderText="Departure"
                    selected={endDate}
                    minDate={startDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                  />
                  {/* <DatePicker
                    selectsEnd
                    selected={endDate}
                    onChange={handleDateChange}
                    endDate={endDate}
                    startDate={startDate}
                    minDate={startDate}
                    placeholderText="Departure"
                    name="departureDate"
                    required
                  /> */}
                </Col>
              </Row>
              <Row>
                <Col className="px-5">
                  <div className="w/2/12">
                    <Select
                      size="lg"
                      name="guestsNumber"
                      placeholder="Guests"
                      className="custom-input guest-list"
                      clearable
                      onChange={(e) => setFormState({
                        ...formState,
                        guestsNumber: e.target.value
                      })}
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
                  <input type="text" name="guestName" placeholder="Name" className="custom-input" required onChange={(e) => setFormState({
                    ...formState,
                    guestName: e.target.value
                  })} />
                  <input type="text" name="guestLastname" placeholder="Lastname" className="custom-input" required onChange={(e) => setFormState({
                    ...formState,
                    guestLastName: e.target.value
                  })} />
                  <input type="email" name="guestEmail" placeholder="Your Email" className="custom-input" required onChange={(e) => setFormState({
                    ...formState,
                    guestEmail: e.target.value
                  })} />
                  <input type="phone" name="guestPhone" placeholder="Phone" className="custom-input" onChange={(e) => setFormState({
                    ...formState,
                    guestPhone: e.target.value
                  })} />
                </Col>
                <Row className="p-5">
                  <h4>Total €{property.pricePerNight}</h4>
                  <Button
                    onClick={formSubmittedHandler}
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
            <MapContainer center={[latitude, longitude]} zoom={15} style={{ height: "400px", width: "100%" }} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Circle
                center={[latitude, longitude]}
                pathOptions={greenOptions}
                radius={200}
              />
            </MapContainer>
          </Row>
        )}
      </Container>
    </MainLayout>
  );
}


