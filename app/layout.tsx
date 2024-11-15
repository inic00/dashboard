import "@/app/ui/global.css";//引入全局样式
import { inter } from '@/app/ui/fonts';//引入全局字体
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
