"use client";

import Sidebar from '@/components/Sidebar';
import React from 'react';
import s from './DiscussionId.module.css';
import { postData } from '@/data/posts';

import Post from '@/components/Post';

type DiscussionIdPageProps = {
  params: {
    id: string;
  }
}
export default function DiscussionIdPage(props: DiscussionIdPageProps) {

  const [postStateData, setPostStateData] = React.useState(postData);

  const [textInput, setTextInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postData.unshift({
      id: `${postData.length + 1}`,
      author: 'Derrick',
      authorImgUrl: 'https://picsum.photos/id/443/200',
      timestamp: new Date().toISOString(),
      content: textInput,
    });

    setTextInput('');

    setPostStateData([...postData]);
  }

  const posts = postStateData.map((post) => (
    <Post
      key={post.id}
      postData={post}
    />
  ));


  return (
    <main className={s.discussion_page}>
      <Sidebar />
      <section>
        <h2>Operating Systems</h2>

        <div className={s.discussion_page__posts}>
          {posts}
        </div>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="post__file_input"
            className={s.post__file_input_label}
          >
            <span className="material-symbols-outlined">
              attach_file
            </span>
          </label>
          <input
            type="file"
            id="post__file_input"
          />
          <input
            type="text"
            placeholder="Message"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button
            type="submit"
            className={s.post__submit_btn}
            disabled={!textInput}
          >
            <span className="material-symbols-outlined">
              send
            </span>
          </button>
        </form>
      </section>
    </main>
  );
}
