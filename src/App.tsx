import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";
import words from "./wordList.json";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord);
  console.log(wordToGuess);

  const [guessedLetters, setGuessLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  });

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        margin: "10px auto",
        alignItems: "center",
        padding: "0 20px",
        backgroundColor: "#2d3436",
        borderRadius: "20px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          color: "#fff",
          backgroundColor: "#9b59b6",
          padding: "10px 20px",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          margin: "10px 0",
          fontFamily: "'Comic Sans MS', cursive, sans-serif",
        }}
      >
        {isWinner && "🎉 WINNER! - Press Enter to play again 🎮"}
        {isLoser && "😅 Nice Try - Press Enter to play again 🎮"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
