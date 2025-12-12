
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import type { NotionItem } from "../../App";

type NotionItemListProps = {
    items: NotionItem[];
    onEdit?: (id: number) => void;
    onDelete?: (id: number) => void;
}

const NotionItemList = ({items, onEdit, onDelete}: NotionItemListProps) => {
    return (
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
            {items.map((item) => (
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
                  <Button
                    onClick={() => {
                        onEdit?.(item.id);
                    }}
                  >
                    編集
                  </Button>
                  <Button
                    onClick={() => {
                        onDelete?.(item.id);
                    }}
                  >
                    削除
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    )
}

export default NotionItemList;