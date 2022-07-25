import React, { useEffect, useState } from 'react';
import Popup from 'components/popup';
import styles from './modal.module.scss';
import { Button } from 'components';
export default function Modal({
  title,
  active,
  onCancel = () => {},
  onAccept = () => {},
  handleActive = () => {},
  body,
}) {
  return (
    <Popup active={active} handleActive={handleActive}>
      <div className={styles.modalContainer}>
        <h2>{title}</h2>
        <div>{body}</div>
        <div className={styles.modalActions}>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={onAccept} variant="contained">
            Ok
          </Button>
        </div>
      </div>
    </Popup>
  );
}
