
enum status {
    tbd  = "To Be Done",
    completed   = "Completed",
}

export interface Tasks {
    _id: string,
    userId: string,
    text: string,
    dueDate: string
    taskStatus: status
  }