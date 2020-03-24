import React from 'react';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Link href='/'><Tab label="Home"></Tab></Link>
        <Link href='/get-started'><Tab label="Start"></Tab></Link>
        <Link href='/'><Tab label="Github"></Tab></Link>
      </Tabs>
    </Paper>
  );
}