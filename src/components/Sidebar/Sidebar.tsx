import { useEffect, useState } from "react";

import styles from "./styles/sidebar.module.scss";

import { Avatar } from "@mui/material";

import UserService from "../../services/UserService";

import { IUser } from "../../models/IUser";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Sidebar = () => {
  const userId = useTypedSelector((state) => state.userReducer.user?.id) || "";

  const [user, setUser] = useState<IUser>({} as IUser);

  const getUserById = async (id: string): Promise<void> => {
    try {
      const { data } = await UserService.getUserById(id);
      setUser(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUserById(userId);
  }, []);

  const topic = (topic: string) => (
    <div className={styles.topic}>
      <span>#</span>
      <p className={styles.topic__title}>{topic}</p>
    </div>
  );

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <img alt="background" src="/images/background.jpg" />
        <Avatar
          className={styles.sidebar__avatar}
          src={
            user.profilePicture ? user.profilePicture : "/images/icon/cat.png"
          }
        />
        <h2>{user && user.username}</h2>
        <h4>{user && user.email}</h4>
      </div>

      <div className={styles.sidebar__stats}>
        <div className={styles.sidebar__stat}>
          <p>Who viewed you</p>
          <p className={styles.sidebar__statNumber}>2,543</p>
        </div>
        <div className={styles.sidebar__stat}>
          <p>Views on post</p>
          <p className={styles.sidebar__statNumber}>2,448</p>
        </div>
      </div>

      <div className={styles.sidebar__bottom}>
        <h2>Recent</h2>
        {topic("react")}
        {topic("programming engineering")}
        {topic("frontend")}
        {topic("typescript")}
        {topic("it")}
      </div>
    </aside>
  );
};

export default Sidebar;
