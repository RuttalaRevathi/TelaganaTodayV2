/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  
  ScrollView,
  SafeAreaView,
} from 'react-native';
import SubHeader from '../../components/SubHeader';
import {
  commonstyles,
} from '../../styles/commonstyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {blackcolor, ContactStyles} from '../../styles/contactScreenStyles';

export default class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView styles={commonstyles.container}>
        <SubHeader
          title={'Terms & Conditions '}
          isMenu={false}
          isBook={false}
          isShare={false}
          leftBtnClick={() => this.props.navigation.goBack()}
          ShareClick={() => {
            this.sharecall();
          }}
          BookClick={() => {
            alert('BookMark   Clicked');
          }}
        />

        <ScrollView>
          <View style={ContactStyles.mainView}>
            <View style={ContactStyles.subView}>
              <Text style={ContactStyles.title}>
                Welcome to Namasthe Telangana!
              </Text>
              <Text style={ContactStyles.content}>
                These terms and conditions outline the rules and regulations for
                the use of TELANGANA PUBLICATIONS PVT. LTD,’s Website, located
                at https://ntnews.com/.
              </Text>
              <Text style={ContactStyles.content}>
                By accessing this website we assume you accept these terms and
                conditions. Do not continue to use Namasthe Telangana if you do
                not agree to take all of the terms and conditions stated on this
                page.
              </Text>
              <Text style={ContactStyles.content}>
                The following terminology applies to these Terms and Conditions,
                Privacy Statement and Disclaimer Notice and all Agreements:
                “Client”, “You” and “Your” refers to you, the person log on this
                website and compliant to the Company’s terms and conditions.
                “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our
                Company. “Party”, “Parties”, or “Us”, refers to both the Client
                and ourselves. All terms refer to the offer, acceptance and
                consideration of payment necessary to undertake the process of
                our assistance to the Client in the most appropriate manner for
                the express purpose of meeting the Client’s needs in respect of
                provision of the Company’s stated services, in accordance with
                and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural,
                capitalization and/or he/she or they, are taken as
                interchangeable and therefore as referring to same.
              </Text>
              <Text style={ContactStyles.title}>Cookies</Text>
              <Text style={ContactStyles.content}>
                We employ the use of cookies. By accessing Namasthe Telangana,
                you agreed to use cookies in agreement with the TELANGANA
                PUBLICATIONS PVT. LTD,’s Privacy Policy.
              </Text>
              <Text style={ContactStyles.content}>
                Most interactive websites use cookies to let us retrieve the
                user’s details for each visit. Cookies are used by our website
                to enable the functionality of certain areas to make it easier
                for people visiting our website. Some of our
                affiliate/advertising partners may also use cookies.
              </Text>
              <Text style={ContactStyles.title}>License</Text>
              <Text style={ContactStyles.content}>
                Unless otherwise stated, TELANGANA PUBLICATIONS PVT. LTD, and/or
                its licensors own the intellectual property rights for all
                material on Namasthe Telangana. All intellectual property rights
                are reserved. You may access this from Namasthe Telangana for
                your own personal use subjected to restrictions set in these
                terms and conditions.
              </Text>
              <Text style={ContactStyles.content}>You must not:</Text>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  Republish material from Namasthe Telangana
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  Sell, rent or sub-license material from Namasthe Telangana
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  Reproduce, duplicate or copy material from Namasthe Telangana
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  Redistribute content from Namasthe Telangana
                </Text>
              </View>
              <Text style={ContactStyles.content}>
                This Agreement shall begin on the date hereof.
              </Text>
              <Text style={ContactStyles.content}>
                Parts of this website offer an opportunity for users to post and
                exchange opinions and information in certain areas of the
                website. TELANGANA PUBLICATIONS PVT. LTD, does not filter, edit,
                publish or review Comments prior to their presence on the
                website. Comments do not reflect the views and opinions of
                TELANGANA PUBLICATIONS PVT. LTD,,its agents and/or affiliates.
                Comments reflect the views and opinions of the person who post
                their views and opinions. To the extent permitted by applicable
                laws, TELANGANA PUBLICATIONS PVT. LTD, shall not be liable for
                the Comments or for any liability, damages or expenses caused
                and/or suffered as a result of any use of and/or posting of
                and/or appearance of the Comments on this website.
              </Text>
              <Text style={ContactStyles.content}>
                TELANGANA PUBLICATIONS PVT. LTD, reserves the right to monitor
                all Comments and to remove any Comments which can be considered
                inappropriate, offensive or causes breach of these Terms and
                Conditions.
              </Text>
              <Text style={ContactStyles.content}>
                You warrant and represent that:
              </Text>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  You are entitled to post the Comments on our website and have
                  all necessary licenses and consents to do so;
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  The Comments do not invade any intellectual property right,
                  including without limitation copyright, patent or trademark of
                  any third party;
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  The Comments do not contain any defamatory, libelous,
                  offensive, indecent or otherwise unlawful material which is an
                  invasion of privacy
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  The Comments will not be used to solicit or promote business
                  or custom or present commercial activities or unlawful
                  activity.
                </Text>
              </View>
              <Text style={ContactStyles.content}>
                You hereby grant TELANGANA PUBLICATIONS PVT. LTD, a
                non-exclusive license to use, reproduce, edit and authorize
                others to use, reproduce and edit any of your Comments in any
                and all forms, formats or media.
              </Text>
              <Text style={ContactStyles.title}>
                Hyperlinking to our Content
              </Text>

              <Text style={ContactStyles.content}>
                The following organizations may link to our Website without
                prior written approval:
              </Text>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  Government agencies;
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>Search engines;</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  News organizations;
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  Online directory distributors may link to our Website in the
                  same manner as they hyperlink to the Websites of other listed
                  businesses; and
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  System wide Accredited Businesses except soliciting non-profit
                  organizations, charity shopping malls, and charity fundraising
                  groups which may not hyperlink to our Web site.
                </Text>
              </View>
              <Text style={ContactStyles.content}>
                These organizations may link to our home page, to publications
                or to other Website information so long as the link: (a) is not
                in any way deceptive; (b) does not falsely imply sponsorship,
                endorsement or approval of the linking party and its products
                and/or services; and (c) fits within the context of the linking
                party’s site.
              </Text>
              <Text style={ContactStyles.content}>
                We may consider and approve other link requests from the
                following types of organizations:
              </Text>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  commonly-known consumer and/or business information sources;
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  dot.com community sites;
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  associations or other groups representing charities;
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  online directory distributors;
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>internet portals;</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  accounting, law and consulting firms; and
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  educational institutions and trade associations.
                </Text>
              </View>
              <Text style={ContactStyles.content}>
                We will approve link requests from these organizations if we
                decide that: (a) the link would not make us look unfavorably to
                ourselves or to our accredited businesses; (b) the organization
                does not have any negative records with us; (c) the benefit to
                us from the visibility of the hyperlink compensates the absence
                of TELANGANA PUBLICATIONS PVT. LTD,; and (d) the link is in the
                context of general resource information.
              </Text>
              <Text style={ContactStyles.content}>
                These organizations may link to our home page so long as the
                link: (a) is not in any way deceptive; (b) does not falsely
                imply sponsorship, endorsement or approval of the linking party
                and its products or services; and (c) fits within the context of
                the linking party’s site.
              </Text>
              <Text style={ContactStyles.content}>
                If you are one of the organizations listed in paragraph 2 above
                and are interested in linking to our website, you must inform us
                by sending an e-mail to TELANGANA PUBLICATIONS PVT. LTD,. Please
                include your name, your organization name, contact information
                as well as the URL of your site, a list of any URLs from which
                you intend to link to our Website, and a list of the URLs on our
                site to which you would like to link. Wait 2-3 weeks for a
                response.
              </Text>
              <Text style={ContactStyles.content}>
                Approved organizations may hyperlink to our Website as follows:
              </Text>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  By use of our corporate name; or
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  By use of the uniform resource locator being linked to; or
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  By use of any other description of our Website being linked to
                  that makes sense within the context and format of content on
                  the linking party’s site.
                </Text>
              </View>
              <Text style={ContactStyles.content}>
                No use of TELANGANA PUBLICATIONS PVT. LTD,’s logo or other
                artwork will be allowed for linking absent a trademark license
                agreement.
              </Text>
              <Text style={ContactStyles.title}>iFrames</Text>
              <Text style={ContactStyles.content}>
                Without prior approval and written permission, you may not
                create frames around our Webpages that alter in any way the
                visual presentation or appearance of our Website.
              </Text>
              <Text style={ContactStyles.title}>Content Liability</Text>
              <Text style={ContactStyles.content}>
                We shall not be hold responsible for any content that appears on
                your Website. You agree to protect and defend us against all
                claims that is rising on your Website. No link(s) should appear
                on any Website that may be interpreted as libelous, obscene or
                criminal, or which infringes, otherwise violates, or advocates
                the infringement or other violation of, any third party rights.
              </Text>
              <Text style={ContactStyles.title}>Your Privacy</Text>
              <Text style={ContactStyles.content}>
                Please read Privacy Policy
              </Text>
              <Text style={ContactStyles.title}>Reservation of Rights</Text>
              <Text style={ContactStyles.content}>
                We reserve the right to request that you remove all links or any
                particular link to our Website. You approve to immediately
                remove all links to our Website upon request. We also reserve
                the right to amen these terms and conditions and it’s linking
                policy at any time. By continuously linking to our Website, you
                agree to be bound to and follow these linking terms and
                conditions.
              </Text>
              <Text style={ContactStyles.title}>
                Removal of links from our website
              </Text>
              <Text style={ContactStyles.content}>
                If you find any link on our Website that is offensive for any
                reason, you are free to contact and inform us any moment. We
                will consider requests to remove links but we are not obligated
                to or so or to respond to you directly.
              </Text>
              <Text style={ContactStyles.content}>
                We do not ensure that the information on this website is
                correct, we do not warrant its completeness or accuracy; nor do
                we promise to ensure that the website remains available or that
                the material on the website is kept up to date.
              </Text>
              <Text style={ContactStyles.title}>Disclaimer</Text>
              <Text style={ContactStyles.content}>
                To the maximum extent permitted by applicable law, we exclude
                all representations, warranties and conditions relating to our
                website and the use of this website. Nothing in this disclaimer
                will:
              </Text>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  limit or exclude our or your liability for death or personal
                  injury;
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  limit or exclude our or your liability for fraud or fraudulent
                  misrepresentation;
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  limit any of our or your liabilities in any way that is not
                  permitted under applicable law; or
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="circle"
                  size={8}
                  color={blackcolor}
                  style={ContactStyles.bulleticon}
                />
                <Text style={ContactStyles.bullettext}>
                  exclude any of our or your liabilities that may not be
                  excluded under applicable law.
                </Text>
              </View>
              <Text style={ContactStyles.content}>
                The limitations and prohibitions of liability set in this
                Section and elsewhere in this disclaimer: (a) are subject to the
                preceding paragraph; and (b) govern all liabilities arising
                under the disclaimer, including liabilities arising in contract,
                in tort and for breach of statutory duty.
              </Text>
              <Text style={ContactStyles.content}>
                As long as the website and the information and services on the
                website are provided free of charge, we will not be liable for
                any loss or damage of any nature
              </Text>
              <Text style={ContactStyles.content}>
                Contact Us For any other information or clarification
                https://ntnews.com/contactus
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
