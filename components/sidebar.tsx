import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { topicsData } from '@/data/topics';

export default function Sidebar() {

  return (
    <nav className="sidebar">
      <Link
        href="/home"
      >
        <div className="sidebar__home-btn">
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
            href={`/topics/${topic.id}`}
          >
            <Image
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