import React from 'react';
import { observer } from 'mobx-react';
// style
import styles from './styles.module.scss';

//components
import CategoryCard from 'components/CategoryCard';

//images
import women from 'sources/images/women.jpg';
import men from 'sources/images/men.jpg';
import kids from 'sources/images/kids.jpg';

const CategoryList: React.FC = observer(() => {
	return (
		<div className={styles.list}>
			<div className={styles.rowImg}>
				<CategoryCard img={women} name='Women' />
			</div>

			<div className={styles.columnImgs}>
				<div className={styles.columnImg}>
					<CategoryCard img={kids} name='Kids' />
				</div>
				<div className={styles.columnImg}>
					<CategoryCard img={men} name='Men' />
				</div>
			</div>
		</div>
	);
});

export default CategoryList;
