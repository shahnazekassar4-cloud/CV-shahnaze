import type { ReactNode } from "react";
import XIcon from "./Icones/xIcon";

type PopupProps = {
	isVisible: boolean;
	onClose?: () => void;
	children?: ReactNode;
	title?: string;
	className?: string;
};

export default function Popup(props: PopupProps) {
	const { children, title, isVisible, className } = props;
	if (isVisible)
		return (
			<div className="popup-layout" onClick={props.onClose}>
				<div
					className={`popup-info text-justify ${className}`}
					onClick={(e) => e.stopPropagation()}
				>
					<div className="flex justify-between ">
						{title && <b className="mb-3">{title}</b>}
						<button onClick={props.onClose} className="bouton-croix w-7">
							<XIcon />
						</button>
					</div>

					{children}
				</div>
			</div>
		);
}
