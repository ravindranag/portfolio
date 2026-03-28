import Logo from "@/features/shared/Logo";
import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";

const Header = () => {
	return (
		<header
			className={hstack({
				padding: "16px",
				justifyContent: "center",
			})}
		>
			<div className={hstack({ gap: 2, alignItems: "center" })}>
				<Logo width="12px" height="12px" />
				<span className={css({ fontWeight: 700 })}>/</span>
				<span className={css({ fontWeight: 700 })}>~</span>
			</div>
		</header>
	);
};

export default Header;
