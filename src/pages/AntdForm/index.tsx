import { ProForm, ProFormText } from '@ant-design/pro-components'

const AntdForm = () => {
    const [form] = ProForm.useForm()

    return (
        <ProForm
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
        </ProForm>
    )
}

export default AntdForm
