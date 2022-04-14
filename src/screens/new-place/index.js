import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, Button} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../constants';
import {useDispatch} from 'react-redux';
import {placeActions} from '../../store/action';
import ImageSelector from '../../components/molecules/image-selector';

const NewPlace = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleNameChange = text => setName(text);
  const handleSavePlace = () => {
    dispatch(
      placeActions.addPlace(
        name,
        image,
        '123 street, city, country',
        14.44,
        20.01,
      ),
    );
    navigation.navigate('Place');
  };
  const handleOnImage = uri => {
    setImage(uri);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <ImageSelector onImage={handleOnImage} />
        <TextInput
          style={styles.input}
          onChangeText={handleNameChange}
          value={name}
        />
        <Button
          title="Save place"
          onPress={() => handleSavePlace()}
          color={COLORS.primaryColor}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
