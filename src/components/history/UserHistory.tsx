import { makeStyles } from '@mui/styles';
import * as React from 'react';

const useStyles = makeStyles({
  history: {
    border: '1px solid #ddd',
    borderCollapse: 'collapse',
    width: '100%',
    '& th, & td': {
      border: '1px solid #ddd',
      padding: 8,
      textAlign: 'left',
    },
    '& tr:nth-child(even)': {
      backgroundColor: '#f2f2f2',
    },
  },
});

interface Trip {
  date: string;
  location: string;
  distance: number;
}

interface Props {
  trips: Trip[];
}

export const UserHistory: React.FC<Props> = ({ trips }) => {
  const classes = useStyles();
  return (
    <table className={classes.history}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Location</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>
        {trips.map((trip) => (
          <tr key={trip.date}>
            <td>{trip.date}</td>
            <td>{trip.location}</td>
            <td>{trip.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
