import React from 'react'
import book1 from './images/src1.png'

const BookList = () => {
    return (
      <section className='booklist'>
        <Book/>
        <Book/>
        <Book/>
      </section>
    );
};
 
const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
};

const Image = () => (
    <img 
      src={book1}
      alt='Tenth of December'
    />
);

const Title = () => <h2>Data Structures and Algorithms Made Easy </h2>;

const Author = () => {
    return <h4>Narasimha Karumanchi  </h4>;
};

export default BookList