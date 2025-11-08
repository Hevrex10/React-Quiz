import { useQuiz } from "../Context/Context";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];

  if (!question) return null;

  return (
    <div className="question w-full max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md">
      {/* Question Text */}
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        {question.question}
      </h4>

      {/* Options Component */}
      <Options question={question} />
    </div>
  );
}

export default Question;
