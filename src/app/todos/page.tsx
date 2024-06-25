import db from "@/lib/prisma";
import { Todos } from "@/components/todos";

async function getTodos() {
    const todos = await db.todo.findMany();
    return todos;
}

export default async function TodoComponent() {
    const todos = await getTodos();
    return <Todos todos={todos} />
}

// "use client"
// import { Todo } from "@/store/atoms";
// // import { Todo } from "@prisma/client";
// import { useRouter } from "next/navigation";
// import { TodoCard } from "@/components/todoCard";
// import { TodoSkeleton } from "@/components/TodoSkeleton";
// import { useEffect, useState } from "react";

// export default function Todos({ todos }: { todos: Todo[] }) {
//     const [isLoading, setIsLoading] = useState(true);
//     const router = useRouter();

//     useEffect(() => {
//         // Simulate a loading delay
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 2000); // Adjust this timeout to your actual data fetching duration
//     }, []);

//     const handleComplete = () => {
//         // Handle completion logic here
//     };

//     return (
//         <section className="min-h-screen p-4 items-center grid grid-cols-2 gap-4">
//             <div>
//                 {isLoading
//                     ? Array(4).fill(0).map((_, index) => (
//                         <TodoSkeleton key={index} />
//                     ))

//                     : todos.map((todo) => (
//                         <TodoCard
//                             key={todo.id}
//                             todo={todo}
//                             onComplete={() => handleComplete}
//                         />
//                     ))
//                 }
//             </div>
//         </section>
//     )
// }
