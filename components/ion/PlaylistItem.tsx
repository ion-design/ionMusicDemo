// Generated with Ion on 10/18/2023, 3:18:16 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=117:2562
import clsx from 'clsx';
type PlaylistItemProps = {
	year?: string;
	album?: string;
	artist?: string;
	title?: string;
	duration?: string;
	src?: 'drive' | 'sun' | 'summer' | 'dj' | 'guitar' | 'sax' | 'pen' | 'volume';
};

function PlaylistItem({
	year = '1966',
	album = 'Revolver',
	artist = 'The Beatles',
	title = 'Good Day Sunshine',
	duration = '3:03',
	src = 'drive',
}: PlaylistItemProps) {
	const srcImages: Record<NonNullable<PlaylistItemProps['src']>, string> = {
		drive: '/images/MusicDemoPlaylist/drive-image.png',
		sun: '/images/MusicDemoPlaylist/sun-image.png',
		summer: '/images/MusicDemoPlaylist/summer-image.png',
		dj: '/images/MusicDemoPlaylist/dj-image.png',
		guitar: 'REPLACE-117:2685',
		sax: '/images/MusicDemoPlaylist/sax-image.png',
		pen: '/images/MusicDemoPlaylist/pen-image.png',
		volume: '/images/MusicDemoPlaylist/volume-image.png',
	};
	return (
		<div className="flex h-fit w-full items-center gap-7 bg-white font-Inter text-sm font-semibold leading-[17px]">
			<img
				className="h-[60px] w-[60px] rounded-lg object-cover"
				alt="drive-image"
				src={srcImages[src]}
			/>
			<div className="flex h-full flex-1 items-center justify-between border-b border-[#e4e4e7]">
				<div className="flex h-full w-[175px] flex-col items-start justify-center gap-1">
					<div className="text-black">{title}</div>
					<div className="text-[#86868d]">{album}</div>
				</div>
				<div className="text-black">{artist}</div>
				<div className="flex h-full w-[300px] items-center justify-between px-2 text-black">
					<div>{year}</div>
					<div>{duration}</div>
				</div>
			</div>
		</div>
	);
}
export default PlaylistItem;
