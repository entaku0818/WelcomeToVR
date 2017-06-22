import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Image
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
	constructor() {
    super();

    this.state = {
      textColor: 'white',
      backImage: 'chess-world.jpg'
    };
  }

  changeBackImage(PlaceId){
    if(PlaceId == 1){
        this.setState({backImage: 'Paris.jpg'})
    }else if(PlaceId == 2){
        this.setState({backImage: 'Arizona.jpg'})
    }else if(PlaceId == 3){
        this.setState({backImage: 'Liberia.jpg'})
    }
  }
  render() {
    return (
      <View>
        <Pano source={asset(this.state.backImage)}/>

          <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: 5,
                    alignItems: 'stretch',
                    transform: [{translate: [-2.5, 0, -5]}],
                }}>

            <VrButton
                onClick={()=>this.changeBackImage(1)}
                style={{flex: 1}}>
                    <Text style={{fontSize: 0.2, textAlign: 'center', margin: 0.1, height: 0.3, backgroundColor: '#777879'}}>Go to Paris!</Text>
            </VrButton>
            <VrButton
                onClick={()=>this.changeBackImage(2)}
                style={{flex: 1}}>
                    <Text style={{fontSize: 0.2, textAlign: 'center', margin: 0.1, height: 0.3, backgroundColor: '#777879'}}>Go to Arizona!</Text>
            </VrButton>
                        <VrButton
                onClick={()=>this.changeBackImage(3)}
                style={{flex: 1}}>
                    <Text style={{fontSize: 0.2, textAlign: 'center', margin: 0.1, height: 0.3, backgroundColor: '#777879'}}>Go to Liberia!</Text>
            </VrButton>
            </View>

      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
