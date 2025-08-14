import React from 'react';

const AboutPage = () => {
    return (
        <div className="page-container about-page">
            <h1 className="about-title">About Us - UCSC Student Management System</h1>
            <section className="about-section mission-section">
                <h2 className="about-heading">Our Mission</h2>
                <p className="about-text">
                    The University of Colombo School of Computing (UCSC) is dedicated to providing world-class education and research in computing and information technology. Our Student Management System streamlines academic and administrative processes, ensuring a seamless experience for students and staff.
                </p>
            </section>
            <section className="about-section who-section">
                <h2 className="about-heading">Who We Are</h2>
                <p className="about-text">
                    UCSC is a leading institution in Sri Lanka, fostering innovation, collaboration, and excellence in computing. Our team is committed to supporting students throughout their academic journey.
                </p>
            </section>
            <section className="about-section contact-section">
                <h2 className="about-heading">Contact Us</h2>
                <p className="about-text">
                    For inquiries or support, please contact us at <a href="mailto:info@ucsc.cmb.ac.lk">info@ucsc.cmb.ac.lk</a> or visit our <a href="https://ucsc.cmb.ac.lk/">website</a>.
                </p>
            </section>
        </div>
    );
};

export default AboutPage;