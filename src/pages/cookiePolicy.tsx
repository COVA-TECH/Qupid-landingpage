import CookiePolicy from "@/components/Pages/CookiePolicy/CookiePolicy";
import { useEffect } from "react";
const cookiePolicy = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<CookiePolicy />
		</>
	);
};
export default cookiePolicy;
