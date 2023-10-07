import React from 'react';
import Topic from './components/topic'
import s from './home.module.css';

export default function HomePage() {

  return (
    <main className={s.home}>
      {/* <form>
        <h1>Log In</h1>

        <label htmlFor="email">Email</label>
        <input name='email' type="email" />

        <label htmlFor="password">Password</label>
        <input name='password' type="password" />

        <button type="submit">Log In</button>

        <p>Don&apos;t have an account? <a href="/signup">Sign up</a></p>
      </form> */}
      <div className={s.row}>
        <div className={s.column}>
          <h2>Column 1</h2>
          <Topic
          name={'Testname'}
          logo={'data:image/png;base64,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'}
                    />
        </div>
          
        <div className={s.column}>
        <h2>Column 2</h2>
        </div>
      </div>
    </main>
  );
}