import React, { useState } from 'react'
import { Cascader, type CascaderProps } from 'antd'
import qs from 'qs'

interface Option {
    value?: string | number | null
    label: React.ReactNode
    children?: Option[]
    isLeaf?: boolean
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

const CascaderFunc: React.FC = () => {
    const [options, setOptions] = useState<Option[]>(optionLists)
    const [number, setNumber] = useState(100)

    const onChange: CascaderProps<Option>['onChange'] = (value, selectedOptions) => {
        console.log(value, selectedOptions)
    }

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

    const loadData = async (selectedOptions: Option[]) => {
        const targetOption = selectedOptions[selectedOptions.length - 1]

        // load options lazily
        targetOption.children = await loadDataAsync(targetOption.value)
        setOptions([...options])
    }

    return <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect />
}

export default CascaderFunc
