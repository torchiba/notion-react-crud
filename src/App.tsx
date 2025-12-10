// src/App.tsx
import { useState } from "react";
import Button from "./components/atoms/Button";
import Heading from "./components/atoms/Heading";
import NotionItemForm from "./components/molecules/NotionItemForm";

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
      <section>
        <Heading>アイテム一覧</Heading>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "12px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  borderBottom: "1px solid #ccc",
                  padding: "8px"
                }}
              >
                 タイトル
              </th>
              <th
                style={{
                  textAlign: "left",
                  borderBottom: "1px solid #ccc",
                  padding: "8px"
                }}
              >
                ステータス
              </th>
              <th
                style={{
                  textAlign: "left",
                  borderBottom: "1px solid #ccc",
                  padding: "8px"
                }}
              >
                 更新日時
              </th>
              <th
                style={{
                  textAlign: "left",
                  borderBottom: "1px solid #ccc",
                  padding: "8px"
                }}
              >
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyItems.map((item) => (
              <tr key={item.id}>
                <td
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: "8px",
                  }}
                >
                  {item.title}
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: "8px",
                  }}
                >
                  {item.status}
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: "8px",
                  }}
                >
                  {item.updateAt}
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: "8px",
                    display: "flex",
                    gap: "8px"
                  }}
                >
                  <Button>編集</Button>
                  <Button>削除</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default App;