import { Box, TextField, IconButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import { FC, useState } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import colors from '../../../../../styles/colors';
import { useDispatch } from 'react-redux';
import { userCommentPost } from '../../../../redux/actions/postActions';

interface Props {
    podcastId: string;
    userId: string;
    loadComment: any;
}

const CommentPost: FC<Props> = ({ podcastId, userId, loadComment }) => {
    const [showEmoji, setShowEmoji] = useState(false);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    const handleShowEmoji = () => {
        setShowEmoji(!showEmoji);
    };

    const handleEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent): void => {
        setComment((prevInput) => prevInput + emojiObject.emoji);
        setShowEmoji(false);
    };

    const onCommentPost = async () => {
        await dispatch(userCommentPost(podcastId, userId, comment));
        loadComment();
        setComment('');
    };

    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    marginTop: '20px'
                }}
            >
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <TextField
                        sx={{
                            width: '60%',
                            height: '50px',
                            '& legend': { display: 'none' },
                            '& fieldset': { top: 0 },
                            fieldset: {
                                height: '50px',
                                borderBottom: `1px solid ${colors.borderForm}`
                            },
                            input: {
                                paddingTop: 0,
                                paddingBottom: 0,
                                height: '50px'
                            },
                            textarea: {
                                height: '50px'
                            },
                            MuiInputBase: {
                                padding: 0
                            }
                        }}
                        placeholder="Add a comment..."
                        value={comment}
                        variant="filled"
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Box
                        sx={{
                            cursor: 'pointer',
                            marginLeft: '10px',
                            ':hover': {
                                opacity: 0.5
                            }
                        }}
                        onClick={() => handleShowEmoji()}
                    >
                        <InsertEmoticonIcon />
                    </Box>

                    <Box
                        sx={
                            showEmoji
                                ? {
                                      position: 'absolute',
                                      left: '0',
                                      top: '50px',
                                      display: 'block',
                                      zIndex: 1
                                  }
                                : {
                                      position: 'fixed',
                                      left: '0',
                                      top: '50px',
                                      display: 'none'
                                  }
                        }
                    >
                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </Box>

                    <Box
                        sx={
                            comment
                                ? {
                                      cursor: 'pointer',
                                      marginLeft: '10px',
                                      ':hover': {
                                          opacity: 0.5
                                      }
                                  }
                                : {
                                      cursor: 'pointer',
                                      marginLeft: '10px'
                                  }
                        }
                        onClick={comment ? onCommentPost : undefined}
                    >
                        {comment ? (
                            <IconButton>
                                <SendIcon />
                            </IconButton>
                        ) : (
                            <IconButton disabled>
                                <SendIcon />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default CommentPost;
