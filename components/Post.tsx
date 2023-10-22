import React from 'react';
import Image from 'next/image';
import { Post } from '@/data/posts';

type PostProps = {
  postData: Post;
}
export default function Post(props: PostProps) {

  const date = new Date(props.postData.timestamp);
  const options: any = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  const formattedDate = date.toLocaleString('en-US', options);

  return (
    <div className="post">
      <Image
        width={50}
        height={50}
        src={props.postData.authorImgUrl}
        alt=""
      />
      <div className="post__text">
        <div className="post__text-header">
          <h4>{props.postData.author}</h4>
          <span>{formattedDate}</span>
        </div>
        <p>{props.postData.content}</p>
      </div>
    </div>
  );
}
