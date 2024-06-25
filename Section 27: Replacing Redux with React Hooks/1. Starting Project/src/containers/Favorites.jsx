import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

const Favorites = () => {
	const productList = useSelector((state) => state.shop.products);
	const favoriteProducts = useMemo(() => {
		return productList.filter((p) => p.isFavorite);
	}, [productList]);
	let content = <p className='placeholder'>Got no favorites yet!</p>;
	if (favoriteProducts.length > 0) {
		content = (
			<ul className='products-list'>
				{favoriteProducts.map((prod) => (
					<FavoriteItem
						key={prod.id}
						id={prod.id}
						title={prod.title}
						description={prod.description}
					/>
				))}
			</ul>
		);
	}
	return content;
};

export default Favorites;
