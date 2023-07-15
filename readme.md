Stack MERN -> MongoDB - ExpressJS - ReactJS - NodeJS

NodeJS -> https://nodejs.org/
ExpressJS -> https://expressjs.com/
MongooseJS -> https://mongoosejs.com/
Cors -> https://github.com/expressjs/cors -> https://expressjs.com/en/resources/middleware/cors.html
MongoDB -> https://www.mongodb.com/
Multer -> https://expressjs.com/en/resources/middleware/multer.html
Cloudinary -> https://cloudinary.com/
CoudinaryMulterStorege -> https://www.npmjs.com/package/multer-storage-cloudinary
SendGrid -> https://sendgrid.com/
dotenv -> https://www.npmjs.com/package/dotenv
node.bcript -> https://www.npmjs.com/package/bcrypt -> https://github.com/kelektiv/node.bcrypt.js
JWT Token -> https://jwt.io/ -> https://www.npmjs.com/package/jsonwebtoken
Nodemon -> https://www.npmjs.com/package/nodemon
JWT-DECODE -> https://www.npmjs.com/package/jwt-decode -> lato Client!!!!


-> npm init -y
-> npm install express --save
-> npm install mongoose --save
-> npm install cors
-> npm install --save multer
-> npm install cloudinary
-> npm install multer-storage-cloudinary
-> npm install --save @sendgrid/mail
-> npm install dotenv --save
-> npm install bcrypt
-> npm install jsonwebtoken
-> npm install nodemon --save-dev
-> npm install jwt-decode -> Da utilizzare sia lato server che lato client. Di solito si usa solo lato client
-> npm install passport 
-> npm install passport-facebook
-> npm install passport-google-oidc
-> npm install passport-twitter



// Facebook Login
- Vai su Facebook Developer e accedi utilizzando le tue credenziali di Facebook.
- https://developers.facebook.com/
- Seleziona Le mie app
- Fai clic su Aggiungi una nuova app 
- Configura Facebook Login
- Immettere il nome visualizzato e l'e-mail di contatto
- Fai clic su Prodotti nella barra laterale poi Facebook Login -> configura -> Impostazioni. 
- Attiva l'accesso OAuth del client. Attiva l'accesso Web OAuth. Inserisci l'URL di reindirizzamento valido in "Valid OAuth redirect URIs" . Fare clic sul pulsante Salva.
- Visita le tue developer settings per aggiornare i dati ed inserire un documento valido
- Fai clic su Di base sotto le impostazioni nella barra laterale.



router.put('/property/:id', upload.single('coverImageUrl'), async (req, res, next) => {
    const data = req.file ? req.file.path : '';

    try {
        const updatedProperty = await property.findByIdAndUpdate(
            req.params.id,
            { ...req.body, coverImageUrl: data },
            { new: true }
        );

        res.json(updatedProperty);
    } catch (err) {
        next(err);
    }
});



AddPropertyPage

import React, { useState, createRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import { Button, Form, Alert } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import './AdminPageAddProperty.css';

export default function AdminPageAddProperty() {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate();
    const [file, setFile] = useState(null)
    const img = createRef();
    // const [property, setProperty] = useState({
    const [property, setProperty] = useState({
        features: {},
        gpsPosition: {
            latitude: 0,
            longitude: 0
        }
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const formHandler = (event) => {
        const { name, value, type, checked } = event.target;

        if (name === 'latitude' || name === 'longitude') {
            setProperty((prevCoordinate) => ({
                ...prevCoordinate,
                gpsPosition: {
                    ...prevCoordinate.gpsPosition,
                    [name]: parseFloat(value) // Convert the value to a number
                }
            }));
        } else if (type === 'checkbox') {
            setProperty((prevCoordinate) => ({
                ...prevCoordinate,
                features: {
                    ...prevCoordinate.features,
                    [value]: checked
                }
            }));
        } else {
            setProperty((prevCoordinate) => ({
                ...prevCoordinate,
                [name]: value
            }));
        }
    };

    const formSubmittedHandler = async () => {
        // Create a new FormData object
        let data = new FormData();


        data.append('name', property.name);
        data.append('city', property.city);
        data.append('maximumGuest', property.maximumGuest);
        data.append('bedrooms', property.bedrooms);
        data.append('bathrooms', property.bathrooms);
        data.append('description', property.description);
        data.append('type', property.type);

        const featuresArray = Object.entries(property.features)
            .filter(([key, value]) => value)
            .map(([key]) => key);

        featuresArray.forEach((feature, index) => {
            data.append(`features[${index}]`, feature);
        });

        data.append('pricePerNight', property.pricePerNight);
        data.append('gpsPosition[latitude]', property.gpsPosition.latitude);
        data.append('gpsPosition[longitude]', property.gpsPosition.longitude);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        axios
            .post('http://localhost:3001/property', data, config)
            .then((response) => {
                setSuccessMessage('Property added successfully!');
                setErrorMessage('');
            })
            .catch((error) => {
                console.log(error);
                setSuccessMessage('');
                setErrorMessage('Failed to add property. Please try again.');

            });

    };

    const handleChangeFiles = (e) => {
        setFile(e.target.files[0]);
    }

    const upLoadFile = async (file) => {
        const fileData = new FormData()
        fileData.append("coverImageUrl", file)
        try {
            const response = await axios.post('http://localhost:3001/property', fileData)
        } catch (error) {
            console.log(error)
        }
    }

    const submitPost = async (e) => {
        e.preventDefault()

        if (file) {
            try {
                const uploadedFile = await uploadFile(file) // aspettiamo che il file sia stato uploadato
                const postFormData = {
                    ...formData,
                    PROPRIETA: uploadedFile.coverImgUrl
                }
                axios.post('ENDPOINT DEL POST', postFormData)
            } catch (error) {
                console.error('Failed to save the post', error)
            }
        } else {
            console.error('Please select at least one file')
        }
    }


    return (
        <AdminLayout>
            <div className="form-container">
                <h2>Add Property</h2>
                {successMessage && <Alert variant="success">{successMessage}</Alert>}
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                <Form onSubmit={formSubmittedHandler} encType='multipart/form-data'>
                    <Form.Group controlId="name">
                        <Form.Label>Property Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={(e) => setFormData({
                            ...formData,
                            NOMEPROPRIETA: e.target.value
                        })} required />
                    </Form.Group>
                    <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="city" onChange={(e) => setFormData({
                            ...formData,
                            NOMEPROPRIETA: e.target.value
                        })} required />
                    </Form.Group>
                    <Form.Group controlId="maximumGuest">
                        <Form.Label>Max Guest</Form.Label>
                        <Form.Control type="number" name="maximumGuest" onChange={(e) => setFormData({
                            ...formData,
                            NOMEPROPRIETA: e.target.value
                        })} required />
                    </Form.Group>
                    <Form.Group controlId="bedrooms">
                        <Form.Label>Bedrooms</Form.Label>
                        <Form.Control type="number" name="bedrooms" onChange={(e) => setFormData({
                            ...formData, 
                            NOMEPROPRIETA: e.target.value
                        })} required />
                    </Form.Group>
                    <Form.Group controlId="bathrooms">
                        <Form.Label>Bathrooms</Form.Label>
                        <Form.Control type="number" name="bathrooms" onChange={(e) => setFormData({
                            ...formData,
                            NOMEPROPRIETA: e.target.value
                        })} required />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" onChange={(e) => setFormData({
                            ...formData,
                            NOMEPROPRIETA: e.target.value
                        })} required />
                    </Form.Group>
                    <Form.Group controlId="type">
                        {/* <Form.Label>Type</Form.Label>
                        <Form.Control type="text" name="type" onChange={formHandler} required /> */}
                        <Form.Select name="type" onChange={(e) => setFormData({
                            ...formData,
                            NOMEPROPRIETA: e.target.value
                        })} aria-label="Default select example">
                            <option>Choose a type</option>
                            <option value="Villa">Villa</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Chalet">Chalet</option>
                            <option value="Cabin">Cabin</option>
                            <option value="Cottage">Cottage</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="latitude">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control
                            type="text"
                            name="latitude"
                            onChange={(e) => setFormData({
                                ...formData,
                                NOMEPROPRIETA: e.target.value
                            })}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="longitude">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control
                            type="text"
                            name="longitude"
                            onChange={(e) => setFormData({
                                ...formData,
                                NOMEPROPRIETA: e.target.value
                            })}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="pricePerNight">
                        <Form.Label>Price/Night</Form.Label>
                        <Form.Control type="number" name="pricePerNight" onChange={(e) => setFormData({
                            ...formData,
                            NOMEPROPRIETA: e.target.value
                        })} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFile">
                        <Form.Control type="file" name="img" placeholder="Enter Image" onChange={(e) => setFormData({
                            ...formData,
                            NOMEPROPRIETA: e.target.value
                        })} />
                    </Form.Group>
                    <Form.Group controlId="features">
                        <Row>
                            <Col md={6}>
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="private-pool"
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            NOMEPROPRIETA: e.target.value
                                        })}
                                        value="private pool"
                                    />
                                    <label className="custom-control-label" htmlFor="private-pool">
                                        private pool
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="jacuzzi"
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            NOMEPROPRIETA: e.target.value
                                        })}
                                        value="jacuzzi"
                                    />
                                    <label className="custom-control-label" htmlFor="jacuzzi">
                                        jacuzzi
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="for-families"
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            NOMEPROPRIETA: e.target.value
                                        })}
                                        value="for families"
                                    />
                                    <label className="custom-control-label" htmlFor="for-families">
                                        for families
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="near-the-sea"
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            NOMEPROPRIETA: e.target.value
                                        })}
                                        value="near the sea"
                                    />
                                    <label className="custom-control-label" htmlFor="near-the-sea">
                                        near the sea
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="air-conditioning"
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            NOMEPROPRIETA: e.target.value
                                        })}
                                        value="air conditioning"
                                    />
                                    <label className="custom-control-label" htmlFor="air-conditioning">
                                        air conditioning
                                    </label>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="gym"
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            NOMEPROPRIETA: e.target.value
                                        })}
                                        value="gym"
                                    />
                                    <label className="custom-control-label" htmlFor="gym">
                                        gym
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="panoramic-view"
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            NOMEPROPRIETA: e.target.value
                                        })}
                                        value="panoramic view"
                                    />
                                    <label className="custom-control-label" htmlFor="panoramic-view">
                                        panoramic view
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="spacious-terrace"
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            NOMEPROPRIETA: e.target.value
                                        })}
                                        value="spacious terrace"
                                    />
                                    <label className="custom-control-label" htmlFor="spacious-terrace">
                                        spacious terrace
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="private-chef"
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            NOMEPROPRIETA: e.target.value
                                        })}
                                        value="private chef"
                                    />
                                    <label className="custom-control-label" htmlFor="private-chef">
                                        private chef
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline custom-checkbox-small">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="garden"
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            NOMEPROPRIETA: e.target.value
                                        })}
                                        value="garden"
                                    />
                                    <label className="custom-control-label" htmlFor="garden">
                                        garden
                                    </label>
                                </div>
                            </Col>
                        </Row>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formButton">
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </AdminLayout>
    );
};


// da EPICODE a tutti:    8:42 PM
// const [formData, setFormData] = useState({})
// da EPICODE a tutti:    8:42 PM
onChange = {(e) => setFormData({
    ...formData,
    NOMEPROPRIETA: e.target.value
})}