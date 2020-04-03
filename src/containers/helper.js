import Evening from "../assets/eveningtown.jpg";
import Morning from "../assets/morningtree.jpg";
import Afternoon from "../assets/afternoonsunset.jpg";

export const message = time => {
  if (time > 6 && time < 12) {
    return "Good Morning";
  } else if (time >= 12 && time <= 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

export const backgroundImage = time => {
  if (time > 6 && time < 12) {
    return Morning;
  } else if (time >= 12 && time <= 18) {
    return Afternoon;
  } else {
    return Evening;
  }
};
