const parent = React.createElement("div", {
    id: "hello"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "i am akshay saini")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
