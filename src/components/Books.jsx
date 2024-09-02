
import React from 'react';

const booksData = {
    featured: [
        { id: 1, title: 'Atomic Habits', 
            author: 'James Clear', 
            price: '$19.99', 
            image: 'https://m.media-amazon.com/images/I/81F90H7hnML._AC_UF1000,1000_QL80_.jpg' 
        },
        { id: 2, title: 'IKIGAI', 
            author: 'Hector Garcia', 
            price: '$24.99', 
            image: 'https://images.penguinrandomhouse.com/cover/9780143130727' 
        },
        { id: 3, title: 'Infotech', 
            author: 'Achyut Godbole', 
            price: '$24.99', 
            image: 'https://m.media-amazon.com/images/I/81YbmMZ7OgL._AC_UF1000,1000_QL80_.jpg' 
        },
    ],
    newBooks: [
        { 
            id: 1, 
            title: 'The New Dawn', 
            author: 'Alice Johnson', price: '$14.99', 
            image: 'https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg' 
        },
        { 
            id: 2, 
            title: 'Tech Trends 2024', 
            author: 'Bob Lee', price: '$29.99', 
            image: 'https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg' 
        },
        {
            id:3,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: "$15.99",
            image: "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg", 
          },
          {
            id:4,
            title: "How to Talk With Anyone",
            author: "F. Scott Fitzgerald",
            price: "$15.99",
            image: "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg",
          },
          {
            id:5,
            title: "Hamlet",
            author: "F. Scott Fitzgerald",
            price: "$15.99",
            image: "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg", 
          },
          {
            id:6,
            title: "The Stranger",
            author: "F. Scott Fitzgerald",
            price: "$15.99",
            image: "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg",
          },
          {
            id:7,
            title: "Darkmans",
            author: "F. Scott Fitzgerald",
            price: "$15.99",
            image: "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg", 
          },
    ],
    oldBooks: [
        { 
            id: 1, title: 'Classic Literature', 
            author: 'Emily Brontë', 
            price: '$9.99', 
            image: 'https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg' 
        },
        { 
            id: 2, 
            title: 'Ancient Wisdom', 
            author: 'Plato', 
            price: '$12.99', 
            image: 'https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg' 
        },
        {
            id:3,
            title: "Light",
            author: "F. Scott Fitzgerald",
            price: "$15.99",
            image: "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg", 
          },
          {
            id:4,
            title: "Tell Me How It Ends",
            author: "F. Scott Fitzgerald",
            price: "$15.99",
            image: "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg",
          },
          {
            id:5,
            title: "One Day",
            author: "F. Scott Fitzgerald",
            price: "$15.99",
            image: "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg", 
          },
          {
            id:6,
            title: "Northern Lights",
            author: "F. Scott Fitzgerald",
            price: "$15.99",
            image: "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg", 
          },
          {
            id:7,
            title: "Wonder",
            author: "F. Scott Fitzgerald",
            price: "$15.99",
            image: "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg", 
          },
          {
            id:8,
            title: "Empty World",
            author: "F. Scott Fitzgerald",
            price: "$15.99",
            image: "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg", 
          }
    ],
};

const Books = ({ searchQuery }) => {
    const filterBooks = (books) =>
        books.filter(
            ({ title, author }) =>
                title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                author.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <div name='Books' className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <h1 className='text-4xl font-bold mb-5 text-center'>Books</h1>

            {/* Featured Books */}
            <section className='mb-8 flex justify-center'>
                <div className='w-full md:w-3/4 lg:w-2/3'>
                    <h2 className='text-3xl font-semibold mb-4 text-center'>Featured Books</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {filterBooks(booksData.featured).map(({ id, title, author, price, image }) => (
                            <div
                                key={id}
                                className='p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300'
                            >
                                <img
                                    src={image}
                                    className='w-full h-70 object-cover object-center mb-4 rounded'
                                    alt={title}
                                />
                                <div>
                                    <div className='font-bold text-xl mb-2'>{title}</div>
                                    <div className='text-gray-700'>{author}</div>
                                    <div className='text-gray-700'>{price}</div>
                                </div>
                                <div className='flex justify-between space-x-4 mt-4'>
                                    <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
                                        Add to Cart
                                    </button>
                                    <button className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Books */}
            <section className='mb-8'>
                <h2 className='text-3xl font-semibold mb-4 text-center'>New Books</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {filterBooks(booksData.newBooks).map(({ id, title, author, price, image }) => (
                        <div
                            key={id}
                            className='p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300'
                        >
                            <img
                                src={image}
                                className='w-full h-64 object-cover object-center mb-4 rounded'
                                alt={title}
                            />
                            <div>
                                <div className='font-bold text-xl mb-2'>{title}</div>
                                <div className='text-gray-700'>{author}</div>
                                <div className='text-gray-700'>{price}</div>
                            </div>
                            <div className='flex justify-between space-x-4 mt-4'>
                                <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
                                    Add to Cart
                                </button>
                                <button className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Old Books */}
            <section className='mb-8'>
                <h2 className='text-3xl font-semibold mb-4 text-center'>Old Books</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {filterBooks(booksData.oldBooks).map(({ id, title, author, price, image }) => (
                        <div
                            key={id}
                            className='p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300'
                        >
                            <img
                                src={image}
                                className='w-full h-64 object-cover object-center mb-4 rounded'
                                alt={title}
                            />
                            <div>
                                <div className='font-bold text-xl mb-2'>{title}</div>
                                <div className='text-gray-700'>{author}</div>
                                <div className='text-gray-700'>{price}</div>
                            </div>
                            <div className='flex justify-between space-x-4 mt-4'>
                                <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
                                    Add to Cart
                                </button>
                                <button className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Books;
