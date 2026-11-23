const { useState } = React;
const root = ReactDOM.createRoot(document.getElementById("root"));

function getValue(text){
    //Complete
}

function Page() {
    //Collect variables to change later
    const [input, setInput] = useState("");
    const [header, setPrinted] = useState("New Conditionals");

    //Return page. Also handling event object as function parameter
    return (
        <>
            <h1>{header}</h1>
            <input/>
            <br/>
            <button>Change Title</button>
        </>
    );
}

root.render(<Page/>);