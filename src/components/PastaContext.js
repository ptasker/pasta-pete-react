import React from "react";

export const PastaInfo = {
    spicy: {
        background: 'red'
    },
    mild: {
        background: 'green'
    }
}

export const PastaContext = React.createContext(
    PastaInfo.spicy // default value
);
