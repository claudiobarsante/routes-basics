import { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Products = () => {
	const [products, setProducts] = useState();

	useEffect(() => {
		async function getAll() {
			const response = await axios.get('https://fakestoreapi.com/products');
			setProducts(response.data);
		}
		getAll();
	}, []);

	return (
		<div>
			<p>Products</p>
			<ul className='ul-decoration'>
				{products &&
					products.map(product => (
						<li key={product.id}>
							<Link to={`/details/${product.id}`}>{product.title}</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Products;
