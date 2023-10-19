// Generated with Ion on 10/18/2023, 2:54:50 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=62:498
import clsx from 'clsx';
import Link from 'next/link';
type PlaylistProps = {
	title?: string;
	art?: 'disk' | 'heat' | 'drive' | 'headphones' | 'sun' | 'volume' | 'summer' | 'tape';
};

function Playlist({ title = 'Soundtracks', art = 'disk' }: PlaylistProps) {
	const artImages: Record<NonNullable<PlaylistProps['art']>, string> = {
		disk: '/images/MusicDemo/disk-image.png',
		heat: '/images/MusicDemo/heat-image.png',
		drive: '/images/MusicDemo/drive-image.png',
		headphones: '/images/MusicDemo/dj-image.png',
		sun: '/images/MusicDemo/sun-image.png',
		volume: '/images/MusicDemo/volume-image.png',
		summer: '/images/MusicDemo/summer-image.png',
		tape: '/images/MusicDemo/tape-image.png',
	};
	return (
		<div className="flex h-fit flex-col items-start gap-2 font-Inter text-sm font-semibold leading-[17px] text-black">
			<Link href="/playlist" passHref>
				<img
					className="h-[150px] w-[150px] rounded-lg object-cover cursor-pointer"
					alt="disk-image"
					src={artImages[art]}
				/>
			</Link>
			<div>{title}</div>
		</div>
	);
}
export default Playlist;
