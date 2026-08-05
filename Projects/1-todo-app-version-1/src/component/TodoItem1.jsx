function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "5/8/2026";

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

export default TodoItem1;
