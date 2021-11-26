import React from 'react';
import classNames from 'classnames';

// style
import styles from './styles.module.scss';

// components
import SearchField from 'components/SearchField';
import SearchHistory from 'components/SearchHistory';

// images
import close from 'sources/images/close.svg';

interface Props {
	handlerOnClick?: () => void;
}

const Search: React.FC<Props> = ({ handlerOnClick }) => {
	return (
		<div className={styles.searchContainer}>
			<div className={styles.searchBox}>
				<SearchField />
				<SearchHistory />
			</div>
			<img
				src={close}
				alt='Close icon'
				onClick={handlerOnClick}
				className={classNames(styles.icon, styles.close)}
			/>
		</div>
	);
};

export default Search;
