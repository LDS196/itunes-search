import { Theme } from '@radix-ui/themes'
import { ReactNode } from 'react'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	return <Theme className={`radix-themes`}>{children}</Theme>
}
