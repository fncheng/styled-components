import { forwardRef, RefObject, useImperativeHandle, useState } from 'react'

export interface LazyRef {
    lazy: () => void
    count: number
}

interface LazyProps extends React.HTMLAttributes<HTMLDivElement> {
    ref: RefObject<LazyRef>
    onSome?: () => void
}

const Lazy = forwardRef<LazyRef, LazyProps>((props, ref) => {
    const [state, setState] = useState({
        count: 0
    })
    
    // const divRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => ({
        // 暴露给父组件的方法
        lazy: () => {
            console.log('say lazy')
        },
        count: state.count
    }))

    const handleIncrement = () => {
        setState((prev) => ({ ...prev, count: prev.count + 1 }))
    }

    return (
        <div ref={ref} {...props}>
            <h3>lazy</h3>
            <button onClick={handleIncrement}>{state.count}</button>
        </div>
    )
})

export default Lazy
