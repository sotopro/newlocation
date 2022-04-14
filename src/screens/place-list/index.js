import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import PlaceItem from '../../components/molecules/place-item';
import {placeActions} from '../../store/action';

const PlaceList = ({navigation}) => {
  const dispatch = useDispatch();
  const places = useSelector(state => state.places.places);

  useEffect(() => {
    dispatch(placeActions.loadPlace());
  }, []);

  console.warn('PlaceList', places);
  const onSelectDetail = () => {
    navigation.navigate('PlaceDetail');
  };

  const renderItem = ({item}) => (
    <PlaceItem
      name={item.name}
      address={item.address}
      onSelect={() => onSelectDetail()}
      image={item.image}
      latitude={item.latitude}
      longitude={item.longitude}
    />
  );

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default PlaceList;
