import { Flex, Text, Link, Heading } from '@radix-ui/themes';
import Image from 'next/image';
import React, { FC } from 'react';
import { ITunesTrack } from '@/shared/types/types'

type Props = {
	item: ITunesTrack;
};

export const TunesTrack: FC<Props> = ({ item }) => {
	return (
		<Flex
			direction="row"
			align="center"
			gap="4"
			p="4"
			style={{
				border: '1px solid #ccc',
				borderRadius: '8px',
				marginBottom: '8px',
			}}
		>
			{item.artworkUrl100 && (
				<Image
					src={item.artworkUrl100}
					alt={`${item.trackName || 'Track'} cover`}
					width={100}
					height={100}
					objectFit={'cover'}
					style={{
						borderRadius: '8px',
					}}
				/>
			)}


			<Flex direction="column" gap="2">
				<Heading as="h3" size="2">
					{item.trackName || 'Unknown Track'}
				</Heading>
				<Text size="3" color="gray">
					{item.artistName || 'Unknown Artist'}
				</Text>
				{item.collectionName && (
					<Text size="2" color="gray">
						Album: {item.collectionName}
					</Text>
				)}
				{item.trackPrice && item.currency && (
					<Text size="2" color="green">
						Price: {item.trackPrice} {item.currency}
					</Text>
				)}


				<Flex direction="row" gap="2">
					{item.trackViewUrl && (
						<Link href={item.trackViewUrl} target="_blank">
							Listen
						</Link>
					)}
					{item.artistViewUrl && (
						<Link href={item.artistViewUrl} target="_blank">
							Artist
						</Link>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
};
