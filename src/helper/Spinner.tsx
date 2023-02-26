import React, { CSSProperties } from 'react';
import { MoonLoader } from 'react-spinners';

interface Props {
  isLoading: boolean;
}

const override: CSSProperties = {
  color: '#E60023',
  position: 'absolute',
  top: '50%',
  left: '50%',
};

function Spinner(props: Props) {
  return (
    <MoonLoader
      color={override.color}
      loading={props.isLoading}
      cssOverride={override}
    />
  );
}

export default Spinner;
