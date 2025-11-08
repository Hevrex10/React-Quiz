import { useQuiz } from "../Context/Context";

function Options({ question }) {
  const { dispatch, answer } = useQuiz();

  function handleClick(index) {
    if (answer === null) dispatch({ type: "newAnswer", payload: index });
    console.log(index);
  }

  function getButtonClass(index) {
    const isCorrect = index === question.correctOption;
    const isSelected = index === answer;

    const baseClasses = "btn btn-option w-full sm:w-48 py-2 sm:py-3 transition-colors duration-300";

    if (answer === null) return baseClasses; 
    if (isCorrect) return `${baseClasses} correct`; // correct answer
    if (isSelected && !isCorrect) return `${baseClasses} totally-wrong`; // user selected wrong
    return baseClasses; // other unselected options
  }

  return (
    <div className="options flex flex-col sm:flex-row sm:flex-wrap gap-2 w-full justify-center">
      {question.options.map((opt, index) => (
        <button
          key={index}
          disabled={answer !== null}
          className={getButtonClass(index)}
          onClick={() => handleClick(index)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Options;
