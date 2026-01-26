import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  // Қолданушы деректері
  const userData = {
    name: 'Қалиев Әли',
    group: 'Топ: АҚ-201',
    email: 'alikali@example.kz',
    phone: '+7 (777) 234-56-78',
    hobby: 'Бағдарламалау, домбыра, саяхаттау',
    quote: '«Код — бұл әлемді жақсартатын поэзия.»'
  };

  // Email жіберу функциясы
  const sendEmail = () => {
    Linking.openURL(`mailto:${userData.email}`);
  };

  // Телефон шалатын функция
  const callPhone = () => {
    Linking.openURL(`tel:${userData.phone}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
        {/* Тақырып */}
        <Text style={styles.header}>Менің Визиткам</Text>
        
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            
            {/* Профиль суреті */}
            <View style={styles.imageContainer}>
              <Image
                source={{ 
                  uri: 'https://avatars.mds.yandex.net/i?id=47fa0474aa5a9f7ec0eb200d44c32d1f_l-4557823-images-thumbs&n=13'
                }}
                style={styles.profileImage}
              />
            </View>

            {/* Аты-жөні */}
            <Text style={styles.name}>{userData.name}</Text>
            
            {/* Топ */}
            <Text style={styles.group}>{userData.group}</Text>

            {/* Бөлгіш */}
            <View style={styles.divider} />

            {/* Байланыс ақпараты */}
            <View style={styles.infoSection}>
              
              {/* Email */}
              <TouchableOpacity style={styles.infoRow} onPress={sendEmail}>
                <Ionicons name="mail-outline" size={24} color="#6200ee" />
                <Text style={styles.infoText}>{userData.email}</Text>
                <Ionicons name="open-outline" size={18} color="#888" style={styles.iconRight} />
              </TouchableOpacity>

              {/* Телефон */}
              <TouchableOpacity style={styles.infoRow} onPress={callPhone}>
                <Ionicons name="call-outline" size={24} color="#6200ee" />
                <Text style={styles.infoText}>{userData.phone}</Text>
                <Ionicons name="open-outline" size={18} color="#888" style={styles.iconRight} />
              </TouchableOpacity>

              {/* Хобби */}
              <View style={styles.infoRow}>
                <Ionicons name="heart-outline" size={24} color="#6200ee" />
                <Text style={styles.infoText}>{userData.hobby}</Text>
              </View>

            </View>

            {/* Дәйексөз бөлек картада */}
            <Card style={styles.quoteCard}>
              <Card.Content style={styles.quoteContent}>
                <Ionicons name="chatbubble-ellipses-outline" size={28} color="#6200ee" style={styles.quoteIcon} />
                <Text style={styles.quoteText}>{userData.quote}</Text>
              </Card.Content>
            </Card>

            {/* Әлеуметтік желілер */}
            <View style={styles.socialContainer}>
              <Text style={styles.socialTitle}>Әлеуметтік желілер:</Text>
              <View style={styles.socialIcons}>
                <TouchableOpacity style={styles.socialButton}>
                  <Ionicons name="logo-github" size={32} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Ionicons name="logo-linkedin" size={32} color="#0077b5" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Ionicons name="logo-telegram" size={32} color="#0088cc" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Ionicons name="logo-vk" size={32} color="#4c75a3" />
                  </TouchableOpacity>
              </View>
            </View>

          </Card.Content>
        </Card>

        {/* Футер */}
        <Text style={styles.footer}>Expo Snack-та жүрекпен жасалды ❤️</Text>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
    paddingTop: 40,
    paddingBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  cardContent: {
    padding: 24,
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#6200ee',
    backgroundColor: '#f0f0f0',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  group: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#e0e0e0',
    marginVertical: 20,
  },
  infoSection: {
    width: '100%',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
    color: '#444',
  },
  iconRight: {
    marginLeft: 8,
  },
  quoteCard: {
    width: '100%',
    backgroundColor: '#f0f0ff',
    borderColor: '#6200ee',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  quoteContent: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quoteIcon: {
    marginRight: 12,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    flex: 1,
    lineHeight: 22,
  },
  socialContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  footer: {
    fontSize: 14,
    color: '#888',
    marginTop: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});