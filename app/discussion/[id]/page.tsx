"use client";

import Sidebar from '@/components/Sidebar';
import React from 'react';
import Link from 'next/link';
import s from './DiscussionId.module.css';
import { postData } from '@/data/posts';

import Post from '@/components/Post';

type DiscussionIdPageProps = {
  params: {
    id: string;
  }
}
export default function DiscussionIdPage(props: DiscussionIdPageProps) {

  const { id } = props.params;
  

  const [section, setSection] = React.useState<{
    title: string;
    posts: {
      id: string;
      timestamp: string;
      author: string;
      authorImgUrl: string;
      content: string;
      attachments?: {
        name: string;
        path: string;
      }[];
    }[];
  } | null>(null);

  

  const [textInput, setTextInput] = React.useState('');
  const [fileInput, setFileInput] = React.useState('');
  

  // React effect to log fileInput when it changes
  React.useEffect(() => {
    if (fileInput) {
      console.log(fileInput);
    }
  }, [fileInput]);

  React.useEffect(() => {
    console.log(section);
  }, [section]);

  

  if (postData) {
    const findSection = postData.classes.find((p) => p.title === id);
    if (findSection && section !== findSection) {
      setSection(findSection);
    }
  }

  const [postStateData, setPostStateData] = React.useState(section?.posts);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(section){
      section.posts.unshift({
        id: `${section.posts.length + 1}`,
        author: 'Derrick',
        authorImgUrl: 'https://picsum.photos/id/433/200',
        timestamp: new Date().toISOString(),
        content: textInput,
        attachments: fileInput ? [{
          name: fileInput.split("fakepath\\")[1],
          path: fileInput
        }] : undefined
      });

      setTextInput('');
      setFileInput('');

      setPostStateData([...section.posts]);
    }
  }
  if(section){
    const posts = section.posts.map((post) => (
      <Post
        key={post.id}
        postData={post}
      />
    ));
  

  const handleCloseAttachment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFileInput('');
  }


  return (
    <main className={s.discussion_page}>
      <Sidebar />
      <section>
        <h2>Operating Systems</h2>

        <div className={s.discussion_page__posts}>
          {posts}
        </div>

        <div className={s.discussion_page__attachments}>
          {fileInput && (
            <div className="post__attachment">
              <span className="material-symbols-outlined">
                draft
              </span>
              <Link href="#">
                {fileInput.split("fakepath\\")[1]}
              </Link>
              <button
                type="button" className="no_button_style"
                onClick={handleCloseAttachment}
              >
                <span className="material-symbols-outlined">
                  close
                </span>
              </button>
            </div>
          )}
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
            value={fileInput}
            onChange={(e) => setFileInput(e.target.value)}
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
}
