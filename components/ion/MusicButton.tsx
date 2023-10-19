// Generated with Ion on 10/18/2023, 2:54:50 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=62:381
import clsx from 'clsx';
type MusicButtonProps = {
	text?: string,
	icon?: 'none' | 'left' | 'right',
	color?: 'primary' | 'secondary' | 'tertiary',
};

function MusicButton({ text = 'Button', icon = 'none', color = 'primary' }: MusicButtonProps) {
	return (
		<div
			className={clsx({
				'flex h-fit items-center justify-center gap-2 rounded-lg px-4 py-2 font-Inter text-xs font-bold leading-[15px] text-white': true,
				'bg-[#18181b] hover:bg-[#42424b]': color === 'primary',
				'bg-[#7c98b6] hover:bg-[#45586c]': color === 'secondary',
				'bg-[#b19472] hover:bg-[#d6b48c]': color === 'tertiary',
			})}
		>
			{icon === 'left' && (
				<img src="/images/MusicDemo/Vector.svg" alt="Vector" className="h-3 w-3" />
			)}
			<div>{text}</div>
			{icon === 'right' && (
				<img src="/images/MusicDemo/Vector-5.svg" alt="Vector" className="h-3 w-3" />
			)}
		</div>
	);
}
export default MusicButton;
