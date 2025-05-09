import {
	Dialog,
	// DialogContent,
	// DialogDescription,
	// DialogHeader,
	// DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import SelectSignUp from "./Components/SelectSignUp";
// import { useState } from "react";

// import SignUpForm from "./Components/SignUpForm";

const SignUpModelPc = () => {
	// const [showEmailSignUP, setShowEmailSignUp] = useState(false);

	return (
		<Dialog>
			<DialogTrigger className=" px-8 text-primary rounded-xl outline outline-1 outline-primary hover:bg-primary hover:text-white">
				Sign Up / Login
			</DialogTrigger>

			<>
				{/* {!showEmailSignUP ? (
					<SelectSignUp setShowEmailSignUp={setShowEmailSignUp} />
				) : (
					<SignUpForm />
				)} */}
				<SelectSignUp />
			</>
		</Dialog>
	);
};
export default SignUpModelPc;
//@ts-ignore
