import styles from "../auth/Login.module.css";
import { FormControl as FormControlChakra, Input } from "@chakra-ui/react";

function FormControl({
  name,
  handleChange,
  value,
}: {
  name: string;
  value: any;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}) {
  return (
    <FormControlChakra id="username" color={"#b0d8bc"} className={styles.box}>
      <Input
        type="text"
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={name}
      />
    </FormControlChakra>
  );
}

export default FormControl;
