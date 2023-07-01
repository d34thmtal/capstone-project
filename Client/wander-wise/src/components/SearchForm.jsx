// import React, { useState } from 'react';
// import { Button, Form, Row, Col } from 'react-bootstrap';

// const SearchForm = () => {
//     const [location, setLocation] = useState('');
//     const [guests, setGuests] = useState(1);

//     const handleLocationChange = (e) => {
//         setLocation(e.target.value);
//     };

//     const handleGuestsChange = (e) => {
//         setGuests(parseInt(e.target.value));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();



//         console.log('Località:', location);
//         console.log('Ospiti:', guests);
//     };

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Row className="align-items-end">
//                 <Col lg={6} md={12} sm={12}>
//                     <Form.Group>
//                         <Form.Label>Località</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Inserisci una località"
//                             value={location}
//                             onChange={handleLocationChange}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col lg={3} md={6} sm={6}>
//                     <Form.Group>
//                         <Form.Label>Ospiti</Form.Label>
//                         <Form.Control
//                             as="select"
//                             value={guests}
//                             onChange={handleGuestsChange}
//                         >
//                             {[...Array(8)].map((_, index) => (
//                                 <option key={index + 1} value={index + 1}>
//                                     {index + 1}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Col>
//                 <Col lg={3} md={6} sm={6} className="text-md-end">
//                     <Button variant="primary" type="submit">
//                         Trova
//                     </Button>
//                 </Col>
//             </Row>
//         </Form>
//     );
// };

// export default SearchForm;

import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Autocomplete, Select } from "@mantine/core";
import { IoSearch } from "react-icons/io5";

const SearchForm = () => {
    const [location, setLocation] = useState('');
    const [guests, setGuests] = useState(1);

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleGuestsChange = (e) => {
        setGuests(parseInt(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Località:', location);
        console.log('Ospiti:', guests);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="align-items-end">
                <Col lg={6} md={12} sm={12}>
                    <div className="w-3/12 h-full">
                        <Autocomplete
                            placeholder="Where"
                            data={["Stintino", "Alghero", "Sassari", "Roma"]}
                            className="w-full h-full"
                            classNames={{
                                icon: "p-3",
                                input:
                                    "border-white rounded-lg focus:border-black rounded-r-none rounded-l-none h-full",
                            }}
                            icon={<IoSearch />}
                            size="lg"
                        />
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <div className="w/2/12">
                        <Select
                            size="lg"
                            placeholder="Guests"
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
                </Col>
                <Col lg={3} md={6} sm={6} className="text-md-end">
                    <Button variant="primary btn-lg" type="submit" style={{ backgroundColor: '#4DADB1', color: 'white' }}>
                        Discover More!
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchForm;

