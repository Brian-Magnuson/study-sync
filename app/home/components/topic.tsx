import React from 'react';
import s from '../home.module.css';



interface FormatDateProps {
    name: string
    logo: string
  }

export default function Topic({ name, logo }: FormatDateProps): JSX.Element {
    return (
        <main className={s.topic}>
            
            <div className={s.column}>
            <img src={logo} alt="Image" />
            </div>
            <div className={s.column}>
            <h2>{name}</h2>
            </div>

            

        </main>
      );
  }