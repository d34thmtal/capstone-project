import React from 'react'
import { Col, Container } from 'react-bootstrap'
import MainLayout from '../layout/MainLayout'
import AboutImage from '../assets/about.jpg'

export default function AboutUsPage() {
    return (
        <MainLayout>
            <Container>
                <Col>
                    <img src={AboutImage} alt="About Wander Wise" className="w-100" style={{ maxHeight: "400px", objectFit: "cover" }} />
                </Col>
                <h2>About Us</h2>
                <p>Welcome to Wander Wise, your premier destination for vacation home rentals in the beautiful island of Sardinia. We are passionate about providing exceptional experiences and unforgettable stays for travelers seeking a unique and authentic getaway.</p>
                <p>At Wander Wise, we understand the importance of finding the perfect accommodation that suits your needs and preferences. That's why we handpick a wide selection of stunning vacation homes in Sardinia, ranging from cozy seaside villas to luxurious countryside retreats.</p>
                <p>Our dedicated team is committed to ensuring your vacation exceeds all expectations. From personalized customer service to expert local recommendations, we are here to assist you every step of the way. Whether you're planning a family vacation, a romantic escape, or an adventure-filled trip with friends, we have the ideal home for you.</p>
                <p>Discover the breathtaking beauty of Sardinia, with its crystal-clear turquoise waters, white sandy beaches, and captivating cultural heritage. Immerse yourself in the charm of ancient towns, indulge in mouthwatering cuisine, and embark on unforgettable outdoor adventures.</p>
                <p>Book your dream vacation home with Wander Wise and let us help you create memories that will last a lifetime. Experience the magic of Sardinia with confidence and convenience, knowing that our team is dedicated to providing exceptional service and ensuring your stay is nothing short of extraordinary.</p>
            </Container>
        </MainLayout>

    )
}
