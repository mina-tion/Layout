import React from 'react';
import classNames from 'classnames';
// style
import styles from './styles.module.scss';

// style
import search from 'sources/images/search.svg';

interface Props {
	handlerClick?: () => void;
}

const SearchField: React.FC<Props> = ({ handlerClick }) => {
	return (
		<div className={styles.inputFieldContainer}>
			<input
				type='text'
				placeholder='Search among millions of products'
				className={styles.inputField}
			/>
			<img
				src={search}
				alt='Search icon'
				className={classNames(styles.icon, styles.search)}
			/>
		</div>
	);
};

export default SearchField;
