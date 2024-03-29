/**
 * Author: Dimitri Zvolinski
 */
import { ReactElement, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Queries } from '@greeneggs/graphql'
import { comment } from '@greeneggs/types/graphql'
import { Text, TopNavigation } from '@ui-kitten/components'
import { View, ScrollView } from 'react-native'
import { LoadingScreen } from '../../ui/loading-screen'
import { RecipeAddComment } from './recipe-add-comment'
import { RecipeComment } from './recipe-comment'
import { RecipeCommentList } from './recipe-comment-list'
import { RouteProp, useRoute } from '@react-navigation/native'
import { LoggedInRouteParams } from '@greeneggs/navigation/types'
import { ViewMore } from '@greeneggs/ui/list-items'

/**
 * Screen for showing a recipe comment and all of its replies.
 */
export function RecipeCommentReplies(): ReactElement {
  const route = useRoute<RouteProp<LoggedInRouteParams, 'RecipeCommentReplies'>>()
  const { commentId, replying: isReplying } = route.params
  const [visibleCommentCount, setVisibleCommentCount] = useState<number>(3)

  const {
    data,
    loading: isLoading,
    error,
  } = useQuery<comment>(Queries.getComment, {
    variables: {
      commentId,
    },
  })

  if (isLoading || !data?.comment.data) {
    return <LoadingScreen />
  }

  if (error) {
    return <Text>Error! {error.message}</Text>
  }

  const comment = data.comment.data

  return (
    <>
      <TopNavigation title='Comment Thread' />
      <ScrollView>
        <RecipeComment comment={comment} />
        <View style={{ padding: 16 }}>
          {isReplying && (
            <View style={{ marginBottom: 16 }}>
              <RecipeAddComment commentId={comment.id} isReply active />
            </View>
          )}
          {comment.replies.length > 0 && (
            <>
              <Text category='h6' style={{ marginBottom: 16 }}>
                {`All Replies (${comment.replyCount})`}
              </Text>
              <RecipeCommentList comments={comment.replies.slice(0, visibleCommentCount)} />
            </>
          )}
          {comment.replies.length > visibleCommentCount && (
            <ViewMore
              style={{ marginHorizontal: -16 }}
              onPress={() => setVisibleCommentCount(visibleCommentCount + 3)}
            />
          )}
        </View>
      </ScrollView>
    </>
  )
}
