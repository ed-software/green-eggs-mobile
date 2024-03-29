/**
 * Author: Edward Jones
 */
import { Input } from '@greeneggs/ui/input'
import { InputProps, Text, ThemedComponentProps, useTheme } from '@ui-kitten/components'
import { ReactElement } from 'react'
import { FieldError, Path, PathValue } from 'react-hook-form'
import { View } from 'react-native'

import { numberToString, stringToNumber } from './utils'

interface TimeFields {
  hours?: number | null
  minutes?: number | null
}

interface Props<TFieldValues> {
  value: PathValue<TFieldValues, Path<TFieldValues>>
  onChange: (...event: unknown[]) => void
  error?: FieldError
  inputProps?: InputProps
  onBlur: () => void
}

export const millisecondsToHoursAndMinutes = <TFieldValues,>(
  milliseconds: PathValue<TFieldValues, Path<TFieldValues>>
): TimeFields => {
  if (milliseconds === null) {
    return {
      hours: null,
      minutes: null,
    }
  }
  const totalMinutes = Number(milliseconds) / (1000 * 60)
  return {
    hours: Math.floor(totalMinutes / 60),
    minutes: Math.floor(totalMinutes % 60),
  }
}

export const hoursAndMinutesToMilliseconds = ({ hours, minutes }: TimeFields): number | null => {
  if (hours === null && minutes === null) {
    return null
  }
  const hoursAsMilliseconds = (hours || 0) * 60 * 60 * 1000
  const minutesAsMilliseconds = (minutes || 0) * 60 * 1000
  return hoursAsMilliseconds + minutesAsMilliseconds
}

/**
 * Input component for time fields
 */
export function TimeInput<TFieldValues>({
  value,
  inputProps,
  error,
  onChange,
}: Props<TFieldValues> & ThemedComponentProps): ReactElement {
  const theme = useTheme()
  const handleChange = ({ hours: newHours, minutes: newMinutes }: TimeFields) => {
    const { hours: oldHours, minutes: oldMinutes } = millisecondsToHoursAndMinutes(value)

    const milliseconds = hoursAndMinutesToMilliseconds({
      hours: newHours !== null ? newHours || oldHours : null,
      minutes: newMinutes !== null ? newMinutes || oldMinutes : null,
    })

    onChange(numberToString(milliseconds))
  }

  const textColor = error ? theme?.['color-danger-500'] : theme?.['color-basic-400']

  return (
    <>
      <Text appearance='hint' category='label' style={{ marginBottom: 4 }}>
        {inputProps?.label?.toString()}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 4,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: textColor,
        }}
      >
        <Input
          {...{
            ...inputProps,
            label: undefined,
            style: { borderWidth: 0 },
            placeholder: '0',
            status: error ? 'danger' : undefined,
            value: numberToString<TFieldValues>(millisecondsToHoursAndMinutes(value).hours || null),
            onChangeText: (hours) => handleChange({ hours: stringToNumber(hours) }),
          }}
        />
        <Text style={{ color: theme?.['color-basic-600'] }}>:</Text>
        <Input
          {...{
            ...inputProps,
            label: undefined,
            placeholder: '00',
            status: error ? 'danger' : undefined,
            style: { borderWidth: 0, flexGrow: 1 },
            value: numberToString<TFieldValues>(millisecondsToHoursAndMinutes(value).minutes || null),
            onChangeText: (minutes) => handleChange({ minutes: stringToNumber(minutes) }),
          }}
        />
      </View>
      <Text
        category='c1'
        style={{
          marginTop: 6,
          color: textColor,
          marginBottom: 6,
        }}
      >
        {error?.message}
      </Text>
    </>
  )
}
