import { IDecideButtonProps } from "./types";
import styles from "./DecideButton.module.scss";

const DecideButton = ({ text, type }: IDecideButtonProps) => {
  return (
    <button
      className={`${styles.DecideButton} ${
        type === "accept"
          ? `${styles.DecideButton__accept}`
          : `${styles.DecideButton__reject}`
      } `}
    >
      {text}
    </button>
  );
};

export default DecideButton;
