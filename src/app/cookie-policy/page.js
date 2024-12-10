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
      <span>Cookie</span> policy
    </>
  )

  const text = (
    <>
      <div class="text-rich-text w-richtext">
  
  <p>
    <strong>Last updated August 15, 2023</strong>
  </p>
  <p>This Cookie Policy explains how Trawler, Inc. (&quot; <strong>Company</strong>,&quot; &quot; <strong>we</strong>,&quot; &quot; <strong>us</strong>,&quot; and &quot; <strong>our</strong>&quot;) uses cookies and similar technologies to recognize you when you visit our website at &nbsp; <a href="https://www.trawler.io/" target="_blank">https://www.trawler.io</a> (&quot; <strong>Website</strong>&quot;). It explains what these technologies are and why we use them, as well as your rights to control our use of them. </p>
  <p>In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.</p>
  <br />
  <p>
    <strong>What are cookies?</strong>
  </p>
  <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
  <p>Cookies set by the website owner (in this case, Trawler, Inc.) are called &quot;first-party cookies.&quot; Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>
  <br />
  <p>
    <strong>Why do we use cookies?</strong>
  </p>
  <p>We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.</p>
  <br />
  <p>
    <strong>How can I control cookies?</strong>
  </p>
  <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</p>
  <br />
  <p>The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.</p>
  <p>The specific types of first- and third-party cookies served through our Website and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit): <strong>
      <br />
      <br />Essential website cookies: </strong>
  </p>
  <p>These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</p>
  <p>Name:TERMLY_API_CACHEPurpose:Used to store visitor’s consent result in order to improve performance of the consent banner.Provider:www.trawler.ioService:TermlyCountry:United StatesType:html_local_storageExpires in:1 year</p>
  <p>Name:__tluidPurpose:Assigns a random ID number to each visitor so that their policy consent and cookie consent preferences can be saved.Provider:app.termly.ioService:Termly <a href="https://termly.io/our-privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:server_cookieExpires in:1 year </p>
  <p>Name:JSESSIONIDPurpose:Used to maintain an anonymous user session by the server in Java™ 2 Platform Enterprise Edition web applications. It is a necessary cookie that expires at the end of a session.Provider:.nr-data.netService:JavaServer Pages Technologies <a href="https://www.oracle.com/legal/privacy/privacy-policy.html" target="_blank">View Service Privacy Policy</a>Country:__________Type:server_cookieExpires in:session </p>
  <p>
    <strong>
      <br />Analytics and customization cookies: </strong>
  </p>
  <p>These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</p>
  <p>Name:rudder.#.inProgressPurpose:Keeps track of the events in progress.Provider:www.trawler.ioService:Rudderstack <a href="https://www.rudderstack.com/privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:html_local_storageExpires in:persistent </p>
  <p>Name:rudder.#.ackPurpose:Timer for other browser tabs to claim control of the retry queue.Provider:www.trawler.ioService:Rudderstack <a href="https://www.rudderstack.com/privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:html_local_storageExpires in:persistent </p>
  <p>Name:rudder.#.queuePurpose:Keeps track of the events that are in queue to be processed.Provider:www.trawler.ioService:Rudderstack <a href="https://www.rudderstack.com/privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:html_local_storageExpires in:persistent </p>
  <p>Name:rudder.#.reclaimStartPurpose:Determines if a tab takes over the queue from another tab.Provider:www.trawler.ioService:Rudderstack <a href="https://www.rudderstack.com/privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:html_local_storageExpires in:persistent </p>
  <p>Name:rl_user_idPurpose:Stores the user ID set via the identify API.Provider:.Trawler.ioService:Rudderstack <a href="https://www.rudderstack.com/privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:http_cookieExpires in:11 months 30 days </p>
  <p>Name:counters.gifPurpose:__________Provider:forms.hsforms.comService:__________Country:United StatesType:pixel_trackerExpires in:session</p>
  <p>Name:rl_traitPurpose:Stores the user traits object set via the identify API.Provider:.Trawler.ioService:Rudderstack <a href="https://www.rudderstack.com/privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:http_cookieExpires in:11 months 30 days </p>
  <p>Name:rl_page_init_referrerPurpose:Stores the initial referrer of the page when a user visits a site for the first time.Provider:.Trawler.ioService:Rudderstack <a href="https://www.rudderstack.com/privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:http_cookieExpires in:11 months 30 days </p>
  <p>Name:rudder.#.reclaimEndPurpose:Determines if a tab takes over the queue from another tab.Provider:www.trawler.ioService:Rudderstack <a href="https://www.rudderstack.com/privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:html_local_storageExpires in:persistent </p>
  <p>Name:__hstcPurpose:The main cookie for tracking visitors.Provider:.Trawler.ioService:HubSpot <a href="https://legal.hubspot.com/privacy-policy" target="_blank">View Service Privacy Policy</a>Country:United StatesType:http_cookieExpires in:5 months 27 days </p>
  <p>Name:__cf_bmPurpose:Cloudflare places the cookie on end-user devices that access customer sites protected by Bot Management or Bot Fight Mode.Provider:.hubspot.comService:Cloudflare <a href="https://jetpack.com/support/cookies/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:server_cookieExpires in:29 minutes </p>
  <p>Name:NRJS-8482e4e3e1750395f5dPurpose:__________Provider:bam.nr-data.netService:__________Country:United StatesType:pixel_trackerExpires in:session</p>
  <p>Name:__hsscPurpose:This cookie keeps track of sessions.Provider:.Trawler.ioService:HubSpot <a href="https://legal.hubspot.com/privacy-policy" target="_blank">View Service Privacy Policy</a>Country:United StatesType:http_cookieExpires in:29 minutes </p>
  <p>Name:__ptq.gifPurpose:Records anonymous page view dataProvider:track.hubspot.comService:Hubspot <a href="https://legal.hubspot.com/privacy-policy" target="_blank">View Service Privacy Policy</a>Country:United StatesType:pixel_trackerExpires in:session </p>
  <p>Name:rl_page_init_referring_domainPurpose:Stores the initial referring domain of the page when a user visits a site for the first time.Provider:.Trawler.ioService:Rudderstack <a href="https://www.rudderstack.com/privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:http_cookieExpires in:11 months 30 days </p>
  <p>Name:rl_group_idPurpose:Stores the user group ID set via the group API.Provider:.Trawler.ioService:Rudderstack <a href="https://www.rudderstack.com/privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:http_cookieExpires in:11 months 30 days </p>
  <p>Name:hubspotutkPurpose:This cookie keeps track of a visitor&apos;s identity. It is passed to HubSpot on form submission and used when deduplicating contacts.Provider:.Trawler.ioService:HubSpot <a href="https://legal.hubspot.com/privacy-policy" target="_blank">View Service Privacy Policy</a>Country:United StatesType:http_cookieExpires in:5 months 27 days </p>
  <p>Name:__hssrcPurpose:Whenever HubSpot changes the session cookie, this cookie is also set to determine if the visitor has restarted their browser.Provider:.Trawler.ioService:HubSpot <a href="https://legal.hubspot.com/privacy-policy" target="_blank">View Service Privacy Policy</a>Country:United StatesType:http_cookieExpires in:session </p>
  <p>Name:rl_anonymous_idPurpose:Stores the anonymous ID. By default, it would be the auto-generated unique ID by SDK for each visitor unless overridden via setAnonymousId API.Provider:.Trawler.ioService:Rudderstack <a href="https://www.rudderstack.com/privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:http_cookieExpires in:11 months 30 days </p>
  <p>Name:rl_group_traitPurpose:Stores the user group traits object set via the group API.Provider:.Trawler.ioService:Rudderstack <a href="https://www.rudderstack.com/privacy-policy/" target="_blank">View Service Privacy Policy</a>Country:United StatesType:http_cookieExpires in:11 months 30 days </p>
  <p>
    <strong>
      <br />Advertising cookies: </strong>
  </p>
  <p>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</p>
  <p>Name:lidcPurpose:These cookies are associated with a B2B marketing platform, formerly known as Bizo, which is now owned by LinkedIn, the business networking platform. This sub-domain is connected with LinkedIn&apos;s marketing services that enable website owners to gain insight into types of users on their site based on LinkedIn profile data, to improve targeting.Provider:.linkedin.comService:LinkedIn <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank">View Service Privacy Policy</a>Country:United StatesType:server_cookieExpires in:1 day </p>
  <p>Name:UserMatchHistoryPurpose:These cookies are associated with a B2B marketing platform, formerly known as Bizo, which is now owned by LinkedIn, the business networking platform. This sub-domain is connected with LinkedIn&apos;s marketing services that enable website owners to gain insight into types of users on their site based on LinkedIn profile data, to improve targeting.Provider:.linkedin.comService:LinkedIn <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank">View Service Privacy Policy</a>Country:United StatesType:server_cookieExpires in:30 days </p>
  <p>Name:bcookiePurpose:Used to optimize the range of advertising on LinkedinProvider:.linkedin.comService:Linkedin Ad Analytics <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank">View Service Privacy Policy</a>Country:United StatesType:server_cookieExpires in:11 months 30 days </p>
  <p>
    <strong>
      <br />Social networking cookies: </strong>
  </p>
  <p>These cookies are used to enable you to share pages and content that you find interesting on our Website through third-party social networking and other websites. These cookies may also be used for advertising purposes.</p>
  <p>Name:bscookiePurpose:Cookie used for Sign-in with Linkedin and/or for Linkedin follow feature on 3rd party websitesProvider:.www.linkedin.comService:Linkedin Ad Analytics <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank">View Service Privacy Policy</a>Country:United StatesType:server_cookieExpires in:11 months 30 days </p>
  <p>
    <strong>
      <br />Unclassified cookies: </strong>
  </p> 
  <p>These are cookies that have not yet been categorized. We are in the process of classifying these cookies with the help of their providers.</p>
  <p>Name:rl_sessionPurpose:__________Provider:.Trawler.ioService:__________Country:United StatesType:http_cookieExpires in:11 months 30 days</p>
  <p>Name:ln_orPurpose:__________Provider:www.trawler.ioService:__________Country:United StatesType:http_cookieExpires in:23 hours 59 minutes</p>
  <p>Name:sp_landingPurpose:__________Provider:.spotify.comService:__________Country:United StatesType:server_cookieExpires in:1 day</p>
  <p>Name:documentationConfigPurpose:__________Provider:postman.Trawler.ioService:__________Country:United StatesType:http_cookieExpires in:1 year 1 month 4 days</p>
  <p>Name:Trawler.anonymousIdPurpose:__________Provider:www.trawler.ioService:__________Country:United StatesType:html_local_storageExpires in:persistent</p>
  <p>Name:sp_tPurpose:__________Provider:.spotify.comService:__________Country:United StatesType:server_cookieExpires in:11 months 30 days</p>
  <p>Name:loglevelPurpose:__________Provider:embed-standalone.spotify.comService:__________Country:United StatesType:html_local_storageExpires in:persistent</p>
  <p>Name:li_sugrPurpose:__________Provider:.linkedin.comService:__________Country:United StatesType:server_cookieExpires in:2 months 29 days</p>
  <p>Name:AnalyticsSyncHistoryPurpose:__________Provider:.linkedin.comService:__________Country:United StatesType:server_cookieExpires in:30 days</p>
  <p>
    <strong>How can I control cookies on my browser?</strong>
  </p>
  <p>As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser&apos;s help menu for more information. The following is information about how to manage cookies on the most popular browsers:</p>
  <ul role="list">
    <li>
      <a href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies" target="_blank">Chrome</a>
    </li>
    <li>
      <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank">Internet Explorer</a>
    </li>
    <li>
      <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&amp;redirectlocale=en-US" target="_blank">Firefox</a>
    </li>
    <li>
      <a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac" target="_blank">Safari</a>
    </li>
    <li>
      <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank">Edge</a>
    </li>
    <li>
      <a href="https://help.opera.com/en/latest/web-preferences/" target="_blank">Opera <br /> </a>
    </li>
  </ul>
  <p>In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:</p>
  <ul role="list">
    <li>
      <a href="http://www.aboutads.info/choices/" target="_blank">Digital Advertising Alliance</a>
    </li>
    <li>
      <a href="https://youradchoices.ca/" target="_blank">Digital Advertising Alliance of Canada</a>
    </li>
    <li>
      <a href="http://www.youronlinechoices.com/" target="_blank">European Interactive Digital Advertising Alliance <br /> </a>
    </li>
  </ul>
  <br />
  <p>
    <strong>What about other tracking technologies, like web beacons?</strong>
  </p>
  <p>Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called &quot;tracking pixels&quot; or &quot;clear gifs&quot;). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Website or opened an email including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.</p>
  <br />
  <p>
    <strong>Do you use Flash cookies or Local Shared Objects?</strong>
  </p>
  <p>Websites may also use so-called &quot;Flash Cookies&quot; (also known as Local Shared Objects or &quot;LSOs&quot;) to, among other things, collect and store information about your use of our services, fraud prevention, and for other site operations.</p>
  <p>If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" target="_BLANK">Website Storage Settings Panel</a>. You can also control Flash Cookies by going to the <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html" target="_BLANK">Global Storage Settings Panel</a> and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to &quot;information&quot; on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time). </p>
  <p>Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content. <br /> </p>
  <br />
  <p>
    <strong>Do you serve targeted advertising?</strong>
  </p>
  <p>Third parties may serve cookies on your computer or mobile device to serve advertising through our Website. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. They can accomplish this by using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details, or other details that directly identify you unless you choose to provide these. <br /> </p>
  <br />
  <p>
    <strong>How often will you update this Cookie Policy?</strong>
  </p>
  <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
  <p>The date at the top of this Cookie Policy indicates when it was last updated. <br /> </p>
  <br />
  <p>
    <strong>Where can I get further information?</strong>
  </p>
  <p>If you have any questions about our use of cookies or other technologies, please email us at support@Trawler.io or by post to: <br /> </p>
  <p>Trawler, Inc.</p>
  <p>169 Madison Ave #2132, New York, NY 10016, USA</p>
  <p>New York, NY 10016</p>
  <p>United States</p> 
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
