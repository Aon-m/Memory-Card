import "./Loader.scss";

export default function LoadingScreen({ message = "calibrating" }) {
  return (
    <section className="container--fixed container--flex flex-column gap-2">
      <div className="spinner" aria-hidden="true" />
      <p
        className="loader loader--custom text text-white text-1 text-600 text-center"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style={{ "--custom-message": `"${message}..."` }}
      />
    </section>
  );
}
