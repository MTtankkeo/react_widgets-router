import { createRoot } from "react-dom/client";
import { Route, Router, useLocation } from "@web-packages/react-widgets-router";
import { useState } from "react";

function Root() {
    return (
        <Router>
            <Route path="/"    element={<>Root</>} />
            <Route path="/app" component={Page} />
        </Router>
    )
}

function Page() {
    const [count, setCount] = useState(0);
    const location = useLocation();

    return (
        <>
            <h1>Hello, World! (Page2) {location.relPath}</h1>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <Router>
                <Route path="/sub1" element={<>sub1</>} />
                <Route path="/sub2" element={<>sub2</>} />
            </Router>
        </>
    )
}

createRoot(document.getElementById("render") as HTMLElement).render(<Root />)