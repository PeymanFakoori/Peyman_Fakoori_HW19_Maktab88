class Task {
  id: number;
  subject: string;
  discription: string;
  status: string;
  date: Date;
  constructor(
    id: number,
    subject: string,
    description: string,
    status: string,
    date: Date
  ) {
    this.id = id;
    this.subject = subject;
    this.discription = description;
    this.status = status;
    this.date = date;
  }
}
