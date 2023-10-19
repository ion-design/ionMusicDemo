// Generated with Ion on 10/18/2023, 2:54:50 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=62:284
import MusicButton from 'components/ion/MusicButton';
import MusicHeader from 'components/ion/MusicHeader';
import MusicSideBar from 'components/ion/MusicSideBar';
import Playlist from 'components/ion/Playlist';
import Song from 'components/ion/Song';
import ToggleItem from 'components/ion/ToggleItem';

function MusicDemo() {
	return (
		<div className="flex w-screen h-screen flex-col items-start rounded-lg border-2 border-[#e4e4e7] bg-white">
			<MusicHeader signedin={true} />
			<div className="flex w-full h-full items-start border-t border-[#e4e4e7]">
				<MusicSideBar />
				<div className="flex h-full flex-1 flex-col items-start p-8">
					<div className="flex w-full items-start justify-between">
						<div className="flex items-start gap-1 rounded-lg bg-[#f4f4f5] p-1">
							<ToggleItem text="Music" state="active" />
							<ToggleItem text="Podcasts" state="inactive" />
							<ToggleItem text="Live" state="disabled" />
						</div>
						<MusicButton text="Add music" icon="left" color="secondary" />
					</div>
					<div className="flex w-full flex-col items-start gap-2 border-b border-[#e4e4e7] py-5 font-Inter">
						<div className="text-2xl font-semibold leading-[29px] text-black">Listen Now</div>
						<div className="text-sm leading-[17px] text-[#86868d]">
							Top picks for you. Updated Daily.
						</div>
					</div>
					<div className="flex w-full items-start gap-5 py-4">
						<Song title="React Rendezvous" artist="Ethan Byte" image="pen" />
						<Song artist="Nina Netcode" title="Async Awakenings" image="dj" />
						<Song artist="Lena Logic" title="The Art of Reusability" image="sax" />
						<Song artist="Beth Binary" title="Stateful Symphony" image="guitar" />
					</div>
					<div className="flex w-full flex-col items-start gap-2 border-b border-[#e4e4e7] py-4 font-Inter text-2xl font-semibold leading-[29px] text-black">
						<div>Your Playlists</div>
					</div>
					<div className="flex w-full items-start gap-5 py-4">
						<Playlist title="Old is Gold" art="disk" />
						<Playlist title="Spring 2021" art="sun" />
						<Playlist title="RnB Bangers" art="volume" />
						<Playlist title="Summer 2021" art="summer" />
						<Playlist title="Chill Drive" art="drive" />
						<Playlist title="LoFi Flow" art="headphones" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default MusicDemo;
