function Error() {
  return (
    <div className="flex justify-center items-center min-h-[50vh] px-4">
      <p className="text-red-600 bg-red-100 border border-red-300 rounded-xl px-6 py-3 text-center text-sm sm:text-base md:text-lg font-medium shadow-sm">
        ❌ There was an error fetching questions.
      </p>
    </div>
  );
}

export default Error;
