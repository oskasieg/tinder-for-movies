import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

interface INotification {
  title: string;
  message: string;
  type: "success" | "danger" | "info" | "default" | "warning";
  container: "bottom-left" | "bottom-right";
}

export const showNotification = ({
  title,
  message,
  type,
  container,
}: INotification) => {
  Store.addNotification({
    title,
    message,
    type,
    insert: "bottom",
    container: window.innerWidth >= 1500 ? container : "center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1500,
      onScreen: true,
    },
  });
};
