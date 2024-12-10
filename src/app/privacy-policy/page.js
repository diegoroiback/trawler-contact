'use client'

import dynamic from 'next/dynamic';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = dynamic(() => import('@/components/Header/Header'), { ssr: false });
const Policy = dynamic(() => import('@/components/Policy/Policy'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  const title = (
    <>
      <span>Privacy</span> policy
    </>
  )

  const text = (
    <>
    <div class="text-rich-text w-richtext">
  <p>This privacy notice for Trawler, Inc. (&quot; <strong>Company</strong>,&quot; &quot; <strong>we</strong>,&quot; &quot; <strong>us</strong>,&quot; or &quot; <strong>our</strong>&quot;), describes how and why we might collect, store, use, and/or share (&quot; <strong>process</strong>&quot;) your information when you use our services (&quot; <strong>Services</strong>&quot;), such as when you: </p>
  <ul role="list">
    <li>Visit our website at <a href="https://www.trawler.io/">https://www.trawler.io</a>, <a href="https://www.trawler.dev/">https://www.trawler.dev/</a>, , or any website of ours that links to this privacy notice </li>
  </ul>
  <ul role="list">
    <li>Engage with us in other related ways, including any sales, marketing, or events.</li>
  </ul>
  <p>
    <strong>Questions or concerns? </strong>Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:team@Trawler.io">team@Trawler.io</a>.
  </p>
  <br />
  <p>
    <strong>SUMMARY OF KEY POINTS</strong>
  </p>
  <br />
  <p>
    <strong>
      <em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click </em>
    </strong>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#toc">
      <strong>
        <em>here</em>
      </strong>
    </a>
    <strong>
      <em> to go directly to our table of contents.</em>
    </strong>
  </p>
  <br />
  <p>
    <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Trawler, Inc. and the Services, the choices you make, and the products and features you use. Click <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#personalinfo">here</a> to learn more.
  </p>
  <br />
  <p>
    <strong>Do we process any sensitive personal information?</strong> We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Click <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#sensitiveinfo">here</a> to learn more.
  </p>
  <br />
  <p>
    <strong>Do we receive any personal information about me from third parties?</strong> We do not receive any personal information about you from third parties.
  </p>
  <br />
  <p>
    <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#infouse">here</a> to learn more.
  </p>
  <br />
  <p>
    <strong>In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties. Click <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#whoshare">here</a> to learn more.
  </p>
  <br />
  <p>
    <strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#infosafe">here</a> to learn more.
  </p>
  <br />
  <p>
    <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#privacyrights">here</a> to learn more.
  </p>
  <br />
  <p>
    <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by filling out our data subject request form available <a href="https://app.termly.io/notify/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1">here</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
  </p>
  <br />
  <p>Want to learn more about what the Company does with any information we collect? Click <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#toc">here</a> to review the notice in full. </p>
  <br />
  <p>
    <strong>TABLE OF CONTENTS</strong>
  </p>
  <br />
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a>
  </p>
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
  </p>
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>
  </p>
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#cookies">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a>
  </p>
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#inforetain">5. HOW LONG DO WE KEEP YOUR INFORMATION?</a>
  </p>
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#infosafe">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
  </p>
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#infominors">7. DO WE COLLECT INFORMATION FROM MINORS?</a>
  </p>
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#privacyrights">8. WHAT ARE YOUR PRIVACY RIGHTS?</a>
  </p>
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#DNT">9. CONTROLS FOR DO-NOT-TRACK FEATURES</a>
  </p>
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#caresidents">10. DO I HAVE RIGHTS UNDER CERTAIN STATE PRIVACY LAWS?</a>
  </p>
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#policyupdates">11. DO WE MAKE UPDATES TO THIS NOTICE?</a>
  </p>
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#contact">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
  </p>
  <p>
    <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#request">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a>
  </p>
  <br />
  <p>
    <strong>1. WHAT INFORMATION DO WE COLLECT?</strong>
  </p>
  <br />
  <p>
    <strong>Personal information you disclose to us</strong>
  </p>
  <br />
  <p>
    <strong>
      <em>In Short: </em>
    </strong>
    <em>We collect personal information that you provide to us.</em>
  </p>
  <br />
  <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us. If you do not consent to this Privacy Policy for any reason, please do not use the Services or share your information with us.&nbsp;&nbsp;</p>
  <br />
  <p>
    <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
  </p>
  <ul role="list">
    <li>names</li>
  </ul>
  <ul role="list">
    <li>email addresses</li>
  </ul>
  <ul role="list">
    <li>phone numbers</li>
  </ul>
  <ul role="list">
    <li>mailing addresses</li>
  </ul>
  <ul role="list">
    <li>contact or authentication data</li>
  </ul>
  <ul role="list">
    <li>contact preferences</li>
  </ul>
  <p>
    <strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
  </p>
  <ul role="list">
    <li>financial data</li>
  </ul>
  <ul role="list">
    <li>credit worthiness data</li>
  </ul>
  <ul role="list">
    <li>social security numbers or other government identifiers</li>
  </ul>
  <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
  <br />
  <p>
    <strong>Information automatically collected</strong>
  </p>
  <br />
  <p>
    <strong>
      <em>In Short: </em>
    </strong>
    <em>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em>
  </p>
  <br />
  <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
  <br />
  <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
  <br />
  <p>The information we collect includes:</p>
  <ul role="list">
    <li>
      <em>Log and Usage Data.</em> Log and usage data related to the Services is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &quot;crash dumps&quot;), and hardware settings).
    </li>
  </ul>
  <ul role="list">
    <li>
      <em>Device Data.</em> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
    </li>
  </ul>
  <ul role="list">
    <li>
      <em>Location Data.</em> We collect location data such as information about your device&apos;s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
    </li>
  </ul>
  <p>
    <strong>2. HOW DO WE PROCESS YOUR INFORMATION?</strong>
  </p>
  <br />
  <p>
    <strong>
      <em>In Short: </em>
    </strong>
    <em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em>
  </p>
  <br />
  <p>
    <strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong>
  </p>
  <ul role="list">
    <li>
      <strong>To facilitate account creation and authentication and otherwise manage user accounts. </strong>We may process your information so you can create and log in to your account, as well as keep your account in working order.
    </li>
  </ul>
  <ul role="list">
    <li>
      <strong>To deliver and facilitate delivery of services to the user. </strong>We may process your information to provide you with the requested service.
    </li>
  </ul>
  <ul role="list">
    <li>
      <strong>To respond to user inquiries/offer support to users. </strong>We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
    </li>
  </ul>
  <ul role="list">
    <li>
      <strong>To send administrative information to you. </strong>We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
    </li>
  </ul>
  <ul role="list">
    <li>
      <strong>To request feedback. </strong>We may process your information when necessary to request feedback and to contact you about your use of our Services.
    </li>
  </ul>
  <ul role="list">
    <li>
      <strong>To send you marketing and promotional communications. </strong>We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see &quot; <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#privacyrights">WHAT ARE YOUR PRIVACY RIGHTS?</a>&quot; below).
    </li>
  </ul>
  <ul role="list">
    <li>
      <strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
    </li>
  </ul>
  <ul role="list">
    <li>
      <strong>To evaluate and improve our Services, products, marketing, and your experience.</strong> We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.
    </li>
  </ul>
  <ul role="list">
    <li>
      <strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.
    </li>
  </ul>
  <ul role="list">
    <li>
      <strong>To determine the effectiveness of our marketing and promotional campaigns.</strong> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.
    </li>
  </ul>
  <ul role="list">
    <li>
      <strong>To comply with our legal obligations.</strong> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
    </li>
    <li>
      <strong>To further a legitimate business interest. </strong>We may from time to time process your data in furtherance of a legitimate business interest only to the extent permitted under applicable law.
    </li>
  </ul>
  <br />
  <p>
    <strong>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</strong>
  </p>
  <br />
  <p>
    <strong>
      <em>In Short:</em>
    </strong>
    <em> We may share information in specific situations described in this section and/or with the following categories of third parties.</em>
  </p>
  <br />
  <p>
    <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents (“ <strong>third parties</strong>”) who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of third parties we may share personal information with are as follows:
  </p>
  <ul role="list">
    <li>Ad Networks</li>
  </ul>
  <ul role="list">
    <li>Cloud Computing Services</li>
  </ul>
  <ul role="list">
    <li>Data Analytics Services</li>
  </ul>
  <ul role="list">
    <li>Data Storage Service Providers</li>
  </ul>
  <ul role="list">
    <li>Finance &amp; Accounting Tools</li>
  </ul>
  <ul role="list">
    <li>Payment Processors</li>
  </ul>
  <ul role="list">
    <li>Performance Monitoring Tools</li>
  </ul>
  <ul role="list">
    <li>Product Engineering &amp; Design Tools</li>
  </ul>
  <ul role="list">
    <li>Retargeting Platforms</li>
  </ul>
  <ul role="list">
    <li>Sales &amp; Marketing Tools</li>
  </ul>
  <ul role="list">
    <li>Testing Tools</li>
  </ul>
  <ul role="list">
    <li>User Account Registration &amp; Authentication Services</li>
  </ul>
  <ul role="list">
    <li>Website Hosting Service Providers</li>
  </ul>
  <ul role="list">
    <li>Communication &amp; Collaboration Tools</li>
  </ul>
  <ul role="list">
    <li>Affiliate Marketing Programs</li>
  </ul>
  <br />
  <p>We also may need to share your personal information in the following situations:</p>
  <ul role="list">
    <li>
      <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
    </li>
  </ul>
  <ul role="list">
    <li>
      <strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
    </li>
  </ul>
  <br />
  <p>
    <strong>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</strong>
  </p>
  <br />
  <p>
    <strong>
      <em>In Short:</em>
    </strong>
    <em> We may use cookies and other tracking technologies to collect and store your information.</em>
  </p>
  <br />
  <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
  <br />
  <p>
    <strong>5. HOW LONG DO WE KEEP YOUR INFORMATION?</strong>
  </p>
  <br />
  <p>
    <strong>
      <em>In Short: </em>
    </strong>
    <em>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em>
  </p>
  <br />
  <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us or longer than permitted by applicable law.</p>
  <br />
  <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible. We may use such information for any purpose.</p>
  <br />
  <p>
    <strong>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</strong>
  </p>
  <br />
  <p>
    <strong>
      <em>In Short: </em>
    </strong>
    <em>We aim to protect your personal information through a system of organizational and technical security measures.</em>
  </p>
  <br />
  <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
  <br />
  <p>
    <strong>7. DO WE COLLECT INFORMATION FROM MINORS?</strong>
  </p>
  <br />
  <p>
    <strong>
      <em>In Short:</em>
    </strong>
    <em> We do not knowingly collect data from or market to children under 18 years of age.</em>
  </p>
  <br />
  <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:team@Trawler.io">team@Trawler.io</a>. </p>
  <br />
  <p>
    <strong>8. WHAT ARE YOUR PRIVACY RIGHTS?</strong>
  </p>
  <br />
  <p>
    <strong>
      <em>In Short:</em>
    </strong>
    <em> &nbsp;You may review, change, or terminate your account at any time.</em>
  </p>
  <p></p>
  <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>. </p>
  <br />
  <p>If you are located in Switzerland, the contact details for the data protection authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">https://www.edoeb.admin.ch/edoeb/en/home.html</a>. </p>
  <br />
  <p>
    <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section &quot; <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>&quot; below.
  </p>
  <br />
  <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
  <br />
  <p>
    <strong>Opting out of marketing and promotional communications: </strong>You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying &quot;STOP&quot; or &quot;UNSUBSCRIBE&quot; to the SMS messages that we send, or by contacting us using the details provided in the section &quot; <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>&quot; below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
  </p>
  <br />
  <p>
    <strong>Account Information</strong>
  </p>
  <br />
  <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
  <ul role="list">
    <li>Contact us using the contact information provided.</li>
  </ul>
  <ul role="list">
    <li>Log in to your account settings and update your user account.</li>
  </ul>
  <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
  <br />
  <p>
    <strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a>.
  </p>
  <br />
  <p>If you have questions or comments about your privacy rights, you may email us at team@Trawler.io.</p>
  <br />
  <p>
    <strong>9. CONTROLS FOR DO-NOT-TRACK FEATURES</strong>
  </p>
  <br />
  <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>
  <br />
  <p>
    <strong>10. DO I HAVE RIGHTS UNDER CERTAIN STATE PRIVACY LAWS?</strong>
  </p>
  <br />
  <p>
    <strong>
      <em>In Short: </em>
    </strong>
    <em>Yes, if you are a resident of certain states, you may be granted specific rights regarding access to your personal information.</em>
  </p>
  <br />
  <p>
    <strong>California</strong>
  </p>
  <p>California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
  <br />
  <p>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</p>
  <br />
  <p>Additionally, you have the right to opt out from the Company collecting your personal information. However, some information about you may be required in order for you to access certain functionality of the Services, such as those mentioned in this Privacy Policy. Opting out of the Company collecting your personal information may impact this functionality.</p>
  <br />
  <p>
    <strong>CCPA Privacy Notice</strong>
  </p>
  <p>This notice is provided to California residents pursuant to the California Consumer Privacy Act of 2018, as amended by the California Privacy Rights Act of 2020 (together, the “ <strong>CCPA</strong>”) to explain how we collect, use and share their personal information, and the rights and choices we offer California residents regarding our handling of their personal information, which the CCPA currently defines as “information that identifies, relates to, or could reasonably be linked, directly or indirectly, with a particular consumer or household.”&nbsp; </p>
  <br />
  <p>If you are a California resident, we must adhere to certain rights and obligations regarding your personal information.</p>
  <br />
  <p>
    <strong>What categories of personal information do we collect?</strong>
  </p>
  <br />
  <p>We have collected the following categories of personal information in the past twelve (12) months:</p>
  <br />
  <p>
    <strong>Category</strong>
  </p>
  <p>
    <strong>Examples</strong>
  </p>
  <p>
    <strong>Collected</strong>
  </p>
  <p>A. Identifiers</p>
  <p>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</p>
  <p>YES</p>
  <p>B. Personal information categories listed in the California Customer Records statute</p>
  <p>Name, contact information, education, employment, employment history, and financial information</p>
  <p>YES</p>
  <p>C. Protected classification characteristics under California or federal law</p>
  <p>Gender and date of birth</p>
  <p>YES</p>
  <p>D. Commercial information</p>
  <p>Transaction information, purchase history, financial details, and payment information</p>
  <p>YES</p>
  <p>E. Biometric information</p>
  <p>Fingerprints and voiceprints</p>
  <p>NO</p>
  <p>F. Internet or other similar network activity</p>
  <p>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</p>
  <p>NO</p>
  <p>G. Geolocation data</p>
  <p>Precise device location</p>
  <p>NO</p>
  <p>H. Audio, electronic, visual, thermal, olfactory, or similar information</p>
  <p>Images and audio, video or call recordings created in connection with our business activities</p>
  <p>NO</p>
  <p>I. Professional or employment-related information</p>
  <p>Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</p>
  <p>NO</p>
  <p>J. Education Information</p>
  <p>Student records and directory information</p>
  <p>NO</p>
  <p>K. Inferences drawn from other personal information</p>
  <p>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</p>
  <p>NO</p>
  <br />
  <p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
  <ul role="list">
    <li>Receiving help through our customer support channels;</li>
  </ul>
  <ul role="list">
    <li>Participation in customer surveys or contests; and</li>
  </ul>
  <ul role="list">
    <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
  </ul>
  <p>
    <strong>How do we use and share your personal information?</strong>
  </p>
  <br />
  <p>More information about our data collection and sharing practices can be found in this privacy notice.</p>
  <br />
  <p>You may contact us by email at , or by referring to the contact details at the bottom of this document.</p>
  <br />
  <p>If you are using an authorized agent to exercise your right to opt out, we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</p>
  <br />
  <p>
    <strong>Will your information be shared with anyone else?</strong>
  </p>
  <br />
  <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</p>
  <br />
  <p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be &quot;selling&quot; of your personal information.</p>
  <br />
  <p>Trawler, Inc. has not sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Trawler, Inc. has disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:</p>
  <ul role="list">
    <li>Category A. Identifiers, such as contact details like your real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name.</li>
  </ul>
  <ul role="list">
    <li>Category B. Personal Information, as defined in applicable laws and regulations, such as your name, contact information, education, employment, employment history, and financial information.</li>
  </ul>
  <ul role="list">
    <li>Category C. Characteristics of protected classifications under California or federal law and regulations, such as gender or date of birth.</li>
  </ul>
  <ul role="list">
    <li>Category D. Commercial information, such as transaction information, purchase history, financial details, and payment information.</li>
  </ul>
  <p>The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under &quot; <a href="https://app.termly.io/document/privacy-policy/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1#whoshare">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>&quot;. </p>
  <br />
  <p>
    <strong>How long do we retain your personal data?&nbsp;</strong>
  </p>
  <br />
  <p>We will retain your personal information for a period of time consistent with the original purpose of collection or as long as necessary to comply with our legal obligations, maintain accurate accounting, financial and other operational records, resolve disputes, and enforce our agreements.</p>
  <p>We determine the appropriate retention period for personal information on the basis of the amount, nature, and sensitivity of the personal information being processed, the potential risk of harm from unauthorized use or disclosure of the personal information, whether we can achieve the purposes of the processing through other means, and on the basis of applicable legal requirements (such as applicable statutes of limitation).</p>
  <br />
  <p>After expiration of the applicable retention periods, your personal information will be deleted.</p>
  <br />
  <p>
    <strong>Your rights with respect to your personal data</strong>
  </p>
  <br />
  <p>Right to request deletion of the data — Request to delete</p>
  <br />
  <p>You can ask for the deletion of your personal information through submitting a verified request. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</p>
  <br />
  <p>Right to be informed — Request to know</p>
  <br />
  <p>Depending on the circumstances, you have a right to know:</p>
  <ul role="list">
    <li>whether we collect and use your personal information;</li>
  </ul>
  <ul role="list">
    <li>the categories of personal information that we collect;</li>
  </ul>
  <ul role="list">
    <li>the purposes for which the collected personal information is used;</li>
  </ul>
  <ul role="list">
    <li>whether we sell your personal information to third parties;</li>
  </ul>
  <ul role="list">
    <li>the categories of personal information that we sold or disclosed for a business purpose;</li>
  </ul>
  <ul role="list">
    <li>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li>
  </ul>
  <ul role="list">
    <li>the business or commercial purpose for collecting or selling personal information.</li>
  </ul>
  <p>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</p>
  <br />
  <p>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</p>
  <br />
  <p>We will not discriminate against you if you exercise your privacy rights.&nbsp;</p>
  <br />
  <p>Verification process</p>
  <br />
  <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</p>
  <br />
  <p>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you. We may not fulfill requests unless you have provided sufficient information for us to reasonably verify that you are the data subject from whom we collected personal information, as well as sufficient details necessary to help us handle the request.&nbsp;</p>
  <br />
  <p>Other privacy rights</p>
  <ul role="list">
    <li>You may object to the processing of your personal information.</li>
  </ul>
  <ul role="list">
    <li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li>
  </ul>
  <ul role="list">
    <li>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li>
  </ul>
  <ul role="list">
    <li>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</li>
  </ul>
  <p>To exercise these rights, you can contact us by email at <a href="mailto:team@Trawler.io">team@Trawler.io</a>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you. </p>
  <br />
  <p>
    <strong>11. DO WE MAKE UPDATES TO THIS NOTICE?</strong>
  </p>
  <br />
  <p>
    <strong>
      <em>In Short: </em>
    </strong>
    <em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
  </p>
  <br />
  <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
  <br />
  <p>
    <strong>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong>
  </p>
  <br />
  <p>If you have questions or comments about this notice, you may email us at team@Trawler.io or by post to:</p>
  <br />
  <p>Trawler, Inc.</p>
  <p>169 Madison Ave #2132</p>
  <p>New York, NY 10016</p>
  <p>United States</p>
  <p>
    <a href="http://support@Trawler.io">support@Trawler.io&nbsp;</a>
  </p>
  <br />
  <p>
    <strong>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</strong>
  </p>
  <br />
  <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request form by clicking <a href="https://app.termly.io/notify/45b2fcf5-3dad-4503-81e3-c86c3b5f3ed1">here</a>. </p>

</div>
    </>
  )


  return (

    <>
      <Header />
      <Policy title={title} text={text} />
      <Footer />
    </>
  );
}
