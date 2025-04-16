import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect } from "react";
const Copyright = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main className="min-h-screen pt-20 lg:pt-28 px-2 lg:px-28 py-20">
			<div>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />

						<BreadcrumbItem>
							<BreadcrumbPage className="text-primary">
								Copyright
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<section className="mt-2">
				<section>
					<h2>Effective Date: November 16, 2024</h2>
				</section>
				<section className="mt-4">
					<div>
						<h3 className="text-lg font-semibold mb-2">Copyright Notice</h3>
						<p>
							© {new Date().getFullYear()} Qupid by COVA Technology. All rights
							reserved. This website, application, and all content, features,
							and functionality (including but not limited to all information,
							software, text, displays, images, video, and audio, and the
							design, selection, and arrangement thereof) are the exclusive
							property of COVA Technology or its licensors and are protected by
							international copyright, trademark, patent, trade secret, and
							other intellectual property or proprietary rights laws.
						</p>
					</div>

					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-2">Use of Content</h3>
						<p>
							You may not copy, reproduce, distribute, modify, create derivative
							works of, publicly display, publicly perform, republish, download,
							store, or transmit any of the material on Qupid, except as
							permitted under these terms or with explicit written permission
							from COVA Technology.
						</p>
					</div>
					<div>
						<ul className="list-decimal ml-5 sm:ml-10">
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">Ownership of Content</h3>
								<p>
									All content, features, and functionality on Qupid—including
									but not limited to text, graphics, logos, icons, images, audio
									clips, videos, software, and code—are the exclusive property
									of COVA Technology or its licensors, and are protected by
									copyright, trademark, and other applicable intellectual
									property laws.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">User-Generated Content</h3>
								<p>
									By posting or uploading content on Qupid, you grant us a
									worldwide, non-exclusive, royalty-free license to use,
									reproduce, distribute, and display your content in connection
									with the Services. You must ensure that any content you post
									does not infringe the rights of any third party.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">
									Copyright Infringement Notification
								</h3>
								<p>
									If you believe that any content on Qupid infringes your
									copyright, please contact us with the following details:
								</p>
								<ul className="list-disc ml-5 sm:ml-10">
									<li>Your full name and contact information</li>
									<li>
										A description of the copyrighted work you claim has been
										infringed
									</li>
									<li>
										The URL or specific location of the allegedly infringing
										content
									</li>
									<li>
										A statement that you have a good faith belief the use is
										unauthorized
									</li>
									<li>
										A statement, under penalty of perjury, that the information
										provided is accurate and that you are the copyright owner or
										authorized to act on the owner’s behalf
									</li>
									<li>Your electronic or physical signature</li>
								</ul>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">
									How We Handle Infringement Notices
								</h3>
								<p>
									Upon receiving a valid copyright infringement notice, we will
									investigate and take appropriate action, including removing or
									disabling access to the infringing content and, where
									applicable, suspending or terminating the account of repeat
									infringers.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">Restrictions on Use</h3>
								<p>
									You may not copy, reproduce, distribute, modify, create
									derivative works of, publicly display, or otherwise exploit
									any part of the Qupid platform without our express written
									consent. Unauthorized use of any content from Qupid may
									violate copyright laws and could result in legal action.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">Contact</h3>
								<p>
									For copyright-related inquiries, please contact us at: <br />
									<a href="mailto:info@qupidapp.com " className="underline">
										info@qupidapp.com
									</a>
								</p>
							</li>
						</ul>
					</div>
					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-2">
							User-Generated Content
						</h3>
						<p>
							Users retain ownership of the content they submit, post, or
							display on Qupid. By submitting content, users grant Qupid a
							worldwide, non-exclusive, royalty-free, fully-paid, transferable,
							sub-licensable license to use, reproduce, distribute, prepare
							derivative works of, display, and perform such content in
							connection with the operation and promotion of the platform.
						</p>
						<p className="mt-2">
							Qupid does not claim ownership over your personal content, but we
							may use it to operate, develop, and improve the platform, subject
							to our
							<a
								href="/privacy-policy"
								className="text-blue-600 underline ml-1"
							>
								Privacy Policy
							</a>
							.
						</p>
					</div>

					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-2">Trademarks</h3>
						<p>
							The Qupid name, logo, and all related names, logos, product and
							service names, designs, and slogans are trademarks of COVA
							Technology or its affiliates or licensors. You must not use such
							marks without the prior written permission of COVA Technology.
						</p>
					</div>

					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-2">Third-Party Content</h3>
						<p>
							Qupid may display content provided by third parties, including
							user contributions, advertisers, or other users. All such content
							is the sole responsibility of the entity that makes it available.
							Qupid is not liable for any errors or omissions in such content or
							any damages arising from its use.
						</p>
					</div>

					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-2">Violations</h3>
						<p>
							If you believe that any content on Qupid violates your copyright,
							please notify us immediately at
							<a
								href="mailto:info@qupidapp.com"
								className="text-blue-600 underline ml-1"
							>
								info@qupidapp.com
							</a>{" "}
							with the appropriate documentation. We reserve the right to remove
							infringing content and take action against repeat offenders as
							outlined in our DMCA Policy.
						</p>
					</div>

					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-2">Modifications</h3>
						<p>
							We reserve the right to update or modify this Copyright Notice at
							any time. Changes will be effective immediately upon posting to
							this page. We encourage users to review this page periodically to
							stay informed of their rights and responsibilities.
						</p>
					</div>

					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-2">Contact Us</h3>
						<p>
							If you have any questions about this Copyright Notice or wish to
							report an intellectual property concern, please contact us at
							<a
								href="mailto:info@qupidapp.com"
								className="text-blue-600 underline ml-1"
							>
								info@qupidapp.com
							</a>
							.
						</p>
					</div>
				</section>
			</section>
		</main>
	);
};
export default Copyright;
