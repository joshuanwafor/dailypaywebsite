import { marked } from 'marked';
import { Container, Stack } from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';

export default function AcceptableUse() {
  return (
    <Stack>
      <PageHeaderSection
        title="Acceptable Use"
        badge="Legal"
        caption="Last updated December 2024"
      />
      <Container size="lg">
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </Container>
    </Stack>
  );
}

const content = `

<div>
  This Acceptable Use Policy ('**Policy**') is part of our Terms and Conditions ('**Legal Terms**')
  and should therefore be read alongside our main Legal Terms: <strong>__________</strong> If you do
  not agree with these Legal Terms, please refrain from using our Services. Your continued use of
  our Services implies acceptance of these Legal Terms.
</div>

Please carefully review this Policy which applies to any and all:

<ul className="no-bullets">
  <li>(a) uses of our Services (as defined in 'Legal Terms')</li>
  <li>
    (b) forms, materials, consent tools, comments, post, and all other content available on the
    Services (**'Content'**)
  </li>
  <li>
    (c) material which you contribute to the Services including any upload, post, review,
    disclosure, ratings, comments, chat etc. in any forum, chatrooms, reviews, and to any
    interactive services associated with it (**'Contribution'**)
  </li>
</ul>

<br />

## Who We Are

We are DailyPay by Alerts ('**Company**','**we**', '**us**', or '**our**') a company registered in Nigeria at Lagos, Nigeria. We operate the website [https://alerts.africa](https://alerts.africa)(the '**Site**'), the mobile application DailyPay (the 'App'), as well as any other related products and services that refer or link to this Policy (collectively, the '**Services**').

<br />
## USE OF THE SERVICES

When you use the Services, you warrant that you will comply with this Policy and with all applicable laws.

You also acknowledge that you may not:

- Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
- Make any unauthorised use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretences.
- Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.
- Engage in unauthorised framing of or linking to the Services.
- Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.
- Make improper use of our Services, including our support services or submit false reports of abuse or misconduct.
- Engage in any automated use of the Services, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
- Interfere with, disrupt, or create an undue burden on the Services or the networks or the Services connected.
- Attempt to impersonate another user or person or use the username of another user.
- Use any information obtained from the Services in order to harass, abuse, or harm another person.
- Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavour or commercial enterprise.
- Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services, except as expressly permitted by applicable law.
- Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.
- Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.
- Delete the copyright or other proprietary rights notice from any Content.
- Copy or adapt the Services’ software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.
- Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.
- Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ('gifs'), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as 'spyware' or 'passive collection mechanisms' or 'pcms').
- Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or using or launching any unauthorised script or other software.
- Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.
- Use the Services in a manner inconsistent with any applicable laws or regulations.
- Use a buying agent or purchasing agent to make purchases on the Services.
- Sell or otherwise transfer your profile.
- Provide false employment information or attempt to bypass employment verification processes.
- Use the Services for money laundering, fraud, or other illegal financial activities.
- Attempt to claim daily wages without valid employment or salary verification.
- Share account credentials or allow unauthorized access to your DailyPay account.
- Use the Services to facilitate unauthorized salary account switching without employer approval.
- Attempt to manipulate or falsify daily wage earnings or claims.

  <br />

## Contributions

In this Policy, the term 'Contribution' means:

- any data, information, software, text, code, music, scripts, sound, graphics, photos, videos, tags, messages, interactive features, or other materials that you post, share, upload, submit, or otherwise provide in any manner on or through to the Services; or
- any other content, materials, or data you provide to DailyPay by Alerts or use with the Services.

Some areas of the Services may allow users to upload, transmit, or post Contributions. We may but are under no obligation to review or moderate the Contributions made on the Services, and we expressly exclude our liability for any loss or damage resulting from any of our users' breach of this Policy. Please report any Contribution that you believe breaches this Policy; however, we will determine, in our sole discretion, whether a Contribution is indeed in breach of this Policy.

You warrant that:

- you are the creator and owner of or have the necessary licences, rights, consents, releases, and permissions to use and to authorise us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and this Policy;
- all your Contributions comply with applicable laws and are original and true (if they represent your opinion or facts);
- the creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party; and
- you have the verifiable consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and this Policy.

You also agree that you will not post, transmit, or upload any (or any part of a) Contribution that:

- is in breach of applicable laws, regulation, court order, contractual obligation, this Policy, our Legal Terms, a legal duty, or that promotes or facilitates fraud or illegal activities;
- is defamatory, obscene, offensive, hateful, insulting, intimidating, bullying, abusive, or threatening, to any person or group;
- is false, inaccurate, or misleading;
- includes child sexual abuse material, or violates any applicable law concerning child pornography or otherwise intended to protect minors;
- contains any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner;
- promotes violence, advocates the violent overthrow of any government, or incites, encourages, or threatens physical harm against another;
- is obscene, lewd, lascivious, filthy, violent, harassing, libellous, slanderous, contains sexually explicit material, or is otherwise objectionable (as determined by us);
- is discriminatory based on race, sex, religion, nationality, disability, sexual orientation, or age;
- bullies, intimidates, humiliates, or insults any person;
- promotes, facilitates, or assists anyone in promoting and facilitating acts of terrorism;
- infringes, or assists anyone in infringing, a third party's intellectual property rights or publicity or privacy rights;
- is deceitful, misrepresents your identity or affiliation with any person and/or misleads anyone as to your relationship with us or implies that the Contribution was made by someone else than you;
- contains unsolicited or unauthorised advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation that has been 'paid for', whether with monetary compensation or in kind; or
- misrepresents your identity or who the Contribution is from.

You may not use our Services to offer, present, promote, sell, give away or otherwise make available to others any good or service involving:

- items that promote, encourage, facilitate, or instruct others how to engage in illegal activity,
- cigarettes,
- controlled substances and/or other products that present a risk to consumer safety, narcotics, steroids, drug paraphernalia,
- specific knives or other weapons regulated under applicable law,
- firearms, ammunition, or certain firearm parts or accessories,
- certain sexually oriented materials or services,
- certain items before the seller has control or possession of the item,
- stolen goods,
- products or services identified by government agencies to be highly likely to be fraudulent,
- any transaction or activity that requires pre-approval without having obtained said approval,
- unauthorized financial services or money transfer operations,
- fraudulent employment verification services,
- fake KYC or identity verification services, and
- any service that violates banking or financial regulations.

<br />
## Review and Ratings

When your Contribution is a review or rating, you also agree that:

- you have firsthand experience with the goods, services and software being reviewed;
- your Contribution is true to your experience;
- you are not affiliated with competitors if posting negative reviews (or linked in any way to, e.g., by being the owner or seller/manufacturer of, a product or service if posting positive reviews);
- you cannot make or offer any conclusions as to the legality of conduct;
- you cannot post any false or misleading statements; and
- you do not and will not organise a campaign encouraging others to post reviews, whether positive or negative.

<br />
## Reporting a Breach of this Policy

We may but are under no obligation to review or moderate the Contributions made on the Services and we expressly exclude our liability for any loss or damage resulting from any of our users' breach of this Policy.

If you consider that any Service, Content, or Contribution:

- breach this Policy, please email us at support@alerts.africa, or refer to the contact details at the bottom of this document to let us know which Service, Content, or Contribution is in breach of this Policy and why
- infringe any third-party intellectual property rights, please email us at support@alerts.africa

We will reasonably determine whether a Service, Content, or Contribution breaches this Policy.

<br />
## Consequences of Breaching this Policy

The consequences for violating our Policy will vary depending on the severity of the breach and the user's history on the Services, by way of example:

We may, in some cases, give you a warning and/or remove the infringing Contribution, however, if your breach is serious or if you continue to breach our Legal Terms and this Policy, we have the right to suspend or terminate your access to and use of our Services and, if applicable, disable your account. We may also notify law enforcement or issue legal proceedings against you when we believe that there is a genuine risk to an individual or a threat to public safety.

We exclude our liability for all action we may take in response to any of your breaches of this Policy.

## Complaints and Removal of Legitimate Content

If you consider that some Content or Contribution have been mistakenly removed or blocked from the Services, please refer to the contact details at the bottom of this document and we will promptly review our decision to remove such Content or Contribution. The Content or Contribution may stay 'down' whilst we conduct the review process.

<strong>_______________________________</strong>

<br />
## Disclaimer

DailyPay by Alerts is under no obligation to monitor users' activities, and we disclaim any responsibility for any user's misuse of the Services. DailyPay by Alerts has no responsibility for any user or other Content or Contribution created, maintained, stored, transmitted, or accessible on or through the Services, and is not obligated to monitor or exercise any editorial control over such material. If DailyPay by Alerts becomes aware that any such Content or Contribution violates this Policy, DailyPay by Alerts may, in addition to removing such Content or Contribution and blocking your account, report such breach to the police or appropriate regulatory authority. Unless otherwise stated in this Policy, DailyPay by Alerts disclaims any obligation to any person who has not entered into an agreement with DailyPay by Alerts for the use of the Services.

<br />
## How Can You Contact Us About This Policy?

If you have any further questions or comments or wish to report any problematic Content or Contribution, you may contact us by:

<ul className="no-bullets">
  <li>Email: support@alerts.africa</li>
  <li>Mobile Application: Through our DailyPay mobile app</li>
</ul>
`;
