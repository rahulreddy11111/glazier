import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const TermsConditions = (props) => {
  return (
    <ScrollView style={{ height : '100%' , width: '100%' }}>
      <View style ={{height : '100%'}}>
        <Text style={{ top : 3,fontWeight: '700' }}>Introduction:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        These terms govern the relationship between users and the water purifier product, establishing the legal framework for usage.
Users, by utilizing the product, implicitly agree to abide by the outlined terms and conditions.
The agreement is a binding contract outlining the rights and responsibilities of both parties involved.
It sets clear expectations to ensure a fair and mutually beneficial relationship between users and the brand.
        </Text>
        <Text style={{ fontWeight: '700' }}>Brand Integrity: </Text>
        <Text style={{ height: '200', marginBottom: '3%' }}>
        Brand integrity is a cornerstone, emphasizing the significance of the water purifier brand value.
Any attempt to duplicate the product or misuse the brand name is strictly forbidden.
These measures aim to preserve the brand's reputation and maintain consumer trust.
Activities that harm the brand's reputation, such as false associations, are expressly prohibited.
        </Text>
        <Text style={{ fontWeight: '700' }}>Product Usage Restrictions: </Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        The product is intended for personal use, ensuring it fulfills its designed purpose effectively.
Commercial resale of the product for financial gain is strictly prohibited.
These restrictions aim to maintain the intended use of the product and prevent unauthorized distribution.
Users are encouraged to enjoy the benefits of the product for personal use without engaging in commercial activities.
        </Text>
        <Text style={{ fontWeight: '700' }}>Misuse of Logo: </Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        The logo is a protected intellectual property and a vital element of the brand's visual identity.
Unauthorized use, reproduction, or alteration of the logo is strictly forbidden.
This protects the brand's distinct visual representation and prevents misleading associations.
Preserving the logo's integrity is essential for maintaining brand recognition and consumer trust.
        </Text>
        <Text style={{ fontWeight: '700' }}>Punishable Offense:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        Violating the terms, such as duplicating the product or misusing the brand, is a punishable offense.
Legal consequences, including civil and criminal proceedings, serve as a deterrent.
This underscores the seriousness of maintaining compliance with the established terms.
The aim is to safeguard the brand's interests and deter any activities that may compromise its integrity.
        </Text>
        <Text style={{ fontWeight: '700' }}>Intellectual Property Rights:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        Intellectual property laws, including copyright, trademark, and patent laws, protect the water purifier and its brand.
These laws provide legal avenues to safeguard the brand's innovations and creations.
Infringement on these rights may result in legal consequences, reinforcing the importance of respecting intellectual property.

        </Text>
        <Text style={{ fontWeight: '700' }}>Resale Restrictions:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        Resale restrictions are in place to control the distribution channels of the product.
Reselling without explicit permission from the brand owner is strictly prohibited.
This ensures that the product is consistently available through authorized retailers, maintaining quality standards.
Unauthorized resale may lead to legal action to prevent unauthorized distribution.
        </Text>
        <Text style={{ fontWeight: '700' }}>Commercial Malpractice:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        Commercial malpractice involves activities that undermine the brand's integrity and honesty.
Deceptive marketing practices, false advertising, or any conduct harming the brand's image is strictly prohibited.
This ensures that the brand is associated with ethical business practices, fostering trust among consumers.
        </Text>
        <Text style={{ fontWeight: '700' }}>Sections of the IP Act:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        The agreement falls under the purview of intellectual property laws, referencing the Intellectual Property Act (IP Act).
These laws provide a legal framework for protecting the brand's intellectual creations and innovations.
Users are expected to adhere to these laws and respect the brand's intellectual property rights.
        </Text>
        <Text style={{ fontWeight: '700' }}>Modification of Terms:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        The brand owner retains the right to modify the terms to adapt to changing circumstances.
Users are encouraged to regularly review the terms for any updates or changes.
Any modifications made by the brand owner are effective immediately upon posting.
This flexibility allows the brand to adapt to evolving situations while ensuring transparency with users.
        </Text>
        <Text style={{ fontWeight: '700' }}>Termination of Use:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
          The brand owner reserves the right to terminate the use of the Product and take legal action against any user found in violation of these Terms.
        </Text>
        <Text style={{ fontWeight: '700' }}>Contact Information:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
          For questions or concerns regarding these Terms and Conditions, please contact the brand owner at [contact@waterpurifierbrand.com].
        </Text>
      </View>
    </ScrollView>
  );
};

export default TermsConditions;
