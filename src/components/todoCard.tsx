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
        <div className="max-w-sm md:max-w-full my-4 mx-4 p-4 md:p-6 bg-gray-700 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg md:text-xl font-bold text-gray-100 mb-2">{todo.title}</h2>
            <p className="text-gray-300 mb-4 text-sm md:text-base">{todo.description}</p>
            <div className="flex items-end justify-end relative">
                <button
                    onClick={onComplete}
                    className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Complete
                </button>
            </div>
        </div>
    )
}
