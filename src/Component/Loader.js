export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center space-y-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">
        Loading questions...
      </p>
    </div>
  );
}
