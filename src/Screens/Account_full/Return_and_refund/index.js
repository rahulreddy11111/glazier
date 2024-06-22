import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Return_and_refund = (props) => {
  return (
    <ScrollView style={{ top : 10,height : '100%' , width: '100%'}}>
      <View style ={{height : '100%'}}>
      <Text style={{ fontWeight: '700' }}>At [Glaizer], we believe in providing a transparent and customer-centric shopping experience. Our Return and Refund Policy is crafted to ensure fairness and clarity in all transactions. Please read through the comprehensive details below to understand our policies thoroughly.

</Text>


        <Text style={{ top : 3,fontWeight: '700' }}>1. Returns:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        Returning a product is subject to the following conditions:

Customers must initiate a return by contacting our customer service within [X] days of receiving the product.
The returned product must be in its original state, undamaged, and unused.
Any malfunction or damage caused by the customer may lead to the automatic denial of the return request.
Returns will be declined if the product is not accompanied by the original packaging, accessories, or proof of purchase.
        </Text>
        <Text style={{ fontWeight: '700' }}>2. Refunds:</Text>
        <Text style={{ height: '200', marginBottom: '3%' }}>
        Our refund policy is structured with various considerations in mind:

Refunds will be processed after the returned product undergoes a thorough inspection and receives approval.
In cases of defects or errors on our part, a full refund will be initiated promptly.
Refunds for malfunctions or damages attributed to customer actions may be partial or declined.
The duration of the refund process depends on factors such as payment gateway processing times and bank procedures.
</Text>
        
        <Text style={{ fontWeight: '700' }}>3. Exchange Policy:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        Our exchange policy is designed to offer convenience to our customers:

Customers can request exchanges within [X] days of the original purchase date.
The product for exchange must be in its original condition, unused, and with all accompanying accessories.
The exchange process has been streamlined to ensure a hassle-free experience for our valued customers.
        </Text>
        <Text style={{ fontWeight: '700' }}>4. Refund Delays:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        While we aim for promptness, refund processing times are influenced by various factors:

Delays may occur due to payment gateway processing times and the procedural requirements of banks.
Technical issues beyond our control may impact the speed of the refund process.
Please be assured that we remain committed to facilitating refunds as expeditiously as possible, considering these external factors.
        </Text>
        <Text style={{ fontWeight: '700' }}>5. Customer Agreement:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        An essential aspect of our policy is customer agreement:

By placing an order with [Your Company Name], customers implicitly agree to the terms and conditions outlined in this Return and Refund Policy.
It is the responsibility of the customer to read and understand these policies before completing a purchase.
        </Text>
        <Text style={{ fontWeight: '700' }}>6. No Complains or Disputes:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        A crucial provision to note:

Customers who have agreed to and acknowledged these policies during the purchase process cannot raise any complaints or disputes related to the terms outlined herein.
Any such complaints will be considered null and void.
        </Text>
        <Text style={{ fontWeight: '700' }}>7. Contact Us:</Text>
        <Text style={{ height: 150, marginBottom: '1%' }}>
        For any questions or concerns regarding our Return and Refund Policy, please reach out to our customer service at [customer.service@example.com].

Thank you for choosing [Your Company Name]. We appreciate your understanding and cooperation in ensuring a transparent, fair, and delightful shopping experience.
        </Text>
        
      </View>
    </ScrollView>
  );
};

export default Return_and_refund;
