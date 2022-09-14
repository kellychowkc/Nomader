export function selectedItem() {
    return {
        type: "@@Interest/SELECT" as const,
    };
}

export function unselectedItem() {
    return {
        type: "@@Interest/UNSELECT" as const,
    };
}

export type InterestActions =
    | ReturnType<typeof selectedItem>
    | ReturnType<typeof unselectedItem>;
