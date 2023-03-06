import { useState, useEffect } from "react";

import styles from "./styles/header.module.scss";

import UserService from "../../services/UserService";

import { IUser } from "../../models/IUser";

import { TextField, MenuItem } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HeaderOption from "./Option/HeaderOption";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Header = () => {
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

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <img src="/images/icon/linkedin.svg" alt="icon" />
        <div className={styles.header__search}>
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <nav className={styles.header__right}>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Friends" />
        <HeaderOption Icon={WorkIcon} title="Job" />
        <HeaderOption Icon={MessageIcon} title="Messages" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption
          avatar={
            user.profilePicture ? user.profilePicture : "/images/icon/cat.png"
          }
          title="me"
        />
      </nav>
    </header>
  );
};

export default Header;
