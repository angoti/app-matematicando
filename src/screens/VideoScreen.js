import { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import styles from '../styles/styles';
import { getVideoAulas } from '../api/dados';

function VideosScreen() {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const videoAulas = getVideoAulas();
  const width = Dimensions.get('window').width - 30;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de video aulas</Text>
      <View style={{ flex: 2 }}>
        <FlatList
          data={videoAulas}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={localStyles.button}
              onPress={() => setSelectedVideoId(item.videoId)}>
              <Text
                style={localStyles.buttonText}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.titulo}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 40,
        }}>
        {selectedVideoId && (
          <YoutubeIframe
            key={selectedVideoId} // Add this line
            width={width}
            height="100%"
            videoId={selectedVideoId}
          />
        )}
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  button: {
    backgroundColor: '#dcdcdc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
  },
  buttonText: {
    color: '#000000',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default VideosScreen;
