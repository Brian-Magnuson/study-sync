"use client";

import { useRouter } from 'next/navigation';
import React, {useState} from 'react';
import TopicCard from '@/components/TopicCard'
import Popup from '@/components/Popup';
import s from './Home.module.css'
import Sidebar from '@/components/sidebar'
import { topicsData, unjoinedTopicsData } from '@/data/topics';

export default function HomePage() {
  const router = useRouter()
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<{ id: string; name: string; logo: string } | null>(null);


  const handleTopicClick = (topic: { id: string; name: string; logo: string; }) => {
    const isSuggestedTopic = unjoinedTopicsData.some((t) => t.id === topic.id);
    if (isSuggestedTopic) {
      setSelectedTopic(topic);
      setShowPopup(true);
    } else {
      router.push(`/discussion/${topic.id}`);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedTopic(null);
  };

  const handlePopupConfirmation = () => {;
    if(selectedTopic){
    router.push(`/discussion/${selectedTopic.id}`);
    setShowPopup(false);
    setSelectedTopic(null);
    }
  };

  return (
    <main className={s.home}>
      <Sidebar />
      <section>
        <h2>Welcome, Derrick!</h2>
        <div className={s.home__topics}>
          <div className={s.home__topics_column}>
            <h3>Your Topics</h3>
            {topicsData.map((topic) =>
              <TopicCard
                key={topic.id}
                name={topic.name}
                logo={topic.logo}
                page={topic.id}
                onClick={() => handleTopicClick(topic)}
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
                onClick={() => handleTopicClick(topic)}
              />
            )}
          </div>
        </div>
      </section>

      {showPopup && (
        <Popup
          message={`Join topic: ${selectedTopic?.name || ''}?`}
          onConfirm={handlePopupConfirmation}
          onCancel={handlePopupClose}
        />
      )}


    </main>
  );
}
