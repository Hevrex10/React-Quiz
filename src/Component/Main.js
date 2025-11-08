function Main({ children }) {
  return (
    <main className="flex flex-col items-center justify-start w-full min-h-screen px-4 sm:px-8 md:px-16 py-6 sm:py-10 bg-white">
      <div className="w-full max-w-3xl">{children}</div>
    </main>
  );
}

export default Main;
