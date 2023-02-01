import { useAppContext } from '../../Context/AppContext';
import styles from './controls.module.css';

export const Controls = () => {
  const { controls, setControls } = useAppContext();
  return (
    <div className={styles.controlsContainer}>
      <button
        className={styles.buttons}
        onClick={() => setControls((prevState) => !prevState)}>
        {!controls ? 'Enable Controls' : 'Disable Controls'}
      </button>
    </div>
  );
};
