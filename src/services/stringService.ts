// TODO confirmar que el servicio está correctamente definido
export const truncate = (str:string, no_words:number) => {
    return str.split(" ").splice(0,no_words).join(" ").concat('...');
}