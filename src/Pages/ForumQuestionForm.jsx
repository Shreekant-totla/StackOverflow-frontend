import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Select } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../Redux/ForumPage/action'; // Update the path

function QuestionForm() {
  const dispatch = useDispatch();
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionDescription, setQuestionDescription] = useState('');
  const [language, setLanguage] = useState('JavaScript');

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      questionTitle,
      questionDescription,
      language,
      upvotes: 0,
      answers: 0,
      postedDate: new Date().toISOString(),
    };
    dispatch(addQuestion(newQuestion));
    setQuestionTitle('');
    setQuestionDescription('');
    setLanguage('JavaScript');
  };

  return (
    <Box borderWidth="1px" p={4} mb={4}>
      <form onSubmit={handleQuestionSubmit}>
        <FormControl mb={3}>
          <FormLabel>Question Title</FormLabel>
          <Input
            type="text"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Question Description</FormLabel>
          <Input
            type="textarea"
            value={questionDescription}
            onChange={(e) => setQuestionDescription(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Language</FormLabel>
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          >
<option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="Other">Other</option>

          </Select>
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Post Question
        </Button>
      </form>
    </Box>
  );
}

export default QuestionForm;
