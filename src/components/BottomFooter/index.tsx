import React from 'react';
import { observer } from 'mobx-react';
import { EnvironmentOutlined } from '@ant-design/icons';

// style
import styles from './styles.module.scss';

const BottomFooter: React.FC = observer(() => {
	return (
		<div className={styles.container}>
			<div className={styles.location}>
				<EnvironmentOutlined className={styles.icon} />
				<div>Moscow</div>
			</div>

			<div className={styles.links}>
				<div className={styles.link}>Cookie settings</div>
				<div className={styles.link}>Terms of use</div>
			</div>
		</div>
	);
});

export default BottomFooter;
