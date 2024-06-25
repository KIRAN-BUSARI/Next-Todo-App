import { Todo } from "@/store/atoms";
import { useRouter } from "next/navigation";

export const TodoCard = ({
    todo,
    onComplete,
}: {
    todo: Todo;
    onComplete: () => void;
}) => {
    const router = useRouter();
    return (
        <div className="max-w-md mx-auto my-4 p-6 bg-gray-700 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold text-gray-100 mb-2">{todo.title}</h2>
            <p className="text-gray-300 mb-4">{todo.description}</p>
            <button
                onClick={onComplete}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
                Complete
            </button>
        </div>
    )
}
