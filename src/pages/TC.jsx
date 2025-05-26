import React from 'react'

const TC = () => {
  return (
    <section>
      {/* T&C */}
      <div className='bg-[#163300] text-white text-center py-15 space-y-4'>
        <h2 className='font-urbanist font-[600] text-[64px] leading-[100%]'>Terms and Conditions for Invoicer</h2>
        <p className='font-outfit text-[20px] font-[600] '>Date: 1st june 2025</p>
      </div>

      {/* list */}
      <div className='pt-10 pb-40 max-md:px-4'>
        <div className='max-w-[1126px] mx-auto font-poppins text-[16px] leading-[100%] space-y-5'>

            <div className='space-y-5'>
                <p>Welcome to <span className='font-bold'>Invoicer</span>. These Terms and Conditions (“Terms”) govern your access to and use of the Invoicer mobile application (“App”), owned and operated by <span className='font-bold'>Build with Harvoxx</span> (“we”, “us”, or “our”). By downloading, accessing, or using the App, you agree to be bound by these Terms.</p>

                <p>If you do not agree with any part of these Terms, please do not use the App.</p>
            </div>

            <ul className='list-decimal space-y-5 px-4'>
                <li className='space-y-5'>
                    <span className='font-bold'>Use of the App</span>
                    <p>You may use Invoicer solely for your internal business purposes, such as managing inventory, tracking stock, recording sales and purchases, and generating reports. You must be at least 18 years old or a registered business representative to use the App.</p>

                    <ul className='list-disc list-inside'>
                        <p>You agree to:</p>
                        <li>Use the App only for lawful purposes.</li>
                        <li>Provide accurate and truthful information during account registration and use.</li>
                        <li>Keep your login credentials secure and confidential.</li>
                    </ul>
                </li>{/* 1 */}

                <li>
                    <span className='font-bold'>User Responsibilities</span>
                    <p>You are solely responsible for:</p>
                    <ul className='list-disc list-inside'>
                        <li>The content and accuracy of the data you enter (e.g., product details, pricing, stock levels).</li>
                        <li>Keeping your account and device secure.</li>
                        <li>All activity conducted under your account, even if not authorized by you.</li>
                    </ul>

                    <p className='py-4'>
                        We are not liable for any loss or damage resulting from unauthorized access to your account
                    </p>
                </li>{/* 2 */}

                <li>
                    <span className='font-bold'>Subscription and Payment (if applicable)</span>
                    <p>Some features of Invoicer may require a paid subscription. If so:</p>
                    <ul className='list-disc list-inside'>
                        <li>Prices, billing cycles, and refund policies will be clearly stated in-app or on our website.</li>
                        <li>Failure to pay may result in suspension or termination of your access to premium features.</li>
                        <li>All payments are handled securely through third-party payment processors.</li>
                    </ul>
                </li>{/* 3 */}

                <li>
                    <span className='font-bold'>Data Privacy</span>
                    <p>We collect and process data in accordance with our Privacy Policy. By using the App, you consent to our use of your information as described in that policy.</p>
                </li>{/* 4 */}

                <li>
                    <span className='font-bold'>Intellectual Property</span>
                    <p>All content, trademarks, logos, and intellectual property related to Invoicer are owned by us or our licensors. You may not:</p>
                    <ul className='list-disc list-inside'>
                        <li>Copy, modify, distribute, sell, or lease any part of the App.</li>
                        <li>Reverse-engineer or attempt to extract the source code of the App.</li>
                    </ul>
                </li>{/* 5 */}

                <li>
                    <span className='font-bold'>Restrictions</span>
                    <p>You agree not to:</p>
                    <ul className='list-disc list-inside'>
                        <li>Use the App for any illegal or unauthorized purpose.</li>
                        <li>Upload harmful or malicious content.</li>
                        <li>Interfere with the App's functionality or servers.</li>
                        <li>Violate the rights of other users or third parties.</li>
                    </ul>
                </li>{/* 6 */}

                <li>
                    <span className='font-bold'>Termination</span>
                    <p>We reserve the right to suspend or terminate your account without notice if you violate these Terms, misuse the App, or if your account remains inactive for an extended period.</p>

                    <p className='py-4'>
                        You may also delete your account at any time by contacting us at [Insert Email].
                    </p>
                </li>{/* 7 */}

                <li>
                    <span className='font-bold'>Limitation of Liability</span>
                    <p>To the maximum extent permitted by law, Invoicer and its developers shall not be liable for any:</p>
                    <ul className='list-disc list-inside'>
                        <li>Indirect, incidental, or consequential damages</li>
                        <li>Loss of data, profits, or business opportunities</li>
                        <li>Errors or omissions in your inventory or business records</li>
                    </ul>

                    <p className='py-4'>
                        Use of the App is at your own risk, and the App is provided “as is” and “as available” without warranties of any kind.
                    </p>
                </li>{/* 8 */}

                <li>
                    <span className='font-bold'>Updates and Modifications</span>
                    <p>We may update these Terms or modify the App at any time to improve functionality or comply with legal requirements. When we do, we'll notify you via email or in-app notice. Continued use of the App means you accept the updated Terms.</p>
                </li>{/* 9 */}

                <li>
                    <span className='font-bold'>Governing Law</span>
                    <p>These Terms shall be governed by and interpreted under the laws of [Insert Country/State], without regard to its conflict of law provisions.</p>
                </li>{/* 10 */}

                <li>
                    <span className='font-bold'>Contact Us</span>
                    <p>For any questions, concerns, or feedback, please contact:</p>

                    <ul className='py-4'>
                        <li>Email: hello@invoicer.io</li>
                        <li>Company Name: Invoicer</li>
                    </ul>
                </li>{/* 11 */}
            </ul>
        </div>
      </div>
    </section>
  )
}

export default TC
