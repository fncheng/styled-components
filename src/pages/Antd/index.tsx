import { Tabs, TabsProps } from "antd";
import { useState } from "react";

enum TAB_NAME {
    "MY_TEMPLATE" = "0",
    "PRESET_TEMPLATE" = "1",
}
const TabNameMap = {
    [TAB_NAME.MY_TEMPLATE]: "我的模板",
    [TAB_NAME.PRESET_TEMPLATE]: "预置模板",
};

const Tab = () => {
    const [activeKey] = useState(TAB_NAME.MY_TEMPLATE);
    const [status, setStatus] = useState(false);

    const items: TabsProps["items"] = [
        {
            label: TabNameMap[TAB_NAME.MY_TEMPLATE],
            key: TAB_NAME.MY_TEMPLATE,
            children: <div>我的模板</div>,
            disabled: status,
        },
        {
            label: TabNameMap[TAB_NAME.PRESET_TEMPLATE],
            key: TAB_NAME.PRESET_TEMPLATE,
            children: <div>预置模板</div>,
        },
    ];

    return (
        <>
            <button onClick={() => setStatus(!status)}>status</button>
            <Tabs defaultActiveKey={activeKey} items={items}></Tabs>
        </>
    );
};

export default Tab;
