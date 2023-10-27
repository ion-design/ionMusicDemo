// Generated with Ion on 10/18/2023, 2:54:50 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=62:374
import clsx from 'clsx';
type ToggleItemProps = {
	text?: string;
	state?: 'active' | 'inactive' | 'disabled';
};

function ToggleItem({ text = 'Music', state = 'active' }: ToggleItemProps) {
	return (
		<div
			className={clsx({
				'flex h-fit items-center justify-center gap-2.5 rounded-lg px-3 py-1 font-Inter text-xs font-semibold leading-[15px]':
					true,
				'bg-white text-black': state === 'active',
				'text-[#717179]': state === 'inactive',
				'text-[#b2b2b7]': state === 'disabled',
			})}
		>
			<div>{text}</div>
		</div>
	);
}
export default ToggleItem;
