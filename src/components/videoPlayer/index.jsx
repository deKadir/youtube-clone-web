import { useEffect, useRef, useState } from 'react';
import styles from './player.module.scss';
import { formatSecond } from 'helpers/time';

import { Icon } from 'components';
export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const handleCurrent = (event) => {
    const percentage = (event.pageX / window.innerWidth) * 100;
    const _current = (duration * percentage) / 100 || 0;
    videoRef.current.currentTime = _current;
    setCurrent(_current);
  };

  const handleTimeline = () => {
    const width = (100 * current) / duration || 0;
    return { width: `${width}%` };
  };
  const durationTxt = `${formatSecond(current)} / ${formatSecond(duration)}`;

  useEffect(() => {
    setTimeout(() => {
      setDuration(videoRef?.current?.duration);
    }, 100);
    const endEvent = () => setPlaying(false);
    const timeUpdateEvent = (event) => {
      setCurrent(event.target.currentTime);
    };

    videoRef?.current.addEventListener('ended', endEvent);
    videoRef?.current.addEventListener('timeupdate', timeUpdateEvent);
    const removeListeners = () => {
      videoRef.current.removeEventListener('ended', endEvent);
      videoRef.current.removeEventListener('timeupdate', timeUpdateEvent);
    };
    return removeListeners;
  }, []);

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        src={require('assets/images/example.mp4')}
        typeof="video/mp4"
        onClick={handlePlay}
      ></video>
      <div className={styles.videoControls}>
        <span className={styles.timeline} onClick={handleCurrent}>
          <span className={styles.current} style={handleTimeline()}></span>
        </span>
        <div className={styles.videoFooter}>
          <div className={styles.controls}>
            <button className={styles.controlButton}>
              <Icon icon="Back" />
            </button>
            <button className={styles.controlButton} onClick={handlePlay}>
              <Icon icon={playing ? 'Pause' : 'Play'} />
            </button>
            <button className={styles.controlButton}>
              <Icon icon="Forward" />
            </button>
            <span className={styles.duration}>{durationTxt}</span>
          </div>
          <div className={styles.videoSettings}>
            <button className={styles.controlButton}>
              <Icon icon="Maximize" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
