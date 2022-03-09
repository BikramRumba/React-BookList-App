import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
	const { disptach } = useContext(BookContext);

	return (
		<li onClick={() => disptach({ type: 'REMOVE_BOOK', id: book.id })}>
			<div className='title'>{book.title}</div>
			<div className='author'>{book.author}</div>
		</li>
	);
};

export default BookDetails;
