const dbConfig = {
  databaseName: 'countown-db',
  version: 1,
  stores: [
    {
      name: 'countdowns',
      id: { keyPath: 'id', autoIncrement: true },
      indices: [
        { name: 'uid', keyPath: 'uid', options: { unique: true } },
        { name: 'name', keyPath: 'name', options: { unique: false } },
        { name: 'targetDate', keyPath: 'targetDate' },
        { name: 'startDate', keyPath: 'startDate' },
      ],
    },
  ],
};

export default dbConfig;
