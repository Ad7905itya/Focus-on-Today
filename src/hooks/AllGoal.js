import { useSelector } from "react-redux";

export const useAllGoal = () => {
  const initialValue = useSelector((state) => state.taskLists);
  return Object.values(initialValue).filter((goal) => goal.completedTask)
    .length;
};
