/* eslint-disable */
import React from 'react';
import { Grid, Box } from '@material-ui/core';
import SelectGenre from './Preference.jsx';
import ChooseName from './ChooseName.jsx';
import SuggestionView from './SuggestionView.jsx';

function Landing({ user, updateUser }) {
  const { isQuizzed } = user;

  return (
    <Box m={1} mx="auto">
      <Grid justifycontent="center">
        { isQuizzed ? (
          <div>
            <SuggestionView />
          </div>
        ) : (
          <div>
            <ChooseName user={user} updateUser={updateUser} />
          </div>
        )}
      </Grid>
    </Box>
  );
}

export default Landing;
