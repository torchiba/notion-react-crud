// src/components/molescules/NotionItemForm.tsx
import { useState, FormEvent, ChangeEvent } from "react";
import Heading from "../atoms/Heading";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";

type NotionItemFormProps = {
    onSubmit?: (payload: { title: string; detail: string }) => void;
};

const NotionItemForm = ({ onSubmit }: NotionItemFormProps ) => {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (onSubmit) {
            onSubmit ({title, detail});
        }
        setTitle("");
        setDetail("");
    }

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleDetailChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDetail(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "8px", maxWidth: 400}}>
            <Heading>Notion アイテム追加フォーム</Heading>

            <label style={{ display: "grig", gap: "4px" }}>
                <span>タイトル</span>
                <TextInput value={title} onChange={handleTitleChange} />
            </label>

            <label style={{ display: "grig", gap: "4px" }}>
                <span>詳細</span>
                <textarea
                    value={detail}
                    onChange={handleDetailChange}
                    rows={4}
                    style={{ padding: "4px" }}
                />
            </label>

            <div style={{ marginTop: "8px"}}>
                <Button type="submit">追加</Button>
            </div>
        </form>
    )
}

export default NotionItemForm;