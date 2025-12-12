// src/App.tsx
import { useState } from "react";
import Button from "./components/atoms/Button";
import Heading from "./components/atoms/Heading";
import NotionItemForm from "./components/molecules/NotionItemForm";
import NotionItemList from "./components/organism/NotionItemList";

type NotionItem = {
  id: number;
  title: string;
  status: "TODO" | "Doing" | "Done"
  updateAt: string;
}

const dummyItems: NotionItem[] = [
  {
    id: 1,
    title: "Notion API の仕様を読む",
    status: "TODO",
    updateAt: "2025-12-10 10:00"
  },
  {
    id: 2,
    title: "React コンポーネント構造を整理する",
    status: "Doing",
    updateAt: "2025-12-11 11:00"
  },
  {
    id: 3,
    title: "Storybook で UI カタログを整える",
    status: "Done",
    updateAt: "2025-12-09 21:00"
  },
]

function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "16px", maxWidth: 800, margin: "0 auto"}}>
      {/* ヘッダー */}
      <header style={{ marginButtom: "24px"} }>
        <Heading>Notion CRUD Dashboard</Heading>
        <p>Notion データベースと連携するための学習用ダッシュボード</p>
      </header>

      {/* 新規追加フォーム */}
      <section style={{ marginBottom: "32px"}}>
        <NotionItemForm
          onSubmit={(payload) => {
            // ダミー
            alert(
              `送信予定の値：\nタイトル: ${payload.title}\n詳細: ${payload.detail}`
            );
          }}
        />
      </section>

      {/* 一覧表示エリア */}
      <NotionItemList
        items={dummyItems}
        onEdit={(id) => {
          alert(`ID ${id}: Edit!`)
        }}
        onDelete={(id) => {
          alert(`ID ${id}: Delete!`)
        }}
      />
    </div>
  )
}

export default App;