import React from 'react';
import { observer } from 'mobx-react';
// style
import styles from './styles.module.scss';

const SingUp: React.FC = observer(() => {
	return <div className={styles.signUP}>Sign UP</div>;
});

export default SingUp;
