interface TodoData {
  id: string;
  text: string;
  complete: boolean;
}


class Todo {
  id: string;
  text: string;
  complete: boolean;

  constructor({  text = '', complete = false } : Partial<TodoData>) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete;
  }

  private uuidv4(): string {
    let uuid: string = [1e7] + '' + -1e3 + -4e3 + -8e3 + -1e11;
    return (uuid).replace(/[018]/g, (c) =>
      (
        Number(c) ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
      ).toString(16)
    );
  }
}
