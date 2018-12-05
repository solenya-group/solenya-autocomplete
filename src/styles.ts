import { AutoCompleteViewProps } from "./types"

export const defaultViewProps = <AutoCompleteViewProps> {
    attrs: {
        style: {           
            border: "1px solid #ced4da",
            borderRadius: "0.25rem",    
            padding: "0.2rem",
            backgroundColor: "white",
            height: "auto",
            minHeight: "calc(2.25rem + 2px)",
            position: "relative"
        }
    },
    inputAttrs: {
        style: {
            border: "none",
            maxWidth: "99%",    
            flex: "1 1 auto",
            height: "auto",    
            margin: "0 0.25rem",       
            $nest: {
                "&:focus": {
                    boxShadow: "none",  
                    border: "none !important",
                    outlineColor: "white"
                }
            }
        }
    },
    inputFocusAttrs: {
        style: {
            $debugName: "psuedo-focus",
            borderColor: "#80bdff",
            outline: 0,
            boxShadow: "0 0 0 0.2rem rgba(0, 123, 255, 0.25)"                
        }
    },
    selectionAttrs: {
        style: {
            border: "1px solid #bec4ca",
            borderRadius: "0.25rem",
            backgroundColor: "rgba(0, 123, 255, 0.25)",
            margin: "0.2rem",    
            padding: "0 0.25rem",
            height: "1.5rem",
            fontSize: "90%"
        }
    },
    suggestionsAttrs: {
        style: {
            overflowY: "auto",
            maxHeight: "300px",
            display: 'block'
        }
    },
    suggestionAttrs: {
        style: {
        }
    }
}