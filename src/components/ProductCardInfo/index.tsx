import React from 'react';
import { observer } from 'mobx-react';

// style
import styles from './styles.module.scss';

interface Props {
	name: string;
	desc: string;
	price: string;
	oldPrice: string;
}

const ProductCardInfo: React.FC<Props> = observer(
	({ name, desc, price, oldPrice }) => {
		return (
			<div className={styles.cardInfoContainer}>
				<div>
					<h4 className={styles.nameText}>{name}</h4>
					<p className={styles.descText}>{desc}</p>
				</div>

				<div className={styles.priceContainer}>
					<h4 className={styles.priceText}>{price}</h4>
					<p className={styles.oldPriceText}>{oldPrice}</p>
				</div>
			</div>
		);
	}
);

export default ProductCardInfo;
