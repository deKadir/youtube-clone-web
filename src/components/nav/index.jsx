import React, { useEffect, useState } from 'react';
import requests from 'constants/api';
import styles from './nav.module.scss';

export default function Nav() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const { data } = await requests.category.list();
    if (data?.success) {
      setCategories(data.categories);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {categories?.map((category) => (
          <li className={styles.item}>
            <span>{category.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
