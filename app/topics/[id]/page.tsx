import Sidebar from '@/components/Sidebar';
import React from 'react';
import s from './TopicId.module.css';

type TopicIdPageProps = {
  params: {
    id: string;
  }
}
export default function TopicIdPage(props: TopicIdPageProps) {

  return (
    <main className={s.topic_page}>
      <Sidebar />
      This is the topic page for topic {props.params.id}
    </main>
  );
}