// import { GalleryVerticalEnd } from "lucide-react";
import siteIcons from "@/assets/icons/siteIcons";

import { LoginForm } from "@/components/login-form";
import { Link } from "react-router-dom";

export default function LoginPage() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2 bg-secondary">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2 md:justify-start pt-">
					<Link to="/" className="flex items-center  font-medium">
						<div className="flex  w-20 items-center justify-center rounded-md  text-primary-foreground">
							<img src={siteIcons.logo2} alt="qupid logo" />
						</div>
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">
						<LoginForm />
					</div>
				</div>
			</div>
			<div className="relative hidden bg-muted lg:block">
				<img
					src="/placeholder.svg"
					alt="Image"
					className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
		</div>
	);
}
