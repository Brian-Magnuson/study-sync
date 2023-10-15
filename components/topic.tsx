"use client"
import { useRouter } from 'next/navigation'
import React from 'react';
import s from '../app/home/home.module.css';

type FormatDateProps = {
  name: string
  logo: string
  page: string
}
export default function Topic({ name, logo, page }: FormatDateProps): JSX.Element {
  const { push } = useRouter();
  function handleClick() {
    push('topics/' + page)
  }
  return (
    <div
      onClick={handleClick}>
      <main className={s.topic}>
        <div className={s.column}>
          <img src={logo} alt="Image" />
        </div>
        <div className={s.column}>
          <h2>{name}</h2>
        </div>
      </main>
    </div>
  );
}