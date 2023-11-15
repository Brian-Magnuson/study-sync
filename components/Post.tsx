"use client";

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

  const view = props.postData.attachments?.map((attachment, index) => {
    const viewableFiles: string[] = ["pdf", "html", "png", "jpg"];
    if (attachment.path != null && viewableFiles.includes(attachment.path.split('.').pop() || "")) {
      console.log(attachment.path)
      return (
        <div className="post__fileview" key={index}>
          <iframe src={'http://localhost:3000' + attachment.path} width={'100%'} height={'300vh'} />
        </div>
      )
    }
    else {
      return (
        <div className="post__fileview" key={index}>
          <img src={'http://localhost:3000/images/nprev.jpg'} width={'100%'} height={'300vh'} />
        </div>
      )
    }
  });



  const attachments = props.postData.attachments?.map((attachment, index) => (
    <div className="post__attachment" key={index}>
      <span className="material-symbols-outlined">
        draft
      </span>
      <a href={attachment.path} target='_blank' rel='noopener noreferrer'>
        {attachment.name}
      </a>


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
        {view}
        {attachments && attachments}

        <p>{props.postData.content}</p>
      </div>
    </div>
  );
}
