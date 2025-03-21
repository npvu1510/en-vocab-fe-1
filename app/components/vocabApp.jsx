'use client';

// hooks
import { useEffect, useState } from 'react';

// components
import ViewControls from './viewControls';
import VocabList from './vocabList';
import Pagination from './pagination';

const VocabApp = ({ categories, allVocabularies }) => {
  const [gridView, setGridView] = useState(false);

  // paging
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 3;

  // app status
  const [currentCategory, setCurrentCategory] = useState(-1);

  useEffect(() => {
    setCurrentPage(1);
  }, [allVocabularies, currentCategory]);

  const start = (currentPage - 1) * itemPerPage;
  const end = start + itemPerPage;
  const filteredVocabularies =
    currentCategory === -1
      ? allVocabularies
      : allVocabularies.filter((v) => v.Categories.includes(currentCategory));

  const displayedVocabularies = filteredVocabularies.slice(start, end);
  const totalPages = Math.ceil(filteredVocabularies.length / itemPerPage);

  return (
    <div className="container relative bg-orange-100 min-w-[636px] max-w-3xl h-screen mx-auto py-14 px-8">
      <ViewControls
        gridView={gridView}
        setGridView={setGridView}
        categories={categories}
        setCurrentCategory={setCurrentCategory}
      />
      <h2 className="text-2xl font-h2 py-5">
        {`School Things ${
          gridView ? 'Picture Dictionary' : 'Vocabulary List'
        } with Audio Pronunciation 📏 - English
        Vocabulary with Pictures`}
      </h2>

      <VocabList gridView={gridView} vocabularies={displayedVocabularies} />
      <div className="absolute bottom-5 left-0 right-0 flex justify-center py-4">
        <Pagination
          prefixClass="vocab"
          page={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default VocabApp;
