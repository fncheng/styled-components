export default function AsyncComponent({ number }: { number?: number }) {
    return (
        <div>
            AsyncComponent{'\n'}
            {number}
        </div>
    )
}
