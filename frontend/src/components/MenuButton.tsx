import { ReactNode } from "react";

interface MenuButtonProps {
    onClick: () => void;
    disabled?: boolean;
    buttonState?: "is-active" | "";
    children: ReactNode
}

const buttonStyles:{
    isActive: string;
    isDisabled: string;
} = {
    isActive: "text-green-500",
    isDisabled: "text-gray-400"
}

export const MenuButton = ({onClick, disabled, buttonState, children}: MenuButtonProps) => {
    return (
        <div className="max-w-fit px-1">
            <button className={disabled ? buttonStyles.isDisabled : buttonState === "is-active" ? buttonStyles.isActive : ""} 
            onClick={onClick} disabled={disabled}>
                {children}
            </button>
        </div>
    )
}