import React from 'react';
import { observer } from 'mobx-react';

// style
import styles from './styles.module.scss';

const Slogan: React.FC = observer(() => {
	return (
		<div className={styles.sloganBlock}>
			<p className={styles.text}>
				{' '}
				We've extended our returns period to 60 days{' '}
			</p>
		</div>
	);
});

export default Slogan;
