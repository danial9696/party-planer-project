import React from 'react';
import Props from './types';
import Image from 'next/image';
import { UilApps } from '@iconscout/react-unicons';
import { UilUserCircle } from '@iconscout/react-unicons';
import styles from '@styles/06-components/layout/header.module.scss';

function Header(props: Props) {
  return (
    <header className={styles['c-header']}>
      <div>
        <h1>{props.title}</h1>

        <UilApps />
      </div>

      <div>{props.avatar ? <Image src={props.avatar} alt='avatar' /> : <UilUserCircle />}</div>
    </header>
  );
}

export default Header;
