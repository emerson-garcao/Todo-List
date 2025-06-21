const criarItem = () => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
        <input type="checkbox">
        <div>teste do item 1</div>
        <input type="button" value="x">
    `
    document.getElementById('todoList').appendChild(item);

}
const chama = () =>{
    alert("ola")
}