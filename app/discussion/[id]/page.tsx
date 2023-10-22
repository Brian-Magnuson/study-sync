"use client";

import Sidebar from '@/components/Sidebar';
import React from 'react';
import s from './DiscussionId.module.css';

type DiscussionIdPageProps = {
  params: {
    id: string;
  }
}
export default function DiscussionIdPage(props: DiscussionIdPageProps) {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <main className={s.discussion_page}>
      <Sidebar />
      <section>
        <h2>Operating Systems</h2>

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
          />
          <button
            type="submit"
            className={s.post__submit_btn}
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
