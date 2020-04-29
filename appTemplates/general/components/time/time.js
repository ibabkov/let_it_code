import React from 'react';
import styles from './time.module.css';

const normalizeTime = (time) => {
  return time < 10 ? '0' + time : time;
};

const getTime = () => {
  const date = new Date();

  return [date.getHours(), date.getMinutes(), date.getSeconds()].map(normalizeTime).join(':')
};


export default function Time() {
  const [time, setTime] = React.useState(getTime());
  // const [timer, setTimer] = React.useState(null);

  React.useEffect(() => {
    let timer = setTimeout(() => setTime(getTime()), 1000);

    // this will clear Timeout when component unmount like in willComponentUnmount
    return () => {
      clearTimeout(timer)
    }
  });

  return (
    <time className={styles.container}>Time: {time}</time>
  );
}
