import HelpAndSupport from "@/components/Pages/HelpAndSupport/HelpAndSupport";
import { useEffect } from "react";
const HelpPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<HelpAndSupport />
		</>
	);
};
export default HelpPage;
