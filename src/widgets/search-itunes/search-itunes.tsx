'use client'
import { Box, Button, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'

import { TunesTrack } from '@/shared/components/ui/ITunesTrack'
import { useITunesSearch } from '@/shared/hooks/use-itunes-search'

export const SearchITunes = () => {
	const [inputValue, setInputValue] = useState('')
	const { data, isLoading, error, handleSearch } = useITunesSearch()

	const handelSearchITunes = () => {
		handleSearch(inputValue.trim())
	}

	return (
		<div>
			<Heading as={'h1'} mb={'3'}>Find your hero</Heading>
				<Flex
					gapX={'2'}
					mb={'3'}
				>
					<TextField.Root
						type="text"
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						placeholder="Enter request"
						size="3"
					/>
					<Button
						onClick={handelSearchITunes}
						size={'3'}
						variant={'solid'}
						disabled={isLoading}
					>
						{'Search'}
					</Button>
				</Flex>


			{!!error && (
				<Text
					size={'2'}
					color={'red'}
				>
					Some Error
				</Text>
			)}

			{data && (
				<Box p={'2'}>
					<Text size={'3'}>Results:{data.results?.length}</Text>
					<ul>
						{data.results?.map(item => (
							<li key={`${item.trackId}${item.artistName}`}>
								<TunesTrack item={item} />
							</li>
						))}
					</ul>
				</Box>
			)}
		</div>
	)
}
