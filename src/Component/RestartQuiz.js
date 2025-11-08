import { useQuiz } from "../Context/Context";

function RestartQuiz() {
  const { dispatch } = useQuiz();

  async function restart() {
    dispatch({ type: "restart" });

    try {
      const res = await fetch("/data/questions.json");
      if (!res.ok) throw new Error("Error: " + res.status);
      const data = await res.json();
      dispatch({ type: "dataRecieved", payload: data });
    } catch (err) {
      dispatch({ type: "dataFailed" });
    }
  }

  return (
    <div className="mt-4 flex justify-center">
      <button
        className="btn btn-ui px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
        onClick={restart}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default RestartQuiz;
