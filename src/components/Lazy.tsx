import { forwardRef, useImperativeHandle, useRef } from 'react'

export interface LazyRef {
    lazy: () => void
}

interface LazyProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<LazyRef>
    onSome?: () => void
}

const Lazy = forwardRef<LazyRef, LazyProps>((props, ref) => {
    const divRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => ({
        // 暴露给父组件的方法
        lazy: () => {
            console.log('say lazy')
        }
    }))

    return (
        <div ref={divRef} {...props}>
            lazy
        </div>
    )
})

export default Lazy
