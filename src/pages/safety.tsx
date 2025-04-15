import SafetyTips from "@/components/Pages/Safety/SafetyTips";
import { useEffect } from "react";

const SafetyTipsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<SafetyTips />
		</div>
	);
};
export default SafetyTipsPage;
