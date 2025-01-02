import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const TermsPage = ({ route }) => {
  const { title } = route.params; // Get the title from navigation params

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {title === 'Terms of Service' ? (
        <View>
          {/* Terms Content */}
          <Text style={styles.sectionTitle}>Welcome to ADX by PostX</Text>
          <Text style={styles.sectionText}>
            These Terms and Conditions ("Terms") govern your use of the ADX by PostX mobile application ("App"). By downloading, accessing, or using the App, you agree to be bound by these Terms. If you do not agree, please refrain from using the App.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>1.</Text> App Usage</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>1.1.</Text> The App is designed to provide audio descriptions and captions for movies, enhancing accessibility for users with visual or hearing impairments.
            <Text style={styles.boldText}>1.2.</Text> You must be at least 13 years of age to use the App. If you are under 18, you represent that you have obtained parental or guardian consent to use the App. 
            <Text style={styles.boldText}>1.3.</Text> You agree to use the App in compliance with applicable laws and regulations.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>2.</Text> User Accounts</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>2.1.</Text> You may need to create an account to access certain features of the App. You are responsible for maintaining the confidentiality of your account information. 
            <Text style={styles.boldText}>2.2.</Text> All information provided during registration must be accurate and up-to-date. You agree to update your information as needed to maintain accuracy.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>3.</Text> Content</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>3.1.</Text> The App allows users to access audio descriptions and audio files for movies.
            <Text style={styles.boldText}>3.2.</Text> The App does not store or distribute movies; it only facilitates access to supplemental accessibility content.
            <Text style={styles.boldText}>3.3.</Text> You may not reproduce, distribute, or publicly display any content accessed through the App without proper authorization.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>4.</Text> Intellectual Property</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>4.1.</Text> All intellectual property rights related to the App, including but not limited to software, logos, trademarks, and design, are owned by PostX or its licensors.
            <Text style={styles.boldText}>4.2.</Text> You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.
            <Text style={styles.boldText}>4.3.</Text> You agree not to reverse engineer, modify, or create derivative works based on the App.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>5.</Text> Privacy</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>5.1.</Text> The App collects and processes certain data as described in our Privacy Policy. By using the App, you consent to such data collection and processing.
            <Text style={styles.boldText}>5.2.</Text> You agree not to misuse the App in a way that compromises the privacy or security of others.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>6.</Text> Limitations of Liability</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>6.1.</Text> The App is provided "as is" without any warranties, express or implied. PostX disclaims all liability for any interruptions, errors, or inaccuracies in the App’s content or functionality.
            <Text style={styles.boldText}>6.2.</Text> PostX is not responsible for any damages arising from the use or inability to use the App, including data loss or device malfunction.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>7.</Text> Termination</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>7.1.</Text> PostX reserves the right to suspend or terminate your access to the App at any time, without notice, for any reason, including violation of these Terms.
            <Text style={styles.boldText}>7.2.</Text> Upon termination, you must cease all use of the App and delete any downloaded content.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>8.</Text> Governing Law</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>8.1.</Text> These Terms are governed by the laws of India, without regard to conflict of law principles.
            <Text style={styles.boldText}>8.2.</Text> Any disputes arising under these Terms will be subject to the exclusive jurisdiction of the courts in India.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>9.</Text> Changes to the Terms</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>9.1.</Text> PostX reserves the right to modify these Terms at any time. Changes will be effective upon posting to the App. Continued use of the App constitutes acceptance of the updated Terms.
          </Text>
        </View>
      ) : (
        <View>
          {/* Privacy Policy Content */}
          <Text style={styles.sectionTitle}>Privacy Policy</Text>
          <Text style={styles.sectionText}>
            *Effective Date:* 12-12-2024
            Thank you for using ADX by PostX (the "App"). Your privacy is important to us, and this Privacy Policy explains how we collect, use, and protect your information.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>1.</Text> Information We Collect</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>1.1.</Text> *Personal Information*: When you create an account or interact with the App, we may collect personal information such as your name, email address, and contact details.
            <Text style={styles.boldText}>1.2.</Text> *Usage Data*: We collect information about how you interact with the App, including features accessed, time spent, and error reports to improve the user experience.
            <Text style={styles.boldText}>1.3.</Text> *Device Information*: We may collect data about your device, such as device type, operating system, and unique device identifiers.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>2.</Text> How We Use Your Information</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>2.1.</Text> To provide and improve the App’s functionality and user experience.
            <Text style={styles.boldText}>2.2.</Text> To respond to your inquiries, troubleshoot issues, and provide customer support.
            <Text style={styles.boldText}>2.3.</Text> To send you updates, notifications, or promotional materials, subject to your preferences.
            <Text style={styles.boldText}>2.4.</Text> To analyze usage patterns and improve our services.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>3.</Text> Sharing Your Information</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>3.1.</Text> We do not sell your personal information to third parties.
            <Text style={styles.boldText}>3.2.</Text> We may share your information with trusted service providers who assist us in operating the App or delivering services, subject to confidentiality agreements.
            <Text style={styles.boldText}>3.3.</Text> We may disclose information if required by law, regulation, or legal process.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>4.</Text> Data Retention</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>4.1.</Text> We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or comply with legal obligations.
            <Text style={styles.boldText}>4.2.</Text> You may request deletion of your account and associated data by contacting us at hello@bypostoffice.com.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>5.</Text> Security</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>5.1.</Text> We implement appropriate technical and organizational measures to protect your information from unauthorized access, loss, or misuse.
            <Text style={styles.boldText}>5.2.</Text> While we strive to safeguard your data, no system can be completely secure. Use the App at your own risk.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>6.</Text> Your Rights</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>6.1.</Text> You have the right to access, correct, or delete your personal information by contacting us at hello@bypostoffice.com.
            <Text style={styles.boldText}>6.2.</Text> You may opt-out of receiving promotional communications by following the unsubscribe instructions in our emails.
            <Text style={styles.boldText}>6.3.</Text> Depending on your jurisdiction, you may have additional rights, such as data portability or the right to restrict processing.
          </Text>

          <Text style={styles.sectionTitle}><Text style={styles.boldText}>7.</Text> Children’s Privacy</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.boldText}>7.1.</Text> The App is not intended for children under the age of 13. We do not knowingly collect personal information from children without parental consent.
            <Text style={styles.boldText}>7.2.</Text> If we become aware that we have inadvertently collected information from a child under 13, we will delete it promptly.
          </Text>
        </View>
      )}

      {/* Contact Us Section */}
      <View style={styles.contactContainer}>
        <Image source={require('../../assets/PostOffice.png')} style={styles.contactImage} />
        <Text style={styles.contactText}>Contact Us:</Text>
        <Text style={styles.contactDetails}><Text style={styles.boldText}>Post Office - Digital Media Technologies Inc.,</Text></Text>
        <Text style={styles.contactDetails}><Text style={styles.boldText}>Email:</Text> hello@bypostoffice.com</Text>
        <Text style={styles.contactDetails}><Text style={styles.boldText}>Phone:</Text> +91-9840157677</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#42a4cf',
    marginVertical: 10,
  },
  sectionText: {
    fontSize: 14,
    color: '#6e6e6e',
    lineHeight: 20,
    marginBottom: 10,
  },
  contactContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  contactImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  contactText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  contactDetails: {
    fontSize: 14,
    color: '#6e6e6e',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default TermsPage;
