import QuoteList from '../components/quotes/QuoteList';

export const DUMMY_QUOTES = [
  { id: 'q1', author: 'Bayo', text: 'Learning React is fun!' },
  { id: 'q2', author: 'devBayo', text: 'Learning React is great!' },
];

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
