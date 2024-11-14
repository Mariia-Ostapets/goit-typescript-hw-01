// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

let variable: string | number;
variable = "cat";
variable = 25;

type EnableOrDisable = 'enable' | 'disable';
let value: EnableOrDisable;
value = 'enable';
value = 'disable';