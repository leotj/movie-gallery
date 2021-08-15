import React from 'react';
import { DatePicker } from 'react-rainbow-components';
import { DateFilterValue } from 'types/date-filter';

export interface Props {
  value: DateFilterValue;
  onChange: (value: Date) => void;
}

const containerStyles = {
  width: 400,
  maxWidth: 400,
};

export default function DateFilter(props: Props) {
  return (
    <div
      className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
      style={containerStyles}
    >
      <DatePicker
        id="datePicker-15"
        placeholder="Select range of dates"
        selectionType="range"
        formatStyle="large"
        variant="single"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
