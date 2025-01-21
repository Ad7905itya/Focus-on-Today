import { useSelector } from "react-redux";
import { useAllGoal } from "./AllGoal";

export const para = (Statements) => {
  const initialValue = useSelector((state) => state.taskLists);
  const allGoal = useAllGoal();

  if ((allGoal / initialValue.length) * 100 < 50) {
    return Statements[0];
  } else if (
    (allGoal / initialValue.length) * 100 >= 50 &&
    (allGoal / initialValue.length) * 100 < 100
  ) {
    return Statements[1];
  } else {
    return Statements[2];
  }
};
