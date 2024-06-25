import { TodoSkeleton } from "@/components/TodoSkeleton";

export default function Loading() {
    return (
        <div className="min-h-screen p-4 items-center justify-center">
            <TodoSkeleton />
        </div>
    )
}