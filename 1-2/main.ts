class Task {
  id: number;
  subject: string;
  discription: string;
  done: boolean;
  date: Date;
  constructor(
    id: number,
    subject: string,
    description: string,
    done: boolean,
    date: Date
  ) {
    this.id = id;
    this.subject = subject;
    this.discription = description;
    this.done = done;
    this.date = date;
  }
  public set setId(newId: number) {
    this.id = newId;
  }
  public get setId() {
    return this.id;
  }
  public set setSubject(newSubject: string) {
    this.subject = newSubject;
  }
  public get getSubject() {
    return this.subject;
  }

  public set setDescription(newDescriotion: string) {
    this.discription = newDescriotion;
  }
  public get getDescription() {
    return this.discription;
  }

  public set setStatus(newStatus: boolean) {
    this.done = newStatus;
  }
  public get setStatus() {
    return this.done;
  }
  public set setDate(newdate: Date) {
    this.date = newdate;
  }
  public get setDate() {
    return this.date;
  }
}

let tasks: Task[] = [];

function add(newTask: Task) {
  tasks.push(newTask);
}

function remove(id: number) {
  const deleted = tasks.filter((item) => item.id == id);
  return deleted;
}
