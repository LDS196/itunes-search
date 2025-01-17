import { SearchITunes } from '@/widgets/search-itunes/search-itunes'
import { ReactQueryProvider } from '@/providers/react-query-provider'

export default function Home() {
	return (
		<ReactQueryProvider>
				<SearchITunes />
		</ReactQueryProvider>
	)
}
