const HEAD = (
  <div
    style={{
      width: "35px",
      height: "35px",
      borderRadius: "100%",
      border: "8px solid #e84393",
      position: "absolute",
      top: "35px",
      right: "-20px",
      boxShadow: "0 0 10px rgba(232, 67, 147, 0.3)",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "8px",
      height: "70px",
      background: "#e84393",
      position: "absolute",
      top: "85px",
      right: 0,
      borderRadius: "4px",
      boxShadow: "0 0 10px rgba(232, 67, 147, 0.3)",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "70px",
      height: "8px",
      background: "#e84393",
      position: "absolute",
      top: "105px",
      right: "-70px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "70px",
      height: "8px",
      background: "#e84393",
      position: "absolute",
      top: "105px",
      right: "8px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "70px",
      height: "8px",
      background: "#e84393",
      position: "absolute",
      top: "145px",
      right: "-63px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "70px",
      height: "8px",
      background: "#e84393",
      position: "absolute",
      top: "145px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "35px",
          width: "8px",
          background: "#e84393",
          marginLeft: "84px",
          position: "absolute",
          top: 0,
          right: 0,
          borderRadius: "4px",
          boxShadow: "0 0 10px rgba(232, 67, 147, 0.3)",
        }}
      />
      <div
        style={{
          height: "8px",
          width: "140px",
          background: "#e84393",
          marginLeft: "84px",
          borderRadius: "4px",
          boxShadow: "0 0 10px rgba(232, 67, 147, 0.3)",
        }}
      />
      <div
        style={{
          height: "315px",
          width: "8px",
          background: "#e84393",
          marginLeft: "84px",
          borderRadius: "4px",
          boxShadow: "0 0 10px rgba(232, 67, 147, 0.3)",
        }}
      />
      <div
        style={{
          height: "8px",
          width: "175px",
          background: "#e84393",
          borderRadius: "4px",
          boxShadow: "0 0 10px rgba(232, 67, 147, 0.3)",
        }}
      />
    </div>
  );
}
