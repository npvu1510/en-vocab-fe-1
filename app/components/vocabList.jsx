import VocabItem from './vocabItem';

const VocabList = ({ gridView, vocabularies }) => {
  return (
    <ul
      className={`vocab-list flex ${
        gridView ? `flex-row gap-y-10` : `flex-col`
      } flex-wrap justify-around`}
      id="vocab-list"
    >
      {vocabularies.map(({ id, definition, image, audio_gb, audio_us }) => (
        <VocabItem
          key={id}
          id={id}
          definition={definition}
          image={image}
          audioGb={audio_gb}
          audioUs={audio_us}
          gridView={gridView}
        />
      ))}
    </ul>
  );
};
export default VocabList;
