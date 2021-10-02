import React, { FormEvent, useRef } from 'react';

export interface ICountdownFormData {
  name: string;
  targetDate: Date;
  startDate: Date;
}

interface ICountdownFormProps {
  onSubmit: (formData: ICountdownFormData) => void;
}

/**
 * Primary UI component for user interaction
 */
function CountdownForm({
  onSubmit,
  ...props
}: ICountdownFormProps): JSX.Element {
  const currentDateTimeIso = new Date().toISOString();
  const currentDateTimeFormatted = currentDateTimeIso.substr(
    0,
    currentDateTimeIso.lastIndexOf(':')
  );

  const elName = useRef<HTMLInputElement>(null);
  const elTargetDate = useRef<HTMLInputElement>(null);
  const elStartDate = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (
      elName.current?.checkValidity() &&
      elTargetDate.current?.checkValidity() &&
      elStartDate.current?.checkValidity()
    ) {
      onSubmit({
        name: elName.current.value,
        targetDate: new Date(elTargetDate.current.value),
        startDate: new Date(elStartDate.current.value),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <div>Name </div>
        <input id="name" name="name" ref={elName} required type="text" />
      </label>
      <label htmlFor="target-date">
        <div>Target Date </div>
        <input
          id="target-date"
          name="target-date"
          ref={elTargetDate}
          required
          type="datetime-local"
          min={currentDateTimeFormatted}
        />
      </label>
      <label htmlFor="start-date">
        <div>Start Date </div>
        <input
          id="start-date"
          name="start-date"
          ref={elStartDate}
          required
          type="datetime-local"
          defaultValue={currentDateTimeFormatted}
        />
      </label>
      <div>
        <button>Create countdown</button>
      </div>
    </form>
  );
}

export default CountdownForm;
