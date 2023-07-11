// import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { faUsers, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from "axios";
// import MainLayout from "../layout/MainLayout";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './PropertyPage.css';
// import { Select } from "@mantine/core";
// import { MapContainer, TileLayer, Circle } from 'react-leaflet';

// export default function PropertyPage() {

//   //Costanti Relative ai property data
//   const { id } = useParams();
//   const [property, setProperty] = useState({});

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3001/property/${id}`)
//       .then((response) => setProperty(response.data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   //Costanti Maps
//   const latitude = property.gpsPosition?.latitude;
//   const longitude = property.gpsPosition?.longitude;
//   const greenOptions = { color: 'green', fillColor: 'green' }

//   //Costanti Date Picker
//   const [date, setDate] = useState(new Date());
//   // const [startDate, setStartDate] = useState(new Date());
//   // const [endDate, setEndDate] = useState(new Date());

//   const handleArrivalDateChange = (date) => {
//     const formattedDate = date.toLocaleDateString('it-IT');
//     setFormState((prevFormState) => ({
//       ...prevFormState,
//       arrivalDate: formattedDate,
//     }));
//     const arrival = date.getTime();
//     const departure = endDate.getTime();

//     if (arrival < departure) {
//       const diffTime = Math.abs(departure - arrival);
//       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//       setNights(diffDays);
//     } else {
//       setNights(0);
//     }
//   };
//   const handleDepartureDateChange = (date) => {
//     const formattedDate = date.toLocaleDateString('it-IT');
//     setFormState((prevFormState) => ({
//       ...prevFormState,
//       departureDate: formattedDate,
//     }));

//     const arrival = startDate.getTime();
//     const departure = date.getTime();

//     if (arrival < departure) {
//       const diffTime = Math.abs(departure - arrival);
//       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//       setNights(diffDays);
//     } else {
//       setNights(property.pricePerNight);
//     }
//   };

//   const handleDateChange = (date) => {
//     const formattedDate = date.toLocaleDateString('en-US');
//     setFormState({
//       ...formState,
//       arrivalDate: formattedDate,
//     });
//   };

//   // console.log("start" + startDate)
//   // console.log("end" + endDate)

//   const propertyName = property.name

//   //Costanti relative a Reservation
//   //fatto con marco
//   useEffect(() => {
//     const propertyName = document.getElementById("propertyName")?.textContent;
//     setFormState((prevFormState) => ({
//       ...prevFormState,
//       propertyName: propertyName,
//     }));
//   }, [property.name]);


//   const [formState, setFormState] = useState({
//     // propertyName: "",
//     // arrivalDate: "",
//     // departureDate: "",
//     // guestName: "",
//     // guestLastName: "",
//     // guestEmail: "",
//     // guestPhone: ""
//   });
//   console.log(formState)
//   const [startDate, setStartDate] = useState(new Date())
//   const [endDate, setEndDate] = useState(new Date())
//   const [nights, setNights] = useState(1);


//   // const [erros, setErrors] = useState('')
//   // const [allertReservation, setAllertReservation] = useState(false)



//   const [reservation, setReservation] = useState({});
//   const navigate = useNavigate();


//   const formHandler = (event) => {
//     const { name, value } = event.target;
//     setReservation({
//       ...reservation,
//       [name]: value
//     });
//   };

//   const formSubmittedHandler = () => {
//     const totalPrice = nights * property.pricePerNight;
//     const data = {
//       propertyName: formState.propertyName,
//       guestName: formState.guestName,
//       guestLastName: formState.guestLastName,
//       guestMail: formState.guestEmail,
//       guestPhone: formState.guestPhone,
//       arrivalDate: formState.arrivalDate,
//       departureDate: formState.departureDate,
//       guestsNumber: formState.guestsNumber,
//       totalPrice: totalPrice
//     };
//     console.log(totalPrice)


//     const config = {
//       headers: { 'content-type': 'multipart/form-data' }
//     }


//     axios
//       .post('http://localhost:3001/reservation', data)
//       .then((response) => {
//         navigate(`/property/${id}`);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };




//   //


//   // const formHandlerReservation = () => {
//   //   if (
//   //     reservation.propertyName &&
//   //     reservation.guestName &&
//   //     reservation.guestLastName &&
//   //     reservation.guestMail &&
//   //     reservation.guestPhone &&
//   //     // reservation.arrivalDate &&
//   //     // reservation.departureDate &&
//   //     reservation.guestsNumber

//   //   ) {
//   //     let data = new FormData();
//   //     data.append('propertyName', reservation.propertyName);
//   //     data.append('guestName', reservation.guestName);
//   //     data.append('guestLastName', reservation.guestLastName);
//   //     data.append('guestMail', reservation.guestMail);
//   //     data.append('guestPhone', reservation.guestPhone);
//   //     data.append('arrivalDate', reservation.arrivalDate);
//   //     data.append('departureDate', reservation.departureDate);
//   //     data.append('guestsNumber', reservation.guestsNumber);
//   //     data.append('totalPrice', reservation.totalPrice);
//   //     const config = {
//   //       headers: { 'content-type': 'multipart/form-data' },
//   //     };
//   //     axios
//   //       .post('http://localhost:3001/reservation', data, config)
//   //       .then((response) => {
//   //         const { status, data } = response;
//   //         if (status === 200 && data.status === 'Reservation created') {
//   //           setAllertReservation(true)
//   //         } else if (status === 200 && data.error === 'Mail already exists') {
//   //           setErrors('Mail già registrato con lo stesso nome.');
//   //         } else if (status === 200 && data.error === 'Phone already exists') {
//   //           setErrors('Phone già registrato con lo stesso nome.');
//   //         } else if (status === 200 && data.error === 'startDates already exists') {
//   //           setErrors('startDates già registrato con lo stesso nome.');
//   //         } else if (status === 200 && data.error === 'endDates already exists') {
//   //           setErrors('endDates già registrato con lo stesso nome.');
//   //         } else {
//   //           setErrors('Si è verificato un errore durante la Prenotazione')
//   //         }
//   //       })
//   //       .catch((error) => {
//   //         setErrors('Si è verificato un errore durante la Prenotazione')
//   //       })
//   //   } else {
//   //     setErrors('Compila tutti i dati')
//   //   }
//   // }







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
//             <h1 id="propertyName">{property.name}</h1>
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
//                   {/*
//                   <DatePicker
//                     selectsStart
//                     name="arrivalDate"
//                     placeholderText="Arrival"
//                     onChange={handleDateChange}
//                     dateFormat="MM/dd/yyyy"
//                   /> */}
//                   {/* <DatePicker
//                     selectsEnd
//                     name="departureDate"
//                     placeholderText="Departure"
//                     onChange={handleDateChange}
//                     dateFormat="MM/dd/yyyy"
//                   /> */}
//                   {/* <DatePicker
//                     selectsEnd
//                     onChange={handleDateChange}
//                     endDate={endDate}
//                     startDate={startDate}
//                     minDate={startDate}
//                     name="arrivalDate"
//                     placeholderText="Arrival"
//                     required
//                   /> */}
//                   <DatePicker
//                     selectsEnd
//                     onChange={handleArrivalDateChange}
//                     label="Arrival"
//                     minDate={startDate}
//                     name="arrivalDate"
//                     required
//                   />
//                   <DatePicker
//                     selectsEnd
//                     onChange={handleDepartureDateChange}
//                     startDate={startDate}
//                     endDate={endDate}
//                     minDate={startDate}

//                     name="departureDate"
//                     required
//                   />

//                   {/* <DatePicker
//                     selectsEnd
//                     onChange={handleDateChange}

//                     startDate={startDate}
//                     minDate={startDate}
//                     placeholderText="Departure"
//                     name="departureDate"
//                     required
//                   /> */}
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
//                       onChange={(value) => setFormState({ ...formState, guestsNumber: value })}
//                       data={Array.from({ length: property.maximumGuest }, (_, index) => ({
//                         value: index + 1,
//                         label: (index + 1).toString()
//                       }))}
//                     />
//                   </div>
//                   <input type="text" name="guestName" placeholder="Name" className="custom-input" required onChange={(e) => setFormState({
//                     ...formState,
//                     guestName: e.target.value
//                   })} />
//                   <input type="text" name="guestLastname" placeholder="Lastname" className="custom-input" required onChange={(e) => setFormState({
//                     ...formState,
//                     guestLastName: e.target.value
//                   })} />
//                   <input type="email" name="guestEmail" placeholder="Your Email" className="custom-input" required onChange={(e) => setFormState({
//                     ...formState,
//                     guestEmail: e.target.value
//                   })} />
//                   <input type="phone" name="guestPhone" placeholder="Phone" className="custom-input" onChange={(e) => setFormState({
//                     ...formState,
//                     guestPhone: e.target.value
//                   })} />
//                 </Col>
//                 <Row className="p-5">
//                   <h4>Total € <input name="totalPrice" onChange={(e) => setFormState({ ...formState, totalPrice: e.target.value })} value={nights * property.pricePerNight} /></h4>
//                   {/* {erros && <div className="text-danger mt-2">{erros}</div>} */}
//                   <Button
//                     onClick={formSubmittedHandler}
//                     // onClick={formHandlerReservation}
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
//             <MapContainer center={[latitude, longitude]} zoom={15} style={{ height: "400px", width: "100%" }} scrollWheelZoom={false}>
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
//     </MainLayout >
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

  // Costanti Relative ai property data
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/property/${id}`)
      .then((response) => setProperty(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Costanti Maps
  const latitude = property?.gpsPosition?.latitude;
  const longitude = property?.gpsPosition?.longitude;
  const greenOptions = { color: 'green', fillColor: 'green' };

  // Costanti Date Picker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [nights, setNights] = useState(1);

  const handleArrivalDateChange = (date) => {
    const formattedDate = date.toLocaleDateString('it-IT');
    setStartDate(date);
    updateNights(date, endDate);
  };

  const handleDepartureDateChange = (date) => {
    const formattedDate = date.toLocaleDateString('it-IT');
    setEndDate(date);
    updateNights(startDate, date);
  };

  const updateNights = (start, end) => {
    const arrival = start.getTime();
    const departure = end.getTime();

    if (arrival < departure) {
      const diffTime = Math.abs(departure - arrival);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
    } else {
      setNights(0);
    }
  };

  // Costanti relative a Reservation
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  const formHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmittedHandler = () => {
    const totalPrice = nights * property?.pricePerNight;
    const data = {
      propertyName: property?.name,
      guestName: formState.guestName,
      guestLastName: formState.guestLastName,
      guestMail: formState.guestEmail,
      guestPhone: formState.guestPhone,
      arrivalDate: startDate.toLocaleDateString('it-IT'),
      departureDate: endDate.toLocaleDateString('it-IT'),
      guestsNumber: formState.guestsNumber,
      totalPrice: totalPrice,
    };

    axios
      .post('http://localhost:3001/reservation', data)
      .then((response) => {
        navigate(`/property/${id}`);
        setShowAlert(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [showAlert, setShowAlert] = useState(false);
  // const hideAlert = () => {
  //   setShowAlert(false);
  // };

  return (
    <MainLayout>
      <Container fluid>
        <Row>
          <Col className="p-0">
            <img
              src={property?.coverImageUrl}
              alt={property?.name + " for rent"}
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
            <h1 id="propertyName">{property?.name}</h1>
            <p><strong>{property?.type} for rent in {property?.city}</strong></p>
            <p><FontAwesomeIcon icon={faUsers} />  {property?.maximumGuest} - <FontAwesomeIcon icon={faBed} /> {property?.bedrooms} - <FontAwesomeIcon icon={faBath} /> {property?.bathrooms}</p>
            <hr />
            <p>{property?.description}</p>
            <hr />
            <h3>Features:</h3>
            <ul>
              {property?.features && property.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </Col>
          <Col md={4} style={{ backgroundColor: "#4DADB1", clipPath: "polygon(0 0, 100% 3%, 100% 95%, 0 95%)", marginTop: "20px", marginBottom: "20pxS", textAlign: "center", zIndex: "0" }}>
            <Container className="p-5">
              <h5 className="mb-4">From €{property?.pricePerNight}/Night</h5>
              <Row>
                <Col md={6} className="ps-5">
                  <DatePicker
                    className="pe-0"
                    selected={startDate}
                    onChange={handleArrivalDateChange}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Arrival"
                    required
                  />
                </Col>
                <Col md={6} className="pe-5">
                  <DatePicker
                    className="pe-0"
                    selected={endDate}
                    onChange={handleDepartureDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Departure"
                    required
                  />
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
                      value={formState.guestsNumber}
                      onChange={(value) => setFormState((prevState) => ({ ...prevState, guestsNumber: value }))}
                      data={Array.from({ length: property?.maximumGuest }, (_, index) => ({
                        value: index + 1,
                        label: (index + 1).toString()
                      }))}
                    />
                  </div>
                  <input type="text" name="guestName" placeholder="Name" className="custom-input" required onChange={formHandler} />
                  <input type="text" name="guestLastName" placeholder="Lastname" className="custom-input" required onChange={formHandler} />
                  <input type="email" name="guestEmail" placeholder="Your Email" className="custom-input" required onChange={formHandler} />
                  <input type="phone" name="guestPhone" placeholder="Phone" className="custom-input" onChange={formHandler} />
                </Col>
                <Row className="p-5">
                  <h4>Total € {nights * property?.pricePerNight}</h4>
                  <Button
                    onClick={formSubmittedHandler}
                    style={{
                      maxWidth: "200px",
                    }}
                  >
                    Send Request
                  </Button>
                  {showAlert && (
                    <div className="alert alert-success mt-3" role="alert">
                      Prenotazione inviata con successo!
                    </div>
                  )}
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




