import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import zhCn from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import Router from './router/index.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConfigProvider locale={zhCn}>
            <Suspense fallback={<div>global loading...</div>}>
                <Router />
            </Suspense>
        </ConfigProvider>
    </StrictMode>
)
