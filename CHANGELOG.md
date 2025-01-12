# 1.0.0-beta2
- Fixed an issue where the useLocation hook returned an incorrect RouterContext instance when the state in the component using it was updated.
- Fixed an issue about the copy of a `RouterContext` clone instance by to deep-copy.

# 1.0.0-beta5
- Updated the functionality of the `keepAlive` option, which controls whether the page state of individual routes is preserved. You can now enable or disable this option for each individual page.

# 1.0.0-beta6
- Fixed an issue where unnecessary listeners were registered on every state change when using the useLocation hook, causing console.assert exceptions.
- Fixed an issue where the keepAlive option could be defined globally in the Router but did not function as expected.