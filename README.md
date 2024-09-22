<div align="center">
  <img width="200px" src="https://github.com/user-attachments/assets/7c426bcd-9a8c-447a-a82c-972447d90882">
  <h1>React Widgets Router</h1>
  <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>v1.0.0-beta2</th>
          </tr>
        </tbody>
    </table>
    You need to learn more about the <a href="https://github.com/react-widgets/react_widgets">react-widgets</a> package!
</div>

# Introduction
This package is a router that provides transition animations and fully preserves the state of previous elements, offering an experience close to a Web standard API.

> __See Also__<br>
> The `keep-alive` feature is enabled by default and documented, but the options for keep-alive have not yet been made configurable or customizable.
> See Also, If you want the change-log by version for this package. refer to [Change Log](CHANGELOG.md) for details.

# Preview
The image below is a simple use gif of [Quark Icons](https://quarkicons.com/) and a website created using @web-package/react-widgets-router and @web-package/react-widgets.

![preview](https://github.com/user-attachments/assets/9d548362-05da-4b50-8288-ed410e2ffd33)

## Usage
This below codes are a simple example of the basic usage of this package.

> See Also, Instead of setting the `default` attribute to true, you can also set the path attribute to `*`.

```ts
return (
    <Router keepAlive={false}>
        <Route path="/example-1" component={ExamplePage1} keepAlive={true} />
        <Route path="/example-2" component={ExamplePage2} keepAlive={true} />
        <Route path="/example-3" element={<ExamplePage3 />} default={true} />
        <Route path="/example-4" element={<>Hello, World!</>} />
    </Router>
)
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
You need to keep that in mind about this feature is an experimental stage.

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

## The Properties of CSS
| Name | Description | Default |
| ---- | ----------- | ---- |
| --router-fadein-keyframe | This variable is animation name of a fade-in transition keyframe for this router. | None
| --router-fadein-duration | This variable is animation duration of a fade-in transition for this router. | 0.3s
| --router-fadeout-keyframe | This variable is animation name of a fade-out transition keyframe for this router. | None
| --router-fadeout-duration | This variable is animation duration of a fade-out transition for this router. | 0.3s
