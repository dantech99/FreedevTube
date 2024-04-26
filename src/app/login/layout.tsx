import '../(client)/globals.css'
export const metadata = {
  title: 'FreedevTube | Login',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}