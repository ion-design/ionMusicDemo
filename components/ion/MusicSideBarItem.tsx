// Generated with Ion on 10/18/2023, 2:54:50 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=62:325
type MusicSideBarItemProps = {
	text?: string,
};

function MusicSideBarItem({ text = 'Listen Now' }: MusicSideBarItemProps) {
	return (
		<div className="flex h-fit w-full items-center gap-2 rounded-lg p-3 font-Inter text-xs font-semibold leading-[15px] text-black hover:bg-[#f4f4f5]">
			<img src="/images/MusicDemo/ListVector.svg" alt="ListVector" className="h-3 w-3" />
			<div>{text}</div>
		</div>
	);
}
export default MusicSideBarItem;
