import { ProForm, ProFormCascader, ProFormText } from '@ant-design/pro-components'
import { Cascader, CascaderProps } from 'antd'
import qs from 'qs'
import { useEffect, useState } from 'react'

interface Option {
    value?: string | number | null
    label: React.ReactNode
    children?: Option[]
    isLeaf?: boolean
}

type FormField = {
    name: string
    password: string
    cascader: string[]
}

const optionLists: Option[] = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        isLeaf: false
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        isLeaf: false
    }
]

const AntdForm = () => {
    const [form] = ProForm.useForm<FormField>()
    const [optionsState, setOptionsState] = useState<Option[]>([])

    const loadData = (selectedOptions: Option[]) => {
        console.log('selectedOptions: ', selectedOptions)
        const targetOption = selectedOptions[selectedOptions.length - 1]
        console.log('targetOption: ', targetOption)
        if (targetOption.value) {
            loadDataAsync(targetOption.value).then((res) => {
                console.log('res****: ', res)
                targetOption.children = res
                setOptionsState([...optionsState])
            })
        } else {
            setOptionsState([])
        }
    }

    /**
     * 从接口获取数据
     * @param selectedPath
     * @returns
     */
    const loadDataAsync = async (selectedPath?: string | number) => {
        console.log('selectedPath: ', selectedPath)

        const params = qs.stringify({
            node: selectedPath
        })

        const res = await fetch(`http://127.0.0.1:3000/getNodes?${params}`, {
            method: 'GET'
        })
        const data = await res.json()
        return data.nodes
    }

    /**
     * 递归加载数据
     * @param valuePath
     * @returns
     */
    const loadDataRecursively = (valuePath: string[]) => {
        if (valuePath.length === 0) return

        let currentOptions = optionsState
        let currentPath: string = ''

        const loadNext = (index: number) => {
            if (index >= valuePath.length) {
                return
            }
            const targetValue = valuePath[index]
            currentPath = currentPath ? `${currentPath}/${targetValue}` : targetValue
            console.log('currentPath: ', currentPath)
            console.log('currentOptions: ', currentOptions)

            const targetOption = currentOptions.find((item) => item.value === targetValue)
            console.log('targetOption: ', targetOption)
            if (!targetOption) {
                return
            }
            if (!targetOption.children) {
                loadData([targetOption])
            }
            currentOptions = targetOption.children || []
            loadNext(index + 1)
        }
        loadNext(0)
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await loadDataAsync()
            setOptionsState([...res])
        }
        fetchData()
        form.setFieldsValue({
            name: '123',
            password: 'xxxxxx',
            cascader: ['zhejiang', 'hangzhou']
        })
    }, [])

    useEffect(() => {
        const cascader = form.getFieldValue('cascader')
        console.log('cascader: ', cascader)
        if (cascader.length > 0) {
            loadDataRecursively(form.getFieldValue('cascader'))
        }
    }, [form.getFieldValue('cascader')])

    return (
        <ProForm
            layout='horizontal'
            labelAlign='right'
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            form={form}
            style={{ width: 400 }}
            onFinish={(values) => {
                console.log(values)
                console.log(form.getFieldsValue())
            }}
        >
            <ProFormText name={'name'} label='Name' rules={[{ required: true }]}></ProFormText>
            <ProFormText.Password
                name={'password'}
                label='Password'
                rules={[{ required: true }]}
            ></ProFormText.Password>
            <ProFormCascader
                name={'cascader'}
                label='Cascader'
                fieldProps={{ options: optionsState, loadData }}
            ></ProFormCascader>
            <Cascader loadData={loadData} options={optionsState}></Cascader>
        </ProForm>
    )
}

export default AntdForm
