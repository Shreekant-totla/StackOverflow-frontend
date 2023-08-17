import React from 'react';
import { Box, Button, Stack } from '@chakra-ui/react';

function Pagination({ questionsPerPage, totalQuestions, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Button
          key={i}
          variant="outline"
          colorScheme={currentPage === i ? 'teal' : 'gray'}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Button>
      );
    }
    return pageNumbers;
  };

  return (
    <Box mt={4}>
      <Stack direction="row">{renderPageNumbers()}</Stack>
    </Box>
  );
}

export default Pagination;
