import SideNav from '@/app/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
    <html lang="en">
      <body className="flex flex-col h-screen items-center justify-center">
        {children}
      </body>
    </html>
	);
}