import {ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <FancyCard />
      <ContactList />
      <ActionCard />
    </ScrollView>
  );
}
