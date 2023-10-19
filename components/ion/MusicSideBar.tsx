// Generated with Ion on 10/18/2023, 2:54:50 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=62:476
import ContactButton from 'components/ion/ContactButton';
import MusicSideBarItem from 'components/ion/MusicSideBarItem';

function MusicSideBar() {
	return (
		<div className="flex h-full w-[260px] flex-col items-start border-r border-[#e4e4e7] p-2">
			<div className="flex flex-col items-start gap-2.5 px-3 pb-3 pt-6 font-Inter text-xl font-semibold leading-[24px] text-black">
				<div>Discover</div>
			</div>
			<MusicSideBarItem text="Listen Now" />
			<MusicSideBarItem text="Browse" />
			<MusicSideBarItem text="Radio" />
			<div className="flex flex-col items-start gap-2.5 px-3 pb-3 pt-6 font-Inter text-xl font-semibold leading-[24px] text-black">
				<div>Library</div>
			</div>
			<MusicSideBarItem text="Playlists" />
			<MusicSideBarItem text="Songs" />
			<MusicSideBarItem text="Made for You" />
			<MusicSideBarItem text="Artists" />
			<MusicSideBarItem text="Albums" />
			<div className="flex flex-col items-start gap-2.5 px-3 pb-3 pt-6 font-Inter text-xl font-semibold leading-[24px] text-black">
				<div>Playlists</div>
			</div>
			<MusicSideBarItem text="Recently Added" />
			<MusicSideBarItem text="Recently Played" />
			<MusicSideBarItem text="Top Songs" />
			<MusicSideBarItem text="Top Albums" />
			<MusicSideBarItem text="Top Artists" />
			<ContactButton />
		</div>
	);
}
export default MusicSideBar;
