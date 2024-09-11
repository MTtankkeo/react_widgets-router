import { createRoot } from "react-dom/client";
import { Route, Router, RouterBinding } from "@web-packages/react-widgets-router";

function Root() {
    setTimeout(() => RouterBinding.instance.push("/sub/sub2"), 1000);

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
    return (
        <>
            <h1>Hello, World! (Page2)</h1>
            <Router>
                <Route path="/sub1" element={<p>sub1</p>} default={true}></Route>
                <Route path="/sub2" element={<p>sub2</p>}></Route>
            </Router>
        </>
    )
}

createRoot(document.getElementById("render") as HTMLElement).render(<Root />)