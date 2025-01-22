type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "clamp(2rem, 8vw, 6rem)",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        color: "#fff",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          style={{
            borderBottom: ".1em solid #e84393",
            margin: "0 3px",
          }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "#e67e22" : "#fff",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
