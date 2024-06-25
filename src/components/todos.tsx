"use client"

import { Todo } from "@/store/atoms";
import { useRouter } from "next/navigation";
import { TodoCard } from "./todoCard";

export const Todos = ({ todos }: { todos: Todo[] }) => {
    const router = useRouter();

    const handleComplete = () => {
    };

    return (
        <section className="min-h-screen p-4 items-center grid grid-cols-2">
            <div className="">
                {todos.map((todo) => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        onComplete={() => handleComplete}
                    />
                ))}
            </div>
        </section>
    )
}