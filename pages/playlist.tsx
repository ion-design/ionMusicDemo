// Generated with Ion on 10/18/2023, 3:18:16 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=111:2402
import MusicButton from 'components/ion/MusicButton';
import MusicHeader from 'components/ion/MusicHeader';
import MusicSideBar from 'components/ion/MusicSideBar';
import PlaylistItem from 'components/ion/PlaylistItem';
import Link from 'next/link';

function MusicDemoPlaylist() {
	return (
		<div className="flex w-screen h-screen flex-col items-start rounded-lg border-2 border-[#e4e4e7] bg-white">
			<MusicHeader signedin={true} />
			<div className="flex w-full h-full items-start border-t border-[#e4e4e7]">
				<MusicSideBar />
				<div className="flex h-full flex-1 flex-col items-start gap-5 p-8">
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
					<div className="flex w-full items-center gap-7 pb-5">
						<img
							className="h-[98px] w-[98px] rounded-lg object-cover"
							alt="disk-image"
							src="/images/MusicDemoPlaylist/disk-image.png"
						/>
						<div className="flex flex-col items-start justify-center gap-2">
							<div className="font-Inter text-2xl font-semibold leading-[29px] text-black">
								Old is Gold
							</div>
							<div className="font-Inter text-sm leading-[17px] text-[#86868d]">
								Jam out to some oldies and get your retro on.
							</div>
						</div>
					</div>
					<div className="flex w-full flex-col items-start gap-2.5 border-t border-[#e4e4e7] py-1">
						<PlaylistItem
							title="Good Day Sunshine"
							album="Revolver"
							duration="3:03"
							artist="The Beatles"
							year="1966"
							src="drive"
						/>
						<PlaylistItem
							year="1971"
							artist="Led Zeppelin"
							duration="2:50"
							album="LED ZEPPELIN IV"
							title="Stairway to Heaven"
							src="sun"
						/>
						<PlaylistItem
							year="1980"
							artist="Bob Marley"
							duration="3:56"
							album="Uprising"
							title="Could you be loved"
							src="sax"
						/>
						<PlaylistItem
							year="1996"
							artist="Tupac Shakur"
							duration="5:13"
							album="How Do U Want it"
							title="Hit 'Em Up"
							src="dj"
						/>
						<PlaylistItem
							year="1982"
							artist="Michael Jackson"
							duration="4:55"
							album="Thriller"
							title="Billie Jean"
							src="volume"
						/>
						<PlaylistItem
							year="1991"
							artist="Nirvana"
							duration="5:02"
							album="Nirvana"
							title="Smells like Teen Spirit"
							src="pen"
						/>
					</div>
					<MusicButton text="Add Song" icon="left" color="secondary" />
				</div>
			</div>
		</div>
	);
}
export default MusicDemoPlaylist;
