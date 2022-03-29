
const getList = () => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
            try {
                const todos = window.localStorage.getItem("todos");
                resolve(JSON.parse(todos || "[]"));
            }
            catch (error) {
                console.error("Erro GET List:", error);
                reject([]);
            }
        // }, 2000);
    });
};

const putList = (todos) => {
    return new Promise((resolve, reject) => {
        try {
            window.localStorage.setItem("todos", JSON.stringify(todos));
            resolve(true);
        }
        catch (error) {
            console.error("Erro GET List:", error);
            reject(false);
        }
    });
};

export const ToDoService = {
    getList,
    putList
};