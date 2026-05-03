export default function ProgressBar({ value }) {
  return (
    <div style={{ background: "#eee", height: 10, borderRadius: 5 }}>
      <div
        style={{
          width: value + "%",
          height: "100%",
          background: "green",
          borderRadius: 5
        }}
      />
    </div>
  );
}