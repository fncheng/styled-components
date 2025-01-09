type TestComponentProps = {
    component: JSX.Element
    children: JSX.Element
}

export default function TestComponent({ component, children }: TestComponentProps) {
    return (
        <>
            <h3>TestComponent</h3>
            {component}
            {children}
        </>
    )
}
