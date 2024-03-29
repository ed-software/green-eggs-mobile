/**
 * Author: Edward Jones
 */
import { useState } from 'react'
import { Platform, View } from 'react-native'
import { Menu, MenuItem, Modal, Text, useTheme } from '@ui-kitten/components'
import * as ImagePicker from 'expo-image-picker'
import { ReactNativeFile } from 'apollo-upload-client'
import { ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FieldError } from 'react-hook-form'
import * as Icons from '@greeneggs/ui/icons'

interface Props {
  label?: string
  uri?: string
  onChange: (...event: unknown[]) => void
  error?: FieldError
}

/**
 * Input component for uploading images
 */
export function ImageUpload({ label, uri, onChange, error }: Props) {
  const theme = useTheme()
  const [isModalVisible, setIsModalVisible] = useState(false)

  type ImageSource = 'gallery' | 'camera'

  const pickImage = async (source: ImageSource, onChange: (...event: unknown[]) => void) => {
    cancelModal()

    if (Platform.OS !== 'web') {
      if (source === 'camera') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }

      if (source === 'gallery') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need media library permissions to make this work!')
        }
      }
    }

    const result = await (source === 'camera'
      ? ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.5,
        })
      : ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.5,
        }))

    if (!result.cancelled) {
      const newFile = {
        uri: result.uri,
        name: `${result.uri.substr(result.uri.lastIndexOf('/') + 1)}`,
        type: 'image/jpeg',
      }
      onChange(new ReactNativeFile(newFile))
    }
  }

  const cancelModal = () => {
    setIsModalVisible(false)
  }

  const textColor = error ? theme['color-danger-500'] : theme['color-basic-600']

  return (
    <View style={{ marginBottom: 16 }}>
      <Modal
        visible={isModalVisible}
        onBackdropPress={cancelModal}
        backdropStyle={{ backgroundColor: 'rgba(0, 0, 0,0.4)' }}
      >
        <View style={{ width: 132 }}>
          <Menu>
            <MenuItem title='CAMERA' accessoryLeft={Icons.Camera} onPress={() => void pickImage('camera', onChange)} />
            <MenuItem title='GALLERY' accessoryLeft={Icons.Image} onPress={() => void pickImage('gallery', onChange)} />
            <MenuItem title='CANCEL' accessoryLeft={Icons.Cross} onPress={cancelModal} />
          </Menu>
        </View>
      </Modal>
      {label && (
        <Text category='label' appearance='hint' style={{ marginBottom: 6 }}>
          {label}
        </Text>
      )}
      <View
        style={{
          width: '100%',
          aspectRatio: 1 / 1,
          borderWidth: 2,
          borderRadius: 4,
          borderStyle: 'dashed',
          borderColor: textColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {uri ? (
          <View
            style={{
              alignItems: 'center',
              padding: 4,
              justifyContent: 'center',
            }}
          >
            <ImageBackground
              source={{ uri }}
              style={{
                width: '100%',
                aspectRatio: 1 / 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <LinearGradient
                colors={['rgba(255, 255, 255,0)', 'rgba(0, 0, 0,0.2)']}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  height: '100%',
                }}
              />
              <Icons.Cross
                style={{
                  margin: 0,
                  width: 64,
                  height: 64,
                }}
                fill='white'
                onPress={() => onChange(undefined)}
              />
            </ImageBackground>
          </View>
        ) : (
          <>
            <Icons.Camera
              onPress={() => setIsModalVisible(true)}
              style={{
                width: 64,
                height: 64,
              }}
              fill={theme['color-basic-600']}
            />
            <Text appearance='hint'>Upload an image</Text>
          </>
        )}
      </View>
      <Text
        category='c1'
        style={{
          marginTop: 6,
          color: textColor,
        }}
      >
        {error?.message}
      </Text>
    </View>
  )
}
