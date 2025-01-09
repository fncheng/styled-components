import { ProForm, ProFormRadio, ProFormUploadDragger } from '@ant-design/pro-components'
import { Radio, Select, Tabs, TabsProps, Upload } from 'antd'
import { useState } from 'react'

enum TAB_NAME {
    'MY_TEMPLATE' = '0',
    'PRESET_TEMPLATE' = '1'
}
const TabNameMap = {
    [TAB_NAME.MY_TEMPLATE]: '我的模板',
    [TAB_NAME.PRESET_TEMPLATE]: '预置模板'
}

const Tab = () => {
    const [activeKey] = useState(TAB_NAME.MY_TEMPLATE)
    const [status, setStatus] = useState(false)

    const items: TabsProps['items'] = [
        {
            label: TabNameMap[TAB_NAME.MY_TEMPLATE],
            key: TAB_NAME.MY_TEMPLATE,
            children: <div>我的模板</div>,
            disabled: status
        },
        {
            label: TabNameMap[TAB_NAME.PRESET_TEMPLATE],
            key: TAB_NAME.PRESET_TEMPLATE,
            children: <div>预置模板</div>
        }
    ]

    return (
        <section>
            <button onClick={() => setStatus(!status)}>status</button>
            <Tabs defaultActiveKey={activeKey} items={items}></Tabs>
            <Select style={{ width: 120 }}></Select>
            <ProForm
                style={{ minWidth: 400, maxWidth: 600, margin: '0 auto' }}
                onFinish={(values) => {
                    console.log(values)
                }}
            >
                <ProFormRadio.Group
                    name={'radio'}
                    options={['a', 'b', 'c', 'd']}
                ></ProFormRadio.Group>
                <ProFormUploadDragger name={'upload'}></ProFormUploadDragger>
                <Upload.Dragger name='upload2'></Upload.Dragger>
            </ProForm>
            <Radio.Group
                defaultValue={3}
                onChange={(e) => {
                    console.log(e)
                }}
            >
                <Radio.Button value={1}>1</Radio.Button>
                <Radio.Button value={2}>2</Radio.Button>
                <Radio.Button value={3}>3</Radio.Button>
            </Radio.Group>
        </section>
    )
}

export default Tab
