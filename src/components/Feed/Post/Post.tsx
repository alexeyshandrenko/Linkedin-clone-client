import { FC, forwardRef } from "react";

import styles from "./styles/post.module.scss";

import FeedOption from "../Options/FeedOption";

import { IPost } from "../../../models/post/IPost";

import { Avatar } from "@mui/material";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef<HTMLDivElement, Partial<IPost>>(
  ({ name, description, message, photoUrl }, ref) => {
    return (
      <div ref={ref} className={styles.post}>
        <div className={styles.post__header}>
          <Avatar className={styles.post__avatar} src={photoUrl} />
          <div className={styles.post__info}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.post__body}>
          <p>{message}</p>
        </div>
        <div className={styles.post__buttons}>
          <FeedOption Icon={ThumbUpIcon} title="Like" color="gray" />
          <FeedOption Icon={CommentIcon} title="Comment" color="gray" />
          <FeedOption Icon={ShareIcon} title="Share" color="gray" />
          <FeedOption Icon={SendIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;
