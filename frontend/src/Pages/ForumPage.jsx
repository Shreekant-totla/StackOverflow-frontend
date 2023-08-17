import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Heading,
  Button,
  Stack,
  Select,
  SimpleGrid,
  Text,
  Tag,
} from '@chakra-ui/react';
import QuestionForm from './ForumQuestionForm';
import QuestionCard from './QuestionCard';
import Pagination from './Pagination';
import { fetchQuestions } from '../Redux/ForumPage/action';

function ForumPage() {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.forum);
  const [languageFilter, setLanguageFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const filteredQuestions = languageFilter === 'All'
    ? questions
    : questions.filter(question => question.language === languageFilter);

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.upvotes - b.upvotes;
    } else {
      return b.upvotes - a.upvotes;
    }
  });

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = sortedQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const handleFilterChange = (e) => {
    setLanguageFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(currentQuestions,"xyz")

  return (
    <Box>
      <Heading>Forum</Heading>
      <QuestionForm />
      <Stack direction="row" mt={4} mb={4}>
        <Select value={languageFilter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="Other">Other</option>
        </Select>
        <Select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="desc">Most Upvotes</option>
          <option value="asc">Least Upvotes</option>
        </Select>
      </Stack>
      <SimpleGrid columns={1} spacing={4} mt={4}>
        {currentQuestions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </SimpleGrid>
      <Pagination
        totalQuestions={sortedQuestions.length}
        questionsPerPage={questionsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Box>
  );
}

export default ForumPage;
