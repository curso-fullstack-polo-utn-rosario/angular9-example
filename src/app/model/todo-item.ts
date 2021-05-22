export class TodoItem {
  id: number;
  description: string;
  isCompleted: boolean = false;
  hiddenEdit = true;

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
