import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Copyright = () => {
	return (
		<main className="min-h-screen pt-20 lg:pt-28 px-2 lg:px-28">
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
				<section>
					<div>
						<p>
							This Copyright Policy applies to the Qupid app and website
							operated by COVA Technology. It outlines how we protect and
							enforce intellectual property rights in relation to the content,
							design, and features of the Qupid platform.
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
										info@qupidapp.com{" "}
									</a>
								</p>
							</li>
						</ul>
					</div>
				</section>
			</section>
		</main>
	);
};
export default Copyright;
