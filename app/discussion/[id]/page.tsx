"use client";

import Sidebar from '@/components/Sidebar';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import s from './DiscussionId.module.css';
import { topicsData, unjoinedTopicsData } from '@/data/topics';
import { TopicPostData, postData } from '@/data/posts';

import Post from '@/components/Post';

type DiscussionIdPageProps = {
  params: {
    id: string;
  }
}
export default function DiscussionIdPage(props: DiscussionIdPageProps) {
  const router = useRouter();

  const { id } = props.params;

  // If the topic is unjoined, remove it from unjoined and add it to topicsData
  const findTopic = topicsData.find((topic) => topic.id === id);
  const findUnjoinedTopic = unjoinedTopicsData.find((topic) => topic.id === id);
  if (findUnjoinedTopic && !findTopic) {
    topicsData.unshift(findUnjoinedTopic);
    unjoinedTopicsData.splice(unjoinedTopicsData.indexOf(findUnjoinedTopic), 1);
  } else if (!findUnjoinedTopic && !findTopic) {
    router.push("/not-found");
  }

  const topicName = findTopic?.name;

  // If the topic has no post data, add it to postData
  let thisPostData = postData.find((post) => post.id === id);
  if (!thisPostData) {
    postData.push({
      id,
      posts: []
    });
    thisPostData = postData[postData.length - 1];
  }

  const [postStateData, setPostStateData] = React.useState(thisPostData);

  const [textInput, setTextInput] = React.useState('');
  const [fileInput, setFileInput] = React.useState('');
  const [filterInput, setFilterInput] = React.useState('conversation');
  const [markResourceInput, setMarkResourceInput] = React.useState(false);

  console.log(filterInput);

  // React effect to log fileInput when it changes
  React.useEffect(() => {
    if (fileInput) {
      console.log(fileInput);
    }
  }, [fileInput]);

  React.useEffect(() => {
    console.log(postStateData);
  }, [postStateData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (thisPostData) {
      thisPostData.posts.unshift({
        id: `${thisPostData.posts.length + 1}`,
        author: 'Derrick',
        authorImgUrl: 'https://picsum.photos/id/433/200',
        timestamp: new Date().toISOString(),
        content: textInput,
        attachments: fileInput ? [{
          name: fileInput.split("fakepath\\")[1],
          path: fileInput
        }] : undefined,
        isResource: markResourceInput
      });

      setTextInput('');
      setFileInput('');
      setMarkResourceInput(false);

      setPostStateData({ ...thisPostData });
    }
  }

  const posts = postStateData.posts.map((post) => {
    if (filterInput === 'conversation' || post.isResource) {
      return (
        <Post
          key={post.id}
          postData={post}
        />
      );
    }
  });

  // Handles inputting a file to an input:file element
  const handleAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFileInput(e.currentTarget.value);
    setMarkResourceInput(true);
  }

  const handleCloseAttachment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFileInput('');
    setMarkResourceInput(false);
  }


  return (
    <main className={s.discussion_page}>
      <Sidebar />
      <section>
        <h2>{topicName}</h2>

        <fieldset className={s.discussion_page__filter}>
          <input
            type="radio"
            name="filter"
            id="conversation"
            value="conversation"
            checked={filterInput === "conversation"}
            onChange={(e) => setFilterInput(e.target.value)}
          />
          <label
            htmlFor="conversation"
            className={filterInput === "conversation" ? s.filter__label__active : s.filter__label__inactive}
          >
            Conversation
          </label>
          <input
            type="radio"
            name="filter"
            id="resources"
            value="resources"
            checked={filterInput === "resources"}
            onChange={(e) => setFilterInput(e.target.value)}
          />
          <label
            htmlFor="resources"
            className={filterInput === "resources" ? s.filter__label__active : s.filter__label__inactive}
          >
            Resources
          </label>
        </fieldset>

        <div className={s.discussion_page__posts}>
          {posts.reverse()}
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
          <div className={s.discussion_page__form_upper}>
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
              onChange={handleAttach}
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
              disabled={!textInput && !fileInput}
            >
              <span className="material-symbols-outlined">
                send
              </span>
            </button>
          </div>
          <div className={s.discussion_page__form_lower}>
            <input
              type="checkbox"
              name="resource"
              id="resource"
              checked={markResourceInput}
              onChange={(e) => setMarkResourceInput(e.target.checked)}
            />
            <label htmlFor="resource">Send as Resource</label>
          </div>
        </form>
      </section>
    </main>
  );
}
