export type TableConfig = {
    [key: string]: {
        title: string;
        type: 'string' | 'date' | 'number';
    };
};

export type TableContent = {
    [key: string]: number | string;
}[];

export type SelectOptions = {
    value: string | number;
    title: string;
}[];