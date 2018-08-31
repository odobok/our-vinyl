import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class Have extends Component {
  constructor() {
    super();

    this.state = {
      artist: '',
      album: '',
      fullList: [],
    };
  }

  componentDidMount() {
    const vinylRef = firebase.database().ref('vinyl-simple');
    vinylRef.on('value', (snapshot) => {
        let fullList = snapshot.val();
        let newState = [];
        for (let item in fullList) {
          newState.push({
            id: item,
            artist: fullList[item].artist,
            album: fullList[item].album,
          });
        }

        this.setState({
          fullList: newState,
        });
      });
  }

  render() {
    return (
      <div>
      <p>Records you have: </p>

      <section className='display-list'>
          <div className='wrapper'>
            <ul>
              {this.state.fullList.map((item) => {
                return (
                  <li key={item.id}>
                    <h3>{item.album}</h3>
                    <p>by {item.artist}</p>
                  </li>
                );
              })}
            </ul>
          </div>
      </section>
    </div>
  );
  }
};

export default Have;
