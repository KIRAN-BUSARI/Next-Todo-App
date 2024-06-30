"use client"

import { Todo } from "@/store/atoms";
import { useRouter } from "next/navigation";
import { TodoCard } from "./todoCard";

export const Todos = ({ todos }: { todos: Todo[] }) => {
    const router = useRouter();

    const handleComplete = () => {
        alert("Todo Completed")
    };

    return (
        <section className="min-h-screen my-28 px-4 md:px-32 py-8 flex flex-col items-center">
            {todos.map((todo) => (
                <TodoCard
                    key={todo.id}
                    todo={todo}
                    onComplete={() => handleComplete()}
                />
            ))}
        </section>
    )
}