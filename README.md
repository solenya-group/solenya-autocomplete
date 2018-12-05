# Solenya Autocomplete

A databound autocomplete input for solenya.

# Installation

Assuming you have `solenya` installed, you will need the following npm packages:

```
solenya-autocomplete
bootstrap
popper.js
jquery
```
Currently `solenya-autocomplete` superficially depends on bootstrap & jquery for styling & menus. Those dependencies will be removed in the future.

# Usage
The usage of `AutoComplete` is as follows:

```typescript
export class AutoCompleteSample extends Component
{
    usStates: string[] = []

    @transient usStateAutocomplete = 
        new AutoComplete ({
            target: this,
            prop: () => this.usStates,
            isMultiSelect: true,
            modelToLabel: mapPropertyFromTo (usStates, c => c.code, c => c.label),
            labelToModel: mapPropertyFromTo (usStates, c => c.label, c => c.code),
            suggestor: async searchText => {
                const reg = new RegExp (searchText, "i")
                return usStates.filter (l => reg.test (l.label)).map(l => l.label)
            }
        })

    view() {
        return this.usStateAutocomplete.view ()                  
    }
}

const usStates = [
    { code: "AL", label: "Alabama" },
    { code: "AK", label: "Alaska" },
    { code: "AZ", label: "Arizona" },
    ...
}
```

Like all the built-in inputs, `AutoComplete` databinds to a property. The property type is of type `T|T[]`, where you use an array when `isMultiSelect` is true.

`modelToLabel` and `labelToModel` allow you to translate between logical values and the values the user sees. In the above example, the logical values are the state codes, while the label values are the full names of the states.

The `suggestor` is a promise that returns a list of suggestions given a `searchText`.

# Styling

You can customize the styling to the various composite elements of the autocomplete as follows:

```typescript
 this.usStateAutocomplete.view ({         
    selectionAttrs: {
        style: {
            backgroundColor: "#eee"                        
        }
    }
})            
```

# Properties

```typescript
interface IAutoCompleteProps<T>
{
    /** Can be used to prefix the input id used by the autocomplete, which is based on the property name the autocomplete is bound to. */
    prefix: string 

    /** Whether the user can select multiple items. Defaults to false. */
    isMultiSelect : boolean

    /** The maximum number of suggestions to display. Defaults to 10. */
    suggestionLimit: number

    /** Whether the databound property is updated in response to text changes. True by default. If set to false, you will need to call the autocomplete's autocomplete() method to manually trigger the autocomplete. */
    isRealtime: boolean

    /** Whether to automatically filter the results based on suggestions returned. Defaults to true, meaning that by default the suggestor doesn't need to filter the list it returns. */
    autoFilter: boolean

    /** Whether to display the autocomplete's `noResultsFoundText` courtesy message when no results are found. */
    showNoResultsFound: boolean

    /** Whether to automatically select a suggestion when there's only a single possible suggestion that matches the current input text.  */
    autoSelectSingleResult: boolean

    /** Whether the user is allowed to enter values that are not suggestions. */
    allowNonSuggestions: boolean

    /** Whether to call the suggestor with an empty value to trigger the suggestor loading and caching its values. */
    preload: boolean

    /** A promise that returns an array of suggestions given `searchText`. If `autoFilter` is `true` then filtering will be automatically applied, albeit potentially less efficiently or correctly than if you filter yourself.` */
    suggestor?: (searchText: string) => Promise<string[]>

    /** An optional function tha converts a label to your databound value. */
    labelToModel?: (label: string) => T

    /** An optional function that conversts your databound value to a label. */
    modelToLabel?: (model: T) => string

    /** A function that receives an event when the user's selection changes. */
    onSelectEvent?: (selection: string | string[]) => void    
} 
```