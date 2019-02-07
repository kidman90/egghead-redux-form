import React from 'react';
// import ReactJson from 'react-json-view';

export const customInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} />
      {/* <ReactJson src={props.meta} /> */}
      {(meta.error && meta.touched) && (
        <div style={{ color: 'red' }}>{meta.error}</div>
      )}
    </div>
  );
};

export const customSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
      {/* <ReactJson src={props.meta} /> */}
    </div>
  );
};
