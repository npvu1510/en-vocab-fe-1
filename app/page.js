import VocabApp from './components/vocabApp';

const API_BASE_URL = `${process.env.API_BASE_URL || 'localhost:3005'}/api/v1`;
console.log(`API_BASE_URL: ${API_BASE_URL}`);

async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`, {
      cache: 'no-store',
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Fetching categories failed');
    return [{ id: -1, name: 'Show All' }, ...data.data];
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function fetchVocabularies() {
  try {
    const res = await fetch(`${API_BASE_URL}/dictionaries?limit=99999`, {
      cache: 'no-store',
    });
    const data = await res.json();
    if (!res.ok)
      throw new Error(data.message || 'Fetching vocabularies failed');

    return data.data.dictionaries.map((d) => ({
      ...d,
      Categories: d.Categories.map((c) => c.id),
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function Home() {
  console.log('Fetching data on server...');
  const [categories, allVocabularies] = await Promise.all([
    fetchCategories(),
    fetchVocabularies(),
  ]);

  return <VocabApp categories={categories} allVocabularies={allVocabularies} />;
}
