import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

interface INotification {
  title: string;
  message: string;
  type: "success" | "danger" | "info" | "default" | "warning";
  container: "bottom-left" | "bottom-right" | "bottom-center";
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
    container: window.innerWidth >= 1500 ? container : "top-center",
    animationIn:
      container === "bottom-left"
        ? ["animate__animated", "animate__slideInLeft"]
        : container === "bottom-right"
        ? ["animate__animated", "animate__slideInRight"]
        : window.innerWidth >= 1500
        ? ["animate__animated", "animate__slideInUp"]
        : ["animate__animated", "animate__slideInDown"],
    animationOut:
      container === "bottom-left"
        ? ["animate__animated", "animate__slideOutLeft"]
        : container === "bottom-right"
        ? ["animate__animated", "animate__slideOutRight"]
        : window.innerWidth >= 1500
        ? ["animate__animated", "animate__slideOutDown"]
        : ["animate__animated", "animate__slideOutUp"],
    dismiss: {
      duration: 1000,
      onScreen: true,
    },
  });
};
