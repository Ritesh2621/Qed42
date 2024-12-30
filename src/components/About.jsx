import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h1 className="text-4xl font-bold text-blue-500 text-center mb-6">
          About MyStore
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Welcome to MyStore! Your one-stop shop for all your needs. We are
          committed to providing high-quality products, exceptional customer
          service, and a seamless shopping experience.
        </p>
        
    
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At MyStore, our mission is to make shopping convenient and
            enjoyable for everyone. We strive to offer a wide range of products
            that cater to your diverse needs and preferences, ensuring that
            quality and affordability go hand in hand.
          </p>
        </div>
        
     
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
            <li>
              <span className="font-semibold">Customer First:</span> Your
              satisfaction is our priority.
            </li>
            <li>
              <span className="font-semibold">Quality Assurance:</span> We
              deliver only the best products.
            </li>
            <li>
              <span className="font-semibold">Innovation:</span> Continuously
              improving to provide a seamless shopping experience.
            </li>
            <li>
              <span className="font-semibold">Sustainability:</span> Promoting
              eco-friendly practices in our operations.
            </li>
          </ul>
        </div>
        

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            MyStore is more than just a store; it's a community where your
            shopping needs are met with care and excellence. From groceries to
            beauty products, furniture, and fragrances, we've got it all. Our
            dedicated team works tirelessly to ensure you have the best
            shopping experience possible.
          </p>
        </div>
        
    
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Join Our Journey
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Thank you for choosing MyStore. We are excited to have you as part
            of our growing family. Let's create a better shopping experience,
            together!
          </p>
          <Link to="/" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
