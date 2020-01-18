import React from 'react';
import MaterialIcon from 'material-icons-react';

export function MemberCard(props) {
  const { name, level, licenca } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#3269A8',
        border: 1
      }}
    >
      <div style={{ flex: 1, flexDirection: 'row' }}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L._SY355_.png"
          style={{ width: 30 }}
        />
        <b style={{ justifySelf: 'end', padding: 15 }}>{name}</b>
      </div>
      <div>
        <span>{level} </span>
        {licenca == 'true' && <MaterialIcon size={16} icon="verified_user" />}
      </div>
    </div>
  );
}
