export interface RequestProps {
  url: string;
  mode: string;
  method: string;
  data: any;
}

export interface WidgetProps {
  title: string;
  subtitle: string;
}

export interface FormProps {
  username: string;
  profilePicture: string;
  email: string;
  password: string;
}

export interface FeedOptionsProps {
  Icon: any;
  title: string;
  color: string;
}

export interface HeaderOptionProps {
  Icon?: any;
  avatar?: string;
  title: string;
}

export interface ErrorProps {
  message: string;
  errors: any[];
}
