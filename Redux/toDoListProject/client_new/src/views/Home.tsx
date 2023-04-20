import React , {useState} from "react";
import Tasks from "../components/tasks/Tasks";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/tasks";



const Home = () => {
  const [input, setInput] = useState("");

  //@ts-ignore
  const count = useSelector((state) => state.tasks.count);
  //@ts-ignore
  const todos = useSelector((state) => state.tasks.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(add(input));
  };

  const handleTodoDone = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      this is a home page
    </div>
  );
};

export default Home;