import { FC } from "react";

import TextField, { TextFieldProps } from "@mui/material/TextField";

const Input: FC<Partial<TextFieldProps>> = ({ id, ...rest }) => {
  return <TextField id={id} {...rest} />;
};

export default Input;
