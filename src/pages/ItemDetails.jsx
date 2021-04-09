import { useEffect, useState } from 'react';
import axios from 'axios';
const ItemDetails = ({ match }) => {
	console.log('match ', match);
	const [product, setProduct] = useState();
	const productId = match.params.id;
	const [isLoading, setIsLoading] = useState();

	useEffect(() => {
		async function getProductById(id) {
			setIsLoading(true);
			try {
				const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
				setProduct(response.data);
			} catch (error) {
				console.log('error ', error);
			}
			setIsLoading(false);
		}

		getProductById(productId);
	}, [productId]);

	if (isLoading) {
		console.log('loanding ');
	}
	console.log(isLoading);

	return (
		<div>
			<div>{isLoading && <h1>Is loading...</h1>}</div>
			<div>
				{product && !isLoading && (
					<div>
						<strong>{product.title}</strong>
						<img height='200px' src={product.image} alt={product.title} />
						<p>{product.description}</p>
						<strong>{product.price}</strong>
					</div>
				)}
			</div>
		</div>
	);
};

export default ItemDetails;
