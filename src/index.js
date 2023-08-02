const addButton = document.getElementById("add-button");
const input = document.querySelector("input");
const incompleteList = document.querySelector(".incomplete-list");

const onClickAdd = () => {
  addIncompleteList(input.value);
  input.value = "";
};

const addIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  // クラス名付与
  li.className = "list-row";

  // p生成
  const todoText = document.createElement("p");
  // クラス名付与
  todoText.className = "todo-text";
  // inputに入力されたtodoをpタグに挿入
  todoText.innerText = text;

  // 完了button生成
  const completeButton = document.createElement("button");
  // 完了buttonにテキスト挿入
  completeButton.innerText = "完了";

  // 完了buttonにイベント付与
  completeButton.addEventListener("click", (e) => {
    deleteFromIncompleteList(e.target.parentNode);
    const addText = todoText.innerText;
    e.target.parentNode.textContent = null;
    
    // li生成
    const li = document.createElement("li");
    // クラス名付与
    li.className = "list-row";
    // p生成
    const p = document.createElement("p");
    // クラス名付与
    p.className = "todo-text";
    // inputに入力されたtodoをpタグに挿入
    p.innerText = addText;
    // 戻るボタン生成
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';

    backButton.addEventListener('click', (e) => {
      const target = e.target.parentNode;
      completeList.removeChild(target);

      addIncompleteList(text);
    });
    
    const completeList = document.getElementById("complete-list");
    
    li.appendChild(p);
    li.appendChild(backButton);
    completeList.appendChild(li);
  });

  // 削除button生成
  const deleteButton = document.createElement("button");
  // 削除buttonにテキスト挿入
  deleteButton.innerText = "削除";

  // 削除buttonにイベント付与
  deleteButton.addEventListener("click", (e) => {
    deleteFromIncompleteList(e.target.parentNode);
  });

  // liの子要素に追加してulにliを追加
  li.appendChild(todoText);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  incompleteList.appendChild(li);
};

// 未完了のTODOからTODOを削除
const deleteFromIncompleteList = (target) => {
  incompleteList.removeChild(target);
};

addButton.addEventListener("click", () => onClickAdd());
