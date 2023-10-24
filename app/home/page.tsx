"use client";

import React from 'react';
import TopicCard from '@/components/TopicCard'
import s from './Home.module.css'
import Sidebar from '@/components/Sidebar'
import { topicsData, unjoinedTopicsData } from '@/data/topics';

export default function HomePage() {

  return (
    <main className={s.home}>
      <Sidebar />
      <section>
        <h2>Welcome, Derrick!</h2>
        <div className={s.home__topics}>
          <div className={s.home__topics_column}>
            <h3>Your Topics</h3>
            {topicsData.map(({ name, logo, id }) =>
              <TopicCard
                key={id}
                name={name}
                logo={logo}
                page={id}
              />
            )}
          </div>
          <div className={s.home__topics_column}>
            <h3>Suggested Topics</h3>
            {unjoinedTopicsData.map((topic) =>
              <TopicCard
                key={topic.id}
                name={topic.name}
                logo={topic.logo}
                page={topic.id}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
