import React from 'react';
import s from './login.module.css';

export default function LoginPage() {

  return (
    <main className={s.login}>
      <form>
        <h1>Log In</h1>

        <label htmlFor="email">Email</label>
        <input name='email' type="email" />

        <label htmlFor="password">Password</label>
        <input name='password' type="password" />

        <button type="submit">Log In</button>

        <p>Don&apos;t have an account? <a href="/signup">Sign up</a></p>
      </form>
    </main>
  );
}