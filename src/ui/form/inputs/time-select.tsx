import { InputProps, Text } from "@ui-kitten/components";
import React from "react";
import {
  DeepMap,
  DeepPartial,
  FieldError,
  Path,
  PathValue,
  UnionLike,
} from "react-hook-form";
import { View } from "react-native";
import { Input } from '@greeneggs/ui';

import { numberToString, stringToNumber } from "./utils";

interface ITimeFields {
  hours?: number | null;
  minutes?: number | null;
}

interface ITimeInput<FieldValues> {
  value: PathValue<FieldValues, Path<FieldValues>>;
  onChange: (...event: any[]) => void;
  error?:
    | DeepMap<
        DeepPartial<UnionLike<PathValue<FieldValues, Path<FieldValues>>>>,
        FieldError
      >
    | undefined;
  inputProps?: InputProps;
  onBlur: () => void;
}

export const millisecondsToHoursAndMinutes = <FieldValues,>(
  milliseconds: PathValue<FieldValues, Path<FieldValues>>
): ITimeFields => {
  if (milliseconds === null) {
    return {
      hours: null,
      minutes: null,
    };
  }
  const totalMinutes = Number(milliseconds) / (1000 * 60);
  return {
    hours: Math.floor(totalMinutes / 60),
    minutes: Math.floor(totalMinutes % 60),
  };
};

export const hoursAndMinutesToMilliseconds = ({
  hours,
  minutes,
}: ITimeFields): number | null => {
  if (hours === null && minutes === null) {
    return null;
  }
  const hoursAsMilliseconds = (hours || 0) * 60 * 60 * 1000;
  const minutesAsMilliseconds = (minutes || 0) * 60 * 1000;
  return hoursAsMilliseconds + minutesAsMilliseconds;
};

export const TimeInput = <FieldValues,>({
  value,
  inputProps,
  error,
  onChange,
}: ITimeInput<FieldValues>) => {
  const handleChange = ({
    hours: newHours,
    minutes: newMinutes,
  }: ITimeFields) => {
    const { hours: oldHours, minutes: oldMinutes } =
      millisecondsToHoursAndMinutes(value);

    const milliseconds = hoursAndMinutesToMilliseconds({
      hours: newHours !== null ? newHours || oldHours : null,
      minutes: newMinutes !== null ? newMinutes || oldMinutes : null,
    });

    onChange(numberToString(milliseconds));
  };

  return (
    <>
      <Text appearance="hint" category="label" style={{ marginBottom: 4 }}>
        {inputProps?.label?.toString()}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 16,
        }}
      >
        <Input
          {...{
            ...inputProps,
            label: undefined,
            // style: { marginRight: 16 },
            placeholder: "0",
            status: error ? "danger" : undefined,
            caption: error?.message || "Hours",
            value: numberToString<FieldValues>(
              millisecondsToHoursAndMinutes(value).hours || null
            ),
            onChangeText: (hours) =>
              handleChange({ hours: stringToNumber(hours) }),
          }}
        />
        <Input
          {...{
            ...inputProps,
            label: undefined,
            placeholder: "0",
            status: error ? "danger" : undefined,
            caption: error?.message || "Minutes",
            value: numberToString<FieldValues>(
              millisecondsToHoursAndMinutes(value).minutes || null
            ),
            onChangeText: (minutes) =>
              handleChange({ minutes: stringToNumber(minutes) }),
          }}
        />
      </View>
    </>
  );
};