import { axios } from "axios";
import { atom, selector } from "recoil";

export type Todo = {
  id: string | null;
  title: string | null;
  description: string | null;
  completed: boolean | null;
};

const todosSelector = selector({
  key: "todosSelector",
  get: async () => {
    const response = await axios.get("/api/todos");
    return response.data.todos as Todo[];
  },
});

export const todosAtom = atom<Todo[]>({
  key: "todosAtom",
  default: todosSelector,
});
