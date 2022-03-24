
function Button({ adicionar, excluir, children, ...props }) {

    const exibirAdicionar = adicionar && !children;
    const exibirExcluir = excluir && !children && !adicionar;

    return(
        <>
            <button {...props}>
                {exibirAdicionar && "+"}
                {exibirExcluir && "x"}
                {children && children}
            </button>
        </>
    );
}

export { Button };

