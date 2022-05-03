import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("app");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  //　アロー関数は毎回新しい関数を生成していると判断される　→　propsが変わっていると判断される。
  // ChildAreaでmemo化してもpropsのonClickCloseが違うものと判断される
  // → useCallbackを使う。第２引数は見張る値を設定。
  // []を設定した場合は最初に生成したものを使う

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);
  // useMemo・・・変数のmemo化（memo、useCallbackと比較してあまり使わない）
  // []を設定した場合は最初に生成したものを使う

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
