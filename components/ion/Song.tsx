// Generated with Ion on 10/18/2023, 2:54:50 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=62:459
import clsx from 'clsx';
import Link from 'next/link';
type SongProps = {
	title?: string;
	artist?: string;
	image?: 'pen' | 'dj' | 'sax' | 'guitar';
};

function Song({ title = 'React Rendezvous', artist = 'Ethan Byte', image = 'pen' }: SongProps) {
	const imageImages: Record<NonNullable<SongProps['image']>, string> = {
		pen: '/images/MusicDemo/pen-image.png',
		dj: '/images/MusicDemo/dj-image-9.png',
		sax: '/images/MusicDemo/sax-image.png',
		guitar: '/images/MusicDemo/guitar-image.png',
	};
	return (
		<div className="flex h-fit flex-col items-start gap-2 font-Inter text-sm leading-[17px]">
			<Link href="/playing" passHref className="cursor-pointer">
				<img
					className="h-[240px] w-[240px] rounded-lg object-cover cursor-pointer"
					alt="pen-image"
					src={imageImages[image]}
				/>
			</Link>
			<div className="font-semibold text-black">{title}</div>
			<div className="text-[#86868d]">{artist}</div>
		</div>
	);
}
export default Song;
