import React, { useReducer } from 'react';
import {
  formatTime,
  minutesRegex,
  timeRegex
} from '../../helpers/data-transformer';
import styles from './Clock.module.scss';

const reducer = (initialState, finalState) => ({
  ...initialState,
  ...finalState
});

const Clock = () => {
  const [{ period, hour, minute }, setState] = useReducer(reducer, {
    period: 'AM',
    hour: '01',
    minute: '00'
  });

  const buttonStyle = id => {
    return id === period
      ? `${styles.button} ${styles['button--selected']}`
      : styles.button;
  };

  const handleButtonClick = e => {
    e.preventDefault();
    setState({ period: e.target.id });
  };

  const handleInputChange = e => {
    // if (e.target.value.match(timeRegex)) {
    if (e.target.name === 'minute') {
      if (minutesRegex.test(e.target.value)) {
        setState({ [e.target.name]: formatTime(e.target.value) });
      }
    }
    // }
  };

  return (
    <div className={styles.root}>
      <div className={styles.clock}>
        <div className={styles.timeblock}>
          <input
            className={styles.input__left}
            onChange={handleInputChange}
            value={hour}
            name="hour"
            type="number"
            min="1"
            max="12"
          />
          <p className={styles.colon}>:</p>
          <input
            className={styles.input__right}
            onChange={handleInputChange}
            value={minute}
            name="minute"
            type="number"
            min="0"
            max="59"
          />
        </div>
        <div className={styles.button__group}>
          <button
            className={buttonStyle('AM')}
            id="AM"
            onClick={handleButtonClick}
          >
            AM
          </button>
          <button
            className={buttonStyle('PM')}
            id="PM"
            onClick={handleButtonClick}
          >
            PM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
