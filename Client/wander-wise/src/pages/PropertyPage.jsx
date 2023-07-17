import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Spinner, } from "react-bootstrap";
import { faUsers, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import MainLayout from "../layout/MainLayout";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Select } from "@mantine/core";
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import './PropertyPage.css';

export default function PropertyPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [nights, setNights] = useState(1);
  const [formState, setFormState] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3001/property/${id}`)
      .then((response) => {
        setProperty(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

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

  const formHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmittedHandler = () => {
    if (!formState.guestsNumber || !formState.guestName || !formState.guestLastName || !formState.guestEmail || !formState.guestPhone) {
      alert("Please complete all the fields properly!");
      return;
    }

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
        alert(error + "Please complete all the fields properly!");
      });
  };

  const latitude = property?.gpsPosition?.latitude;
  const longitude = property?.gpsPosition?.longitude;
  const greenOptions = { color: 'green', fillColor: 'green' };

  if (loading) {
    return (
      <MainLayout>
        <Container className="d-flex align-items-center justify-content-center vh-100">
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      </MainLayout>
    );
  }

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
                maxHeight: "750px",
                objectFit: "cover",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 88%)"
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={9} className="px-5">
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
          <Col className="px-5 d-flex justify-content-center" md={3} style={{ backgroundColor: "#4DADB1", clipPath: "polygon(0 0, 100% 3%, 100% 95%, 0 95%)", marginTop: "20px", marginBottom: "20px", textAlign: "center", zIndex: "0" }}>
            <Container className="px-2 py-5 d-flex flex-column align-items-center justify-content-center">
              <h5 className="mb-4">From €{property?.pricePerNight}/Night</h5>
              <div className="d-flex flex-column justify-content-center">
                <Row className="mb-3">
                  <Col xs={12} md={12} className="ps-3 pe-3 ">
                    <DatePicker
                      style={{ width: "100%", zIndex: "1" }}
                      className="ps-3 custom-datepicker input-request"
                      selected={startDate}
                      onChange={handleArrivalDateChange}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Arrival"
                      required
                      popperPlacement="bottom"
                      popperModifiers={[
                        {
                          name: 'flip',
                          enabled: false,
                        },
                        {
                          name: 'preventOverflow',
                          options: {
                            altAxis: true,
                            tether: false,
                          },
                        },
                      ]}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs={12} md={12} className="ps-3 pe-3">
                    <DatePicker
                      style={{ width: "100%", zIndex: "1" }}
                      className="ps-3 custom-datepicker custom-input"
                      selected={endDate}
                      onChange={handleDepartureDateChange}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Departure"
                      required
                      popperPlacement="bottom"
                      popperModifiers={[
                        {
                          name: 'flip',
                          enabled: false,
                        },
                        {
                          name: 'preventOverflow',
                          options: {
                            altAxis: true,
                            tether: false,
                          },
                        },
                      ]}
                    />
                  </Col>
                </Row>
                <Row className="mb-3 d-flex justify-content-center">
                  <Col xs={12} md={12} className="d-flex justify-content-center" style={{ maxWidth: "250px", zIndex: "0" }}>
                    {/* <div className="custom-select-container d-flex justify-content-center"> */}
                    <Select
                      // style={{ zIndex: "5" }}
                      size="lg"
                      name="guestsNumber"
                      placeholder="Guests"
                      className="custom-input guest-list "
                      clearable
                      required
                      value={formState.guestsNumber}
                      onChange={(value) => setFormState((prevState) => ({ ...prevState, guestsNumber: value }))}
                      data={Array.from({ length: property?.maximumGuest }, (_, index) => ({
                        value: index + 1,
                        label: (index + 1).toString()
                      }))}
                    />
                    {/* </div> */}
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs={12} className="ps-3 pe-3">
                    <input type="text" name="guestName" placeholder="Name" className="custom-input" required onChange={formHandler} />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs={12} className="ps-3 pe-3">
                    <input type="text" name="guestLastName" placeholder="Lastname" className="custom-input" required onChange={formHandler} />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs={12} className="ps-3 pe-3">
                    <input type="email" name="guestEmail" placeholder="Your Email" className="custom-input" required onChange={formHandler} />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs={12} className="ps-3 pe-3">
                    <input type="tel" name="guestPhone" placeholder="Phone" className="custom-input" required onChange={formHandler} />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={12}>
                    <h4 className="total-price">Total € {nights * property?.pricePerNight}</h4>
                  </Col>
                  <Col xs={12}>
                    <Button
                      onClick={formSubmittedHandler}
                      style={{
                        maxWidth: "200px",
                      }}
                    >
                      Send Request
                    </Button>
                  </Col>
                  {showAlert && (
                    <Col xs={12}>
                      <div className="alert alert-success mt-3" role="alert">
                        Thank you for your booking request!
                      </div>
                    </Col>
                  )}
                </Row>
              </div>
            </Container>
          </Col>
        </Row>

        {latitude && longitude && (
          <Row>
            <Col>
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
            </Col>
          </Row>
        )}
      </Container>
    </MainLayout >
  );
}