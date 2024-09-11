import { createRoot } from "react-dom/client";
import { Route, Router, RouterBinding } from "@web-packages/react-widgets-router";
import { useState } from "react";

function Root() {
    setTimeout(() => RouterBinding.instance.push("/sub"), 1000);

    return (
        <Router>
            <Route path="/"    component={Page1} />
            <Route path="/sub" component={Page2} />
        </Router>
    )
}

function Page1() {
    return <h1>Hello, World! (Page1)</h1>
}

function Page2() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Hello, World! (Page2)</h1>
            <div style={{maxHeight: "100px", overflowY: "auto"}}>
                <h1>Scrollable 1</h1>
                <h1>Scrollable 2</h1>
                <h1>Scrollable 3</h1>
                <h1>Scrollable 4</h1>
                <h1>Scrollable 5</h1>
                <h1>Scrollable 6</h1>
                <h1>Scrollable 7</h1>
                <h1>Scrollable 8</h1>
                <h1>Scrollable 9</h1>
            </div>
        </>
    )
}

createRoot(document.getElementById("render") as HTMLElement).render(<Root />)