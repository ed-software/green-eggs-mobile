/**
 * Author: Edward Jones
 */
import { ListItem, ListItemProps, Text } from '@ui-kitten/components';
import * as Icons from '@greeneggs/ui/icons'

/**
 * Simple list item component that contains the text READ MORE and down icon
 */
export function ViewMore(props: ListItemProps) {
  return (
    <ListItem
      accessoryRight={Icons.Down}
      title={() => (
        <Text style={{ textAlign: 'center', marginRight: -32 }} category='label'>
          VIEW MORE
        </Text>
      )}
      {...props}
    />
  )
}
