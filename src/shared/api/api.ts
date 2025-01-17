import axios from 'axios'

import { ITunesResponse } from '@/shared/types/types'

const BASE_URL = 'https://itunes.apple.com/search'

export const fetchITinesData = async (searchTerm: string): Promise<ITunesResponse> => {
	const response = await axios.get<ITunesResponse>(BASE_URL, {
		params: { term: searchTerm },
	})

	return response.data
}
