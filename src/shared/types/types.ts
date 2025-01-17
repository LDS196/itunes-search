
export interface ITunesResponse {
	resultCount: number; // Количество результатов
	results: ITunesTrack[]; // Список треков
}

export interface ITunesTrack {
	wrapperType?: string; // Тип обёртки, например, "track"
	kind?: string; // Тип контента, например, "song"
	artistId?: number; // ID артиста
	collectionId?: number; // ID коллекции (альбома)
	trackId?: number; // ID трека
	artistName?: string; // Имя артиста
	collectionName?: string; // Название коллекции (альбома)
	trackName?: string; // Название трека
	collectionCensoredName?: string; // Цензурированное название коллекции
	trackCensoredName?: string; // Цензурированное название трека
	artistViewUrl?: string; // Ссылка на страницу артиста
	collectionViewUrl?: string; // Ссылка на страницу коллекции
	trackViewUrl?: string; // Ссылка на страницу трека
	previewUrl?: string; // Ссылка на предпрослушивание трека
	artworkUrl30?: string; // Ссылка на обложку (30x30)
	artworkUrl60?: string; // Ссылка на обложку (60x60)
	artworkUrl100?: string; // Ссылка на обложку (100x100)
	collectionPrice?: number; // Цена коллекции
	trackPrice?: number; // Цена трека
	releaseDate?: string; // Дата выхода
	collectionExplicitness?: string; // Является ли коллекция откровенной
	trackExplicitness?: string; // Является ли трек откровенным
	discCount?: number; // Количество дисков в коллекции
	discNumber?: number; // Номер диска
	trackCount?: number; // Количество треков в коллекции
	trackNumber?: number; // Номер трека
	trackTimeMillis?: number; // Длительность трека в миллисекундах
	country?: string; // Страна
	currency?: string; // Валюта
	primaryGenreName?: string; // Основной жанр
	isStreamable?: boolean; // Можно ли стримить
}
