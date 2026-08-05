function TodoItem2() {
  let todoName = "Go To College";
  let todoDate = "6/8/2026";
  return (
    <div class="row sm-row">
      <div class="col-6">{todoName}</div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger sm-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem2;
