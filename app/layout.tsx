import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'Ascend C 学习工坊 · Kernel 直调入门', description:'按模块学习 Ascend C，制定自学计划，记录实践与复习进度。', icons:{icon:'/favicon.svg'} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="zh-CN"><body>{children}</body></html>; }
