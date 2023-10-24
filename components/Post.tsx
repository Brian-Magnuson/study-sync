import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PostInfo } from '@/data/posts';

type PostProps = {
  postData: PostInfo;
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

  const attachments = props.postData.attachments?.map((attachment, index) => (
    <div className="post__attachment" key={index}>
      <span className="material-symbols-outlined">
        draft
      </span>
      <Link href={attachment.path}>
        {attachment.name}
      </Link>
    </div>
  ));

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
          {props.postData.isResource && (
            <span className="material-symbols-outlined">
              bookmark
            </span>
          )}
        </div>
        <p>{props.postData.content}</p>
        {attachments && attachments}
      </div>
    </div>
  );
}
