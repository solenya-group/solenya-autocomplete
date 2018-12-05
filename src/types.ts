import { HAttributes, DatabindProps } from 'solenya'

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

export type AutoCompleteProps<T> = Partial<IAutoCompleteProps<T>> & DatabindProps<T|T[]>

export interface AutoCompleteViewProps {
    attrs?: HAttributes,
    inputAttrs?: HAttributes
    inputFocusAttrs?: HAttributes,
    selectionAttrs?: HAttributes,
    suggestionsAttrs?: HAttributes,
    suggestionAttrs?: HAttributes
}
