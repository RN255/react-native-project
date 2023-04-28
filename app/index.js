import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { styles } from "../styles/styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is the Home (updated) [wowo!] - With web dev (html, css, js) I had
        to copy word for word, several projects, three, before I could start to
        make my own. Could I not copy down the code... have a copy of it on my
        computer... follow along with their tutorial, and then pick out bits in
        the future? My projects have been used as a code bank, couldn't I use
        someone elses? No. They dont offer that... We might just have to copy,
        word for word, other people's projects and customise them...
      </Text>
    </View>
  );
}
