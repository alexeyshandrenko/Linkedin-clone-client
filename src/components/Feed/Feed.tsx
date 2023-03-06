import { useState, useEffect, ChangeEvent } from "react";

import PostService from "../../services/PostService";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import CreateIcon from "@mui/icons-material/Create";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MissedVideoCallIcon from "@mui/icons-material/MissedVideoCall";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";

import styles from "./styles/feed.module.scss";

import { sortByTimestamp } from "../../utils/sortTimestamp";

import Post from "./Post/Post";
import FeedOption from "./Options/FeedOption";

import { IPost } from "../../models/post/IPost";
import { IUser } from "../../models/IUser";

import FlipMove from "react-flip-move";
import UserService from "../../services/UserService";

const Feed = () => {
  const userId = useTypedSelector((state) => state.userReducer?.user?.id) || "";

  const [posts, setPosts] = useState<IPost[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [input, setInput] = useState<string>("");

  const getUserById = async (id: string): Promise<void> => {
    try {
      const { data } = await UserService.getUserById(id);
      setUser(data);
    } catch (e) {
      console.error(e);
    }
  };

  const getPostsByUserId = async (id: string): Promise<void> => {
    try {
      const { data } = await PostService.getPostsByUserId(id);
      if (data) {
        setPosts(sortByTimestamp(data));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const sendPost = async (e: React.MouseEvent) => {
    if (input) {
      e.preventDefault();
      try {
        const { data } = await PostService.createPost({
          name: user.username,
          description: "pepe pupu",
          message: input,
          photoUrl: user.profilePicture,
          postedBy: userId,
          timestamp: Date.now(),
        });
        setInput("");
        getPostsByUserId(userId);
        return data;
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    getUserById(userId);
    getPostsByUserId(userId);
  }, []);

  return (
    <div className={styles.feed}>
      <div className={styles.feed__top}>
        <div className={styles.inputContainer}>
          <CreateIcon className={styles.inputContainer__icon} />
          <form>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={handleInputChange}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className={styles.feed__options}>
          <FeedOption Icon={InsertPhotoIcon} title="Photo" color="#4169e1" />
          <FeedOption
            Icon={MissedVideoCallIcon}
            title="Video"
            color="#d79d41"
          />
          <FeedOption Icon={EventIcon} title="Event" color="#a3a3a3" />
          <FeedOption
            Icon={ArticleIcon}
            title="Write Article"
            color="#cd5700"
          />
        </div>
      </div>
      <FlipMove>
        {posts &&
          posts.map((post) => {
            return (
              <Post
                key={post._id}
                name={post.name}
                description={post.description}
                message={post.message}
                photoUrl={post.photoUrl}
              />
            );
          })}
      </FlipMove>
    </div>
  );
};

export default Feed;
