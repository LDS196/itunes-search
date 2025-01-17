import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { fetchITinesData } from '@/shared/api/api'

export const useITunesSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const { data, isLoading, error } = useQuery(['itunesSearch', searchTerm], () => {
		if (!searchTerm) return Promise.resolve(null);
		return fetchITinesData(searchTerm);
	})

	const handleSearch = (term: string) => {
		setSearchTerm(term)
	}

	return { data, isLoading, error, handleSearch }
}