import PrivacyPolicy from "@/components/Pages/Privacy/PrivacyPolicy";
import { useEffect } from "react";

const privacy = () => {
	// window.scrollY = 0;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<PrivacyPolicy />
		</div>
	);
};
export default privacy;
