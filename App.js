const parent = React.createElement("div", { id: "parent" }, 
React.createElement("div", {id: "child"}, [
React.createElement("h1", {}, "I'm in h1 tag"),
React.createElement("h2", {}, "I'm in h2 tag"),
]));


const heading = React.createElement("h1", {id: "main"}, "Hello Aparna from React!");

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(parent);