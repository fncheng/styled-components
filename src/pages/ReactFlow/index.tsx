import {
    addEdge,
    Background,
    BackgroundVariant,
    Controls,
    DefaultEdgeOptions,
    type Edge,
    type Node,
    ReactFlow,
    useEdgesState,
    useNodesState
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useCallback } from 'react'

const initalNodes: Node[] = [
    { id: '1', position: { x: 300, y: 100 }, data: { label: 'label 1' } },
    { id: '2', position: { x: 300, y: 200 }, data: { label: 'label 2' } }
]
const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }]

const Flow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initalNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    const defaultEdgeOptions: DefaultEdgeOptions = {
        // type: 'smoothstep',
        animated: true
    }

    const onConnect = useCallback(
        (params: any) => {
            setEdges((eds) => addEdge(params, eds))
        },
        [setEdges]
    )

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                defaultEdgeOptions={defaultEdgeOptions}
            >
                <Controls />
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
        </div>
    )
}

export default Flow
