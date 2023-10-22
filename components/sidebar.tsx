"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import { topicsData } from '@/data/topics';

export default function Sidebar() {

  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="sidebar">
      <Link
        href="/home"
      >
        <div className={
          pathname === '/home'
            ? 'sidebar__home-btn sidebar__topic--active'
            : 'sidebar__home-btn'
        }>
          <span className="material-symbols-outlined">
            home
          </span>
        </div>
        <div className="sidebar__topic-tooltip">
          Home
        </div>
      </Link>

      <hr />

      {topicsData.map((topic) =>
        <>
          <Link
            key={topic.id}
            href={`/discussion/${topic.id}`}
          >
            <Image
              className={
                pathname.startsWith(`/discussion/${topic.id}`) ? 'sidebar__topic--active' : ''
              }
              src={topic.logo}
              alt=""
              width={64}
              height={64}
            />
            <div className="sidebar__topic-tooltip">
              {topic.name}
            </div>
          </Link>
        </>
      )}
      {/* <img className={s.addtopic}
        src='https://static-00.iconduck.com/assets.00/plus-square-icon-2048x2048-63y4iawk.png'
        onClick={() => push('SearchTopics')} /> */}
    </nav>
  );
}
