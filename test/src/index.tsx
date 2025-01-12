import { createRoot } from "react-dom/client";
import { Route, Router, RouterBinding, useLocation } from "@web-packages/react-widgets-router";
import { useState } from "react";

function Root() {
    return (
        <Router keepAlive={false}>
            <Route path="/"    element={<button onClick={() => RouterBinding.instance.push("/app")}>Root</button>} />
            <Route path="/app" component={Page} />
        </Router>
    )
}

function Page() {
    const [count, setCount] = useState(0);
    const location = useLocation();

    return (
        <div>
            <h1>Hello, World! (Page2) {location.relPath}</h1>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <Router>
                <Route path="/sub1" element={<>sub1</>} default />
                <Route path="/sub2" element={<>sub2</>} />
            </Router>
        </div>
    )
}

createRoot(document.getElementById("render") as HTMLElement).render(<Root />)