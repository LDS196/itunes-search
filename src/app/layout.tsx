import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/providers/theme/theme'

const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'iTunes Search',
	description: 'iTunes Search API',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
