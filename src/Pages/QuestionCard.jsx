import React from 'react';
import { Box, Text, Tag, Button, Stack } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteQuestion } from '../Redux/ForumPage/action'; 

function QuestionCard({ question }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.forum.questions ); 

//   console.log(currentUser,"question")

  const handleEdit = () => {
    
  };

  const handleDelete = () => {
    if (currentUser.username === question.username) {
      const confirmDelete = window.confirm('Are you sure you want to delete this question?');
      if (confirmDelete) {
        // dispatch(deleteQuestion(question.id));
        console.log("delete")
      }
    }
  };

  const handleQuestionClick = () => {
    
  };

  return (
    <Box borderWidth="1px" p={4} mb={4}>
      <Text fontWeight="bold">{question.username}</Text>
      <Text>{question.questionTitle}</Text>
      <Tag>{question.language}</Tag>
      <Text>Upvotes: {question.upvotes}</Text>
      <Text>Answers: {question.answers}</Text>
      <Text>{question.postedDate}</Text>
      <Stack direction="row" mt={2}>
        {currentUser.username === question.username && (
          <>
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </>
        )}
        <Button onClick={handleQuestionClick}>View Answers</Button>
      </Stack>
    </Box>
  )
}

export default QuestionCard;
