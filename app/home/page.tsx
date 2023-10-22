import React from 'react';
import TopicCard from '@/components/TopicCard'
import s from './Home.module.css'
import Sidebar from '@/components/Sidebar'
import { topicsData, suggestedTopicsData } from '@/data/topics';

export default function HomePage() {

  return (
    <main className={s.home}>
      <Sidebar />
      {/* <div className={s.row}>
        <div className={s.column}>
          <h1>Suggested Topics</h1>
          {yourTopicsJson.map(({ name, logo, id }) =>
            <Topic
              key={id}
              name={name}
              logo={logo}
              page={id}
            />
          )}
        </div>

        <div className={s.column}>
          <h1>    Your Topics</h1>
          {yourTopicsJson.map(({ name, logo, id }) =>
            <Topic
              key={id}
              name={name}
              logo={logo}
              page={id}
            />
          )}
        </div>
      </div> */}
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
            {suggestedTopicsData.map((topic) =>
              <TopicCard
                key={topic.id}
                name={topic.name}
                logo={topic.logo}
                page={topic.id}
              />
            )
            }
          </div>
        </div>
      </section>
    </main>
  );
}
