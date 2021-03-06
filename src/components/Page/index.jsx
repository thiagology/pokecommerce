import React from 'react';
import ClayLayout from '@clayui/layout';

export default function Page({ title, children }) {
  return (
    <div className='background'>
      <ClayLayout.Container className="mt-4">
        <h1>{title}</h1>

        <div>{children}</div>
      </ClayLayout.Container>
    </div>
  );
}
