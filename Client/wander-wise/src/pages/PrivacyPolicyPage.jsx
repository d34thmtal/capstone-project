import React from "react";
import { Container } from 'react-bootstrap';
import MainLayout from "../layout/MainLayout";

export default function PrivacyPolicyPage() {
    return (
        <MainLayout>
            <Container>
                <h2>Privacy Policy</h2>
                <p>Thank you for visiting the Wander Wise website. Your privacy is important to us, and we are committed to protecting the information you provide to us. This Privacy Policy explains how we collect, use, and safeguard your personal data. By using our website, you consent to the practices described in this policy.</p>

                <h3>Information We Collect</h3>
                <p>When you use our website, we may collect certain personally identifiable information, including but not limited to your name, email address, phone number, and billing details. We may also collect non-personally identifiable information such as your IP address, browser type, and device information. This information is collected to improve our services, provide personalized experiences, and ensure the security of our platform.</p>

                <h3>How We Use Your Information</h3>
                <p>We may use the information we collect for various purposes, including:</p>
                <ul>
                    <li>Processing and confirming your bookings</li>
                    <li>Providing customer support and assistance</li>
                    <li>Sending you updates, newsletters, and promotional materials</li>
                    <li>Conducting market research and analysis</li>
                    <li>Enhancing and personalizing your experience on our website</li>
                    <li>Improving our services and preventing fraudulent activities</li>
                </ul>

                <h3>Data Security</h3>
                <p>We take the security of your personal information seriously and implement appropriate measures to protect it from unauthorized access, disclosure, alteration, or destruction. We use industry-standard security protocols, including encryption, firewalls, and secure server infrastructure, to safeguard your data.</p>

                <h3>Third-Party Disclosure</h3>
                <p>We may share your information with trusted third parties who assist us in operating our website, conducting our business, or providing services to you. These third parties have agreed to keep your information confidential and secure. We do not sell, trade, or otherwise transfer your personal data to outside parties without your consent, except as required by law or as necessary to fulfill our contractual obligations.</p>

                <h3>Third-Party Links</h3>
                <p>Our website may contain links to third-party websites or services that are not operated or controlled by Wander Wise. We are not responsible for the privacy practices or content of these third-party sites. We recommend reviewing the privacy policies of those websites before providing any personal information.</p>

                <h3>Changes to this Privacy Policy</h3>
                <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective upon posting the revised policy on this page. We encourage you to review this policy periodically for any updates.</p>

                <h3>Contact Us</h3>
                <p>If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us at privacy@wanderwise.com.</p>
            </Container>
        </MainLayout>
    );
}


