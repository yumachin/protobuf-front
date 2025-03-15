"use client";

import { useEffect, useState } from "react";
import { fetchBooks, fetchTasks } from "../utils/api";
import { ITask } from "@/generated/protocol";
// import { makeDummyTask } from "@/mock/mock";

export default function Home() {
  // モックデータ作成
  // const data = [ makeDummyTask(1), makeDummyTask(2), makeDummyTask(3)]

  // ➀ protobuf
  const [tasks, setTasks] = useState<ITask[]>([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };
    getTasks();
  }, []);

  // ➁ JSON
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    const getBooks = async () => {
      const books = await fetchBooks();
      setBooks(books);
    };
    getBooks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task: ITask, index: number) => (
          <li key={index}>
            {task.companyName} / {task.email} / {task.deadline} / {task.task} / {task.submitTo} 
          </li>
        ))}
      </ul>
      <h1>Books</h1>
      <ul>
        {books.map((book: Book, index: number) => (
          <li key={index}>
            {book.companyName} / {book.email} / {book.deadline} / {book.task} / {book.submitTo} 
          </li>
        ))}
      </ul>
    </div>
  );
};

type Book = {
  email: string;
  companyName: string;
  deadline: string;
  task: string;
  submitTo: string;
}