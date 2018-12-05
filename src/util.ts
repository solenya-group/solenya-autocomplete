import { button, HValue } from "solenya"

export const closeButton = (...values: HValue[]) =>
    button({
        class: 'close d-inline-flex', type: 'button'
    },
        ...values,
        "×"
    )

export const mapSingleOrMultiple = <T,U> (isMulti: boolean, value: T | T[], mapping: (val: T) => U) =>
    isMulti ?
        (<T[]>value).map (x => mapping (x)) :
        mapping (<T>value)

export const KeyCode = {
    Enter: 13,
    Escape: 27,
    Delete: 8,    
    Up: 38,
    Down: 40
}
      