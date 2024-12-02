import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import zhCn from 'antd/es/locale/zh_CN'
import enUS from 'antd/es/locale/en_US'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConfigProvider locale={zhCn}>
            <App />
        </ConfigProvider>
    </StrictMode>
)
