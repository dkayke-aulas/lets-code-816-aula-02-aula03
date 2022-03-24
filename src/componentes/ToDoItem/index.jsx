import { Button } from "../Button";

function ToDoItem({ onClick, todo }) {
// function ToDoItem({ onExcluir, todo }) {

    // const onClick = () => {
    //     if(onExcluir) {
    //         onExcluir({todo, index});
    //     }
    // };

    return (
        <>
            <li>{todo}<Button excluir onClick={onClick}></Button></li>
            {/* <li>{todo}<Button excluir onClick={onExcluir}></Button></li> */}
        </>
    );
}

export { ToDoItem };