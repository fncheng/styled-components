import { Table } from 'antd'
import { ColumnType } from 'antd/es/table'
import { useRef, useState } from 'react'
import { FixedSizeGrid, FixedSizeList, VariableSizeGrid as Grid } from 'react-window'

interface RecordType {
    key: React.Key
    name: string
    age: number
    address: string
}

const columns: ColumnType<RecordType>[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <a>{text}</a>
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    }
]
const data: RecordType[] = Array.from({ length: 100 }, (_, i) => ({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
}))

const VirtualTable = ({ columns, data, scroll }: any) => {
    console.log('scroll: ', scroll)
    const gridRef = useRef<any>(null)

    const RenderVirtualList = ({ height, width }: any) => (
        <Grid
            ref={gridRef}
            columnCount={columns.length}
            columnWidth={(index) => columns[index].width}
            height={height}
            rowCount={data.length}
            rowHeight={() => 50} // 每行的固定高度
            width={width}
        >
            {({ columnIndex, rowIndex, style }) => (
                <div
                    className='virtual-table-cell'
                    style={{
                        ...style,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {data[rowIndex][columns[columnIndex].dataIndex]}
                </div>
            )}
        </Grid>
    )

    return (
        <div className='virtual-table'>
            <RenderVirtualList height={scroll.y} width={scroll.x} />
        </div>
    )
}

const MyTable = () => {
    const [scrollHeight, setScrollHeight] = useState({ y: 300, x: 300 })

    return (
        <div>
            <Table
                components={{
                    // header: {
                    //     row: (props: any) => {
                    //         return (
                    //             <div className="ant-table-row" style={{ display: 'flex' }}>
                    //                 {props.children} {/* 渲染表头 */}
                    //             </div>
                    //         )
                    //     }
                    // },
                    body: (props) => {
                        console.log('rawData: ', props)
                        return (
                            <VirtualTable
                                // {...props}
                                columns={columns}
                                data={props}
                                scroll={scrollHeight}
                            />
                        )
                    }
                }}
                columns={columns}
                dataSource={data}
                scroll={scrollHeight}
                pagination={false}
            />
        </div>
    )
}

export default MyTable
