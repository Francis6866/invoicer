import React from 'react'

const Policies = () => {
  return (
    <section>
      {/* policies */}
      <div className='bg-[#163300] text-white text-center py-15 space-y-4'>
        <h2 className='font-urbanist font-[600] text-[64px] leading-[100%]'>Privacy Policy For Invoicer</h2>
        <p className='font-outfit text-[20px] font-[600] '>Date: 1st june 2025</p>
      </div>

      {/* list */}
     <div className='pt-10 pb-25 max-md:px-4'>
          <div className='max-w-[1126px] mx-auto font-poppins text-[16px] leading-[100%] space-y-5'>
            <p>
                <span className='font-bold'>Invoicer</span> (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our inventory management system designed for small and medium-sized enterprises (SMEs) on mobile devices.
            </p>

            <ul className='list-decimal space-y-5 px-4'>
                <li className='space-y-5'>
                    <span className='font-bold'>Information We Collect</span>
                    <p>When you use <span className='font-bold'>Invoicer</span>, we may collect the following types of information:</p>

                    {/* ABCD */}
                    <ul className='list-[upper-alpha] space-y-5'>
                        <li>
                            <span className='font-bold'>Business Information</span>

                            {/* bullet */}
                            <ul className='list-disc list-inside'>
                                <li>Business name and contact details</li>
                                <li>Business registration number or tax ID (optional)</li>
                            </ul>
                        </li>{/* A */}

                        <li>
                            <span className='font-bold'>Inventory Data</span>

                            {/* bullet */}
                            <ul className='list-disc list-inside'>
                                <li>Product names, categories, descriptions, and SKUs</li>
                                <li>Stock quantities and adjustments</li>
                                <li>Purchase and sales history</li>
                                <li>Supplier and vendor details</li>
                                <li>Pricing, discounts, and transaction records</li>
                            </ul>
                        </li>{/* B */}

                        <li>
                            <span className='font-bold'>User Account Data</span>

                             {/* bullet */}
                             <ul className='list-disc list-inside'>
                                <li>Name and email address</li>
                                <li>Phone number</li>
                                <li>Login credentials (securely stored)</li>
                            </ul>
                        </li>{/* C */}

                        <li>
                            <span className='font-bold'>Device and Usage Information</span>

                             {/* bullet */}
                             <ul className='list-disc list-inside'>
                                <li>Device type and operating system</li>
                                <li>IP address</li>
                                <li>App usage behavior (e.g., feature usage)</li>
                                <li>Crash reports and performance logs</li>
                            </ul>
                        </li>{/* D */}
                    </ul>
                </li>{/* 1 */}

                <li>
                    <span className='font-bold'>How We Use Your Information</span>
                    <p>We use your data to:</p>

                    <ul className='list-disc list-inside'>
                        <li>Manage and track your inventory</li>
                        <li>Save your sales and stock data securely</li>
                        <li>Generate reports and insights for business analysis</li>
                        <li>Improve app performance and user experience</li>
                        <li>Send relevant notifications or updates</li>
                        <li>Respond to customer support inquiries</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </li>{/* 2 */}

                <li>
                    <span className='font-bold'>Data Sharing and Disclosure</span>
                    <p>We do not sell your personal or business information.</p>

                    <ul className='list-disc list-inside py-4'>
                        <p>We may share your information with:</p>
                        <li>Cloud service providers that store your data securely</li>
                        <li>Analytics tools to improve app performance</li>
                        <li>Law enforcement or regulators, only if required by law</li>
                    </ul>

                    <p>All third-party providers we work with are bound by strict confidentiality and data protection agreements.</p>
                </li>{/* 3 */}

                <li>
                    <span className='font-bold'>Data Storage and Security</span>
                    <p>
                        Your data is stored using secure cloud infrastructure. We apply standard encryption protocols and access controls to protect your information from unauthorized access, disclosure, or loss.
                    </p>
                    <p className='py-4'>However, no system is completely immune to breaches, so we recommend that you use strong passwords and keep your credentials confidential.</p>
                </li>{/* 4 */}

                <li>
                    <span className='font-bold'>Data Retention</span>
                    <p>
                        We retain your data as long as you maintain an account with us, and for a reasonable period thereafter to comply with legal, accounting, or auditing requirements. You may request to delete your data at any time.
                    </p>
                </li>{/* 5 */}

                <li>
                    <span className='font-bold'>Information We Collect</span>
                    <p>Depending on your location, you may have the right to:</p>

                    <ul className='list-disc list-inside'>
                        <li>Access, correct, or delete your personal data</li>
                        <li>Export your data for use elsewhere</li>
                        <li>Object to certain types of data processing</li>
                        <li>Withdraw consent at any time (where applicable)</li>
                    </ul>

                    <p className='py-4'>To exercise your rights, contact us at hello@invoicer.io.</p>
                </li>{/* 6 */}

                <li>
                    <span className='font-bold'>Children's Privacy</span>
                    <p>Invoicer is intended for business use only and not for individuals under the age of 13. We do not knowingly collect data from minors.</p>
                </li>{/* 7 */}

                <li>
                    <span className='font-bold'>Changes to This Policy</span>
                    <p>We may update this policy from time to time. If we make significant changes, we will notify you within the app or via email. Continued use of the app after updates means you agree to the revised policy.</p>
                </li>{/* 8 */}

                <li>
                    <span className='font-bold'>Contact Us</span>
                    <p>If you have any questions about this Privacy Policy or how your data is handled, please contact:</p>

                    <ul className='py-4'>
                        <li>Email: hello@invoicer.io</li>
                        <li>Company Name: Invoicer</li>
                    </ul>
                </li>{/* 9 */}
            </ul>
          </div>
      </div>
    </section>
  )
}

export default Policies
