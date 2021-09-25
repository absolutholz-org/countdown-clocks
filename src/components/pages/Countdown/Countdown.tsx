import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

// https://stackoverflow.com/questions/57649904/how-to-use-typescript-with-react-router-and-match
interface RouterProps {
  // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}

interface ICountdownProps extends RouteComponentProps<RouterProps> {}

function Countdown({ match, ...props }: ICountdownProps): JSX.Element {
  return <main>Countdown {match.params.id}</main>;
}

export default withRouter(Countdown);
