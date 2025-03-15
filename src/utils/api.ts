import * as proto from "../generated/protocol";

export async function fetchTasks() {
  console.time("Proto の fetch 時間");
  const res = await fetch("http://localhost:3001/tasks", {
    headers: { Accept: "application/x-protobuf" },
    cache: "no-store"
  });

  // arrayBuffer(): バイナリデータとして取得
  const buffer = await res.arrayBuffer();
  // Uint8Array: protobufのデコード用に準備
  const uint8Array = new Uint8Array(buffer);

  const taskResponse = proto.TaskResponse.decode(uint8Array);
  console.timeEnd("Proto の fetch 時間");
  return taskResponse.tasks;
};

export async function fetchBooks() {
  console.time("JSON の fetch 時間");
  const res = await fetch("http://localhost:3001/books", {
    cache: "no-store"
  });
  const data = await res.json();
  console.timeEnd("JSON の fetch 時間");
  return data;
};