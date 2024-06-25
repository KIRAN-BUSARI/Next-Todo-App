export const TodoSkeleton = () => {
    return (
        <div className="max-w-md mx-auto my-4 p-6 bg-gray-700 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
        </div>
    );
};
