// Generated with Ion on 10/18/2023, 3:10:59 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=109:2124
import MusicHeader from 'components/ion/MusicHeader';
import MusicSideBar from 'components/ion/MusicSideBar';
import PlayingSong from 'components/ion/PlayingSong';
import SongControl from 'components/ion/SongControl';
import Link from 'next/link';

function MusicDemoPlaying() {
	return (
		<div className="flex h-screen w-screen flex-col items-start rounded-lg border-2 border-[#e4e4e7] bg-white">
			<MusicHeader signedin={true} />
			<div className="flex w-full h-full items-start border-t border-[#e4e4e7]">
				<MusicSideBar />
				<div className="flex h-full flex-1 flex-col items-start">
					<div className="flex w-full flex-1 flex-col items-start gap-2.5 p-8">
						<Link href="/" passHref>
							<div className="flex items-center gap-2 p-1 font-Inter text-xs font-semibold leading-[15px] text-[#86868d] cursor-pointer">
								<img
									src="/images/MusicDemoPlaying/left-vector.svg"
									alt="left-vector"
									className="h-3.5 w-3.5"
								/>
								<div>Back</div>
							</div>
						</Link>
						<PlayingSong />
					</div>
					<SongControl state="play" />
				</div>
			</div>
		</div>
	);
}
export default MusicDemoPlaying;
