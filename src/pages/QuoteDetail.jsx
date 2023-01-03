import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments'
const QuoteDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>QuoteDetail Page</h1>
      <p>{params.quoteId}</p>

      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
