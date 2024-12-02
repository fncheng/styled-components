import { Pagination, Table } from 'antd'
import { ColumnType } from 'antd/es/table'
import { memo, useState } from 'react'

interface RecordType {
    key: React.Key
    name: string
    age: number
    address: string
}

const data: RecordType[] = Array.from({ length: 100 }, (_, i) => ({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
}))

const MyTable = memo(() => {
    const [scrollHeight, setScrollHeight] = useState({ y: 300, x: 300 })
    const [showAddress, setShowAddress] = useState<boolean>(true)

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
        showAddress
            ? {
                  title: 'Address',
                  dataIndex: 'address',
                  key: 'address',
                  render: (text: string, record, index) => {
                      console.log('text: ', text, record, index)
                      return <a>Address: {text}</a>
                  }
              }
            : {}
    ]

    console.log('reder')

    return (
        <div>
            <button onClick={() => setShowAddress(!showAddress)}>showAddress</button>
            <Table virtual columns={columns} dataSource={data} scroll={scrollHeight} />
            <Pagination total={500}></Pagination>
        </div>
    )
})
MyTable.displayName = 'MyTable'

export default MyTable
