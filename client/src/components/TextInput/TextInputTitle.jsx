export default function TextInputTitle() {
  return (
    <div>
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        required
        minlength="3"
        size="10"
      />
    </div>
  );
}
