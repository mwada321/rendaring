import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memo()でコンポーネントを囲うことにより、propsが変更されない限り、再レンダリングされない。
// 複数の要素で成り立っているものや今後肥大化が予想される場合は行う。
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた");
  // レンダリングコストが高い処理とする
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("2000回ループ");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
