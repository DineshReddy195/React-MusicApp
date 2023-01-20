export default function Music({ value, index }) {
    return (
      <div className="App">
        <audio controls>
          <source src={value.previewURL} type="audio/mpeg" />
        </audio>{" "}
        <br />
        <span>{value.name}</span>
      </div>
    );
  }