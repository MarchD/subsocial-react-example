import { PostId, PostWithSomeDetails } from '@subsocial/api/flat-subsocial/dto';
import {
  CommentStruct,
  PostStruct,
} from '@subsocial/api/flat-subsocial/flatteners';
import { CommentContent, PostData } from '@subsocial/types';

export interface CommentsProps {
  parentStruct: PostStruct;
}

export interface CommentProps {
  commentId: PostId;
  commentDetails: PostWithSomeDetails;
}

export interface NewCommentProps {
  parentStruct: PostStruct;
  placeholder: string;
  className?: string;
  autofocus?: boolean;
  onClickCancel?: () => void;
}

export interface EditCommentProps {
  comment: PostData;
  onClickCancel: () => void;
  className?: string;
  autofocus?: boolean;
}

export interface CommentActionProps {
  onReply: () => void;
  comment: PostStruct;
}

export interface CommentExtension {
  parentId: PostId | null;
  rootPostId: PostId;
}
