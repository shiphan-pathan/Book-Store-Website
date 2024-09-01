import React from 'react';

const Contact = () => {
  return (
    <div name="Contact" className="max-w-screen-md mx-auto px-4 md:px-20 my-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-2xl font-semibold text-gray-700">
          We'd love to hear from you! Whether you have a question about our books, events, or just want to say hello, feel free to reach out.
        </p>
      </div>

      <form className="bg-white p-8 shadow-lg rounded-lg">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" name="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name" required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email" id="email" name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email" required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message" rows="5" required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </div>
      </form>
      
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <p className="text-lg text-gray-700 mb-2">123 Book Street, Reading City, 12345</p>
        <p className="text-lg text-gray-700 mb-2">Phone: (123) 456-7890</p>
        <p className="text-lg text-gray-700">Email: contact@bookhaven.com</p>
      </div>
    </div>
  );
};

export default Contact;
