import AppHeader from './_components/appheder'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
        <AppHeader />
        <div className='sm:px-2 mx-2 md:px-40 py-2 bg-white rounded-md'>
            {children}
        </div>
    </div>
  )
}