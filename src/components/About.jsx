
import React from 'react';

const testimonials = [
  {
    name: "Jane Doe",
    quote: "This bookstore has an amazing selection of books. I found exactly what I was looking for and more!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    quote: "A fantastic place for book lovers! The staff is knowledgeable and always ready to help.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Johnson",
    quote: "I love the cozy atmosphere and the diverse range of books available. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const About = () => {
  return (
    <div name="About" className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-12">
          Welcome to Book Haven, your ultimate destination for all things literary.
          We are passionate about books and committed to bringing you a diverse selection
          of titles across genres, eras, and interests. Whether you’re a seasoned reader or
          just beginning your literary journey, we have something special for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-md text-gray-700">
            At Book Haven, our mission is to foster a love for reading by providing an
            extensive collection of books that inspire, educate, and entertain. We believe
            in the power of stories to transform lives and strive to create a welcoming
            space for book lovers of all ages and backgrounds.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <p className="text-md text-gray-700">
            Our store offers a wide range of books including bestsellers, classics,
            non-fiction, children’s books, and more. In addition to our vast collection,
            we also host author events, book clubs, and reading challenges to bring
            the community together and celebrate the joy of reading.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-md text-gray-700">
            Book Haven started as a small, family-owned bookstore and has grown into a
            beloved community hub for readers and writers alike. Our journey began with
            a passion for sharing the magic of books, and today, we continue that legacy
            by offering a curated selection of titles and exceptional customer service.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
          <p className="text-md text-gray-700">
            Whether you’re looking for your next great read or want to connect with fellow
            book enthusiasts, we invite you to visit Book Haven. Join our mailing list to
            stay updated on the latest releases, upcoming events, and special promotions.
            We look forward to sharing our love of books with you.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <blockquote className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</blockquote>
              <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

