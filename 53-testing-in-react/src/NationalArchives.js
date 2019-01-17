import React from 'react';
import NicolasCage from './NicolasCage';

class NationalArchives extends React.Component {
  state = {
    documents: 'Declaration of Independence',
  }

  updateState = () => {
    this.setState({ documents: null })
  }

  render() {
    return (
      <div>
        <NicolasCage stealDeclaration={this.updateState}/>
      </div>
    )
  }
}

export default NationalArchives;
