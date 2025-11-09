export function ConfirmDeleteTodo({ onConfirm }: { onConfirm: () => void }) {
  return (
    <div>
      <h2>Are you sure you want to delete this?</h2>
      <button type="button" onClick={onConfirm}>
        DELETE
      </button>
    </div>
  );
}
