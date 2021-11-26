import React from 'react';
import { observer } from 'mobx-react';
// style
import styles from './styles.module.scss';

//images
import arrowLeft from 'sources/images/arrow-left.svg';
import arrowRight from 'sources/images/arrow-right.svg';

const SwitchArrows: React.FC = observer(() => {
	return (
		<div className={styles.arrows}>
			<div className={styles.circle}>
				<img src={arrowLeft} alt='' />
			</div>
			<div className={styles.circle}>
				<img src={arrowRight} alt='' />
			</div>
		</div>
	);
});

export default SwitchArrows;
