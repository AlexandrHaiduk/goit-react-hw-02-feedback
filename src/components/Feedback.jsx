export const Feedback = ({ addFeedback }) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <button
        type="button"
        name="good"
        onClick={e => {
          console.log(e);
          console.log(e.currentTarget);
        }}
      >
        Good
      </button>
      <button type="button" name="neutral" onClick={addFeedback}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={addFeedback}>
        Bad
      </button>
    </>
  );
};
