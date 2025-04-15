import TermsConditions from "@/components/Pages/Terms/TermsConditions";
import { useEffect } from "react";
const Terms = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<TermsConditions />
		</>
	);
};
export default Terms;
