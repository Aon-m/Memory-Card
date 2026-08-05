export default function LoadingScreen({ message = "calibrating" }) {
  return (
    <section className="container--fixed container--flex flex-column gap-2 loading-screen">
      <div className="spinner" aria-hidden="true" />
      <p
        className="loader loader--custom text text-white text-3 text-600"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style={{ "--custom-message": `"${message}..."` }}
      />
    </section>
  );
}
