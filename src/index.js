import React, { StrictMode } from "react";
import { render } from "react-dom";

const App = () => {
    return (
        <>
            <p>
                The application has been cleaned up of all the extraneous stuff
                you'll likely never use
            </p>
        </>
    );
};

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
