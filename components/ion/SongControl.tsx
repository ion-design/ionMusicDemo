// Generated with Ion on 10/18/2023, 3:10:59 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=110:2279
import clsx from 'clsx';
type SongControlProps = {
	state?: 'play' | 'pause';
};

function SongControl({ state = 'play' }: SongControlProps) {
	return (
		<div className="flex h-20 w-full items-center justify-between border-t border-[#e4e4e7] bg-white bg-opacity-[0.25] p-8">
			<div className="flex items-center justify-center gap-20 p-1">
				<img
					src="/images/MusicDemoPlaying/playmenu-vector.svg"
					alt="playmenu-vector"
					className="h-3 w-[18px]"
				/>
			</div>
			<div className="flex items-center justify-center gap-20 p-1">
				<img
					src="/images/MusicDemoPlaying/back-vector.svg"
					alt="back-vector"
					className="h-4 w-3.5"
				/>
				<img
					src="/images/MusicDemoPlaying/play-vector.svg"
					alt="play-vector"
					className={clsx({
						'w-8': true,
						'h-[41px]': state === 'play',
						'h-[43px]': state === 'pause',
					})}
				/>
				<img
					src="/images/MusicDemoPlaying/forward-vector.svg"
					alt="forward-vector"
					className="h-4 w-3.5"
				/>
			</div>
			<div className="flex items-center justify-center gap-20 p-1">
				<img
					src="/images/MusicDemoPlaying/share-vector.svg"
					alt="share-vector"
					className="h-5 w-4"
				/>
			</div>
		</div>
	);
}
export default SongControl;
