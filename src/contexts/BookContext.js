import { createContext, useEffect, useReducer } from 'react';

import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, dispatch] = useReducer(BookReducer, [], () => {
		/* By calling useEffect we just setItem when component mounted. It won't store 
        the data and localStorgae. SO, we passing function as an argument in useReducer
        by using getItem(key) methods. where key is books and valye is an array or state holding data */
		const localData = localStorage.getItem('books');
		return localData ? JSON.parse(localData) : [];
	});

	// using useEffect to render the bookform component. we are storing the key and value in local storage
	// JSON. stringify() method converts a JavaScript object or value to a JSON string,
	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books));
	}, [books]);
	return (
		<BookContext.Provider value={{ books, dispatch }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
