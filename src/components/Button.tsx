import * as React from "react"

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
	onClick?: (e: any) => void
    className?: string
}

const Button: React.FC<IButtonProps> = ({children, onClick, className}) => (
	// TODO get type atribute from props.
	<button onClick={onClick} className={className} type="submit">
		{children}
	</button>
)

Button.defaultProps = {
	children: null,
	onClick: () => {},
    className: "btn btn-default",
}
export default Button;