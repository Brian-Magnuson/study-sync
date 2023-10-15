"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {

  const pathname = usePathname();
  const [menuClassNames, setMenuClassNames] = React.useState('nav__account-menu');

  const handleMenuClick = () => {
    if (menuClassNames === 'nav__account-menu') {
      setMenuClassNames('nav__account-menu nav__account-menu--show')
    } else {
      setMenuClassNames('nav__account-menu')
    }
  }

  return (
    <nav className="nav">
      <div className="nav__left">
        <h1>StudySync</h1>
      </div>
      <div className="nav__right">
        {pathname === '/' ?
          <Link
            href="/home"
          >
            <button type="button">
              Log In
            </button>
          </Link>
          :
          <div className="nav__account"
            onClick={handleMenuClick}
          >
            <span>
              Derrick
            </span>
            <div className="nav__account-img-container">
              <span className="material-symbols-outlined">
                account_circle
              </span>
            </div>
          </div>
        }
        <div
          className={menuClassNames}
        >
          <Link
            href="/"
          >
            <button
              type="button"
              onClick={handleMenuClick}
            >
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}