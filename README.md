<div align="center">
  <img width="200px" src="https://github.com/user-attachments/assets/7c426bcd-9a8c-447a-a82c-972447d90882">
  <h1>React Widgets Router</h1>
  <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>v1.0.0-dev</th>
          </tr>
        </tbody>
    </table>
</div>

# Introduction
This package is a router that provides transition animations and fully preserves the state of previous elements, offering an experience close to a Web standard API.

## Usage
This below codes are a simple example of the basic usage of this package.

```ts
 * return (
 *     <Router keepAlive={false}>
 *         <Route path="/example-1" component={ExamplePage1} keepAlive={true} />
 *         <Route path="/example-2" component={ExamplePage2} keepAlive={true} />
 *         <Route path="/example-3" element={<ExamplePage3 />} />
 *         <Route path="/example-4" element={<>Hello, World!</>} />
 *     </Router>
 * )
```

### Without hooks and globally
```tsx
function ExamplePage1() {
    return (
        <button onClick={() => RouterBinding.instance.push("/exmaple-2")}>
            Go to /example-2
        </button>
    )
}
```

### With hooks and locally
```tsx
function ExamplePage2() {
    const route = useRoute();

    return (
        <button onClick={() => route("/exmaple-1")}>
            Go to /example-1
        </button>
    )
}
```