import React from 'react';

const StatusContext = React.createContext({
  status: 'pending',
  id: 0
});

export default StatusContext;