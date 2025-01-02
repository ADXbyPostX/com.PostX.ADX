import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Animated } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity for all elements
  const [logoTranslateY] = useState(new Animated.Value(0)); // Initial position for the logo
  const [gradientColors, setGradientColors] = useState(['#000000', '#0f0f0f', '#141414']);

  useEffect(() => {
    // Animate the logo upward and fade in the rest of the elements
    Animated.sequence([
      // Move logo slightly upward
      Animated.timing(logoTranslateY, {
        toValue: -150, // Move upward to the top-center
        duration: 2000, // Duration for smooth movement
        useNativeDriver: true,
      }),
      // Fade in the button
      Animated.timing(fadeAnim, {
        toValue: 1, // Target opacity
        duration: 1500, // Duration for fade-in
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, logoTranslateY]);

  return (
    <View style={styles.container}>
      {/* Animated logo */}
      <Animated.Image
        source={require('../../assets/ADX_logo.png')}
        style={[styles.logo, { transform: [{ translateY: logoTranslateY }] }]}
      />

      {/* Button */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Footer Text with Links */}
      <View style={styles.footerContainer}>
        <Animated.Text style={[styles.footerText, { opacity: fadeAnim }]}>
          By continuing, you agree to PostX's{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('TermsPage', { title: 'Terms of Service' })}
          >
            Terms of Service
          </Text>{' '}
          and{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('TermsPage', { title: 'Privacy Policy' })}
          >
            Privacy Policy
          </Text>
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center elements initially
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000', // Replacing the LinearGradient with a solid background color
  },
  logo: {
    width: 200, // Adjust size for the logo
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#0f0f0f',
    paddingVertical: 18,
    paddingHorizontal: 140,
    borderRadius: 50,
    marginTop: 40, // Space between logo and button
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5, // Shadow for Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 20, // Keep footer at the bottom
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: '#9e9e9e',
    fontSize: 14,
    textAlign: 'center',
  },
  linkText: {
    color: '#42a4cf', // Blue for links
    textDecorationLine: 'underline',
  },
});

export default LoginPage;