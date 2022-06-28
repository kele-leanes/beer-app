import { SortType, Document } from 'src/types';
import { orderByDate, timeSince } from 'src/utils/date';

beforeAll(() => {
  jest.useFakeTimers('modern').setSystemTime(new Date('2022-01-01T22:40'));
});

describe('timeSince', () => {
  const inputOutputData: {
    input: string;
    output: string;
  }[] = [
    {
      input: '2014-05-16T22:41:47.587861968Z',
      output: '7 years ago',
    },
    {
      input: '2021-05-16T22:41:47.587861968Z',
      output: '7 months ago',
    },
    {
      input: '2022-01-01T20:41:47.587861968Z',
      output: '58 minutes ago',
    },
    {
      input: '2022-01-01T22:39:47.587861968Z',
      output: 'now',
    },
  ];
  inputOutputData.forEach(data => {
    it(`should return a the creation date in relative format: ${JSON.stringify(
      data.input,
    )}`, () => {
      expect(timeSince(data.input)).toEqual(data.output);
    });
  });
});

describe('orderByDate', () => {
  const inputOutputData: {
    input: {
      sort?: SortType;
      documents: Document[];
    };
    output: Document[];
  }[] = [
    {
      input: {
        sort: SortType.DESC,
        documents: [
          {
            ID: '24c7837e-fb0f-433c-9649-5b083d5749c1',
            CreatedAt: '2014-05-16T22:41:47.587861968Z',
            UpdatedAt: '1952-11-13T17:20:44.830668764Z',
            Title: 'Chimay Grande Réserve',
            Attachments: ['Stout', 'Stout'],
            Contributors: [
              {
                ID: '31a7831f-ba04-4376-8b44-513b33155312',
                Name: 'Luciano Bergnaum',
              },
              {
                ID: '7f2ecd11-f55c-40e4-a73b-2e6c037b4e9e',
                Name: 'Nayeli Bins',
              },
            ],
            Version: '4.9.16',
          },
          {
            ID: '89707ad1-914b-4959-b032-0b922ec8e4b5',
            CreatedAt: '1899-12-20T02:44:41.955173793Z',
            UpdatedAt: '1936-07-23T01:33:47.57003883Z',
            Title: 'Hennepin',
            Attachments: ['Belgian And French Ale', 'India Pale Ale'],
            Contributors: [
              {
                ID: '730c9655-9792-4364-9011-654503c502cb',
                Name: 'Bennett Waelchi',
              },
              {
                ID: 'fff4eb57-a28f-447c-9642-6650d9883a0e',
                Name: 'Angel Abernathy',
              },
              {
                ID: '7e5599cc-e58d-4012-a465-0caa21cb11e4',
                Name: 'Darrion Mertz',
              },
              {
                ID: '3c7ef708-4f37-4003-9890-68aebaa0ff49',
                Name: 'Carlee Zemlak',
              },
            ],
            Version: '4.4.6',
          },
        ],
      },
      output: [
        {
          ID: '24c7837e-fb0f-433c-9649-5b083d5749c1',
          CreatedAt: '2014-05-16T22:41:47.587861968Z',
          UpdatedAt: '1952-11-13T17:20:44.830668764Z',
          Title: 'Chimay Grande Réserve',
          Attachments: ['Stout', 'Stout'],
          Contributors: [
            {
              ID: '31a7831f-ba04-4376-8b44-513b33155312',
              Name: 'Luciano Bergnaum',
            },
            {
              ID: '7f2ecd11-f55c-40e4-a73b-2e6c037b4e9e',
              Name: 'Nayeli Bins',
            },
          ],
          Version: '4.9.16',
        },
        {
          ID: '89707ad1-914b-4959-b032-0b922ec8e4b5',
          CreatedAt: '1899-12-20T02:44:41.955173793Z',
          UpdatedAt: '1936-07-23T01:33:47.57003883Z',
          Title: 'Hennepin',
          Attachments: ['Belgian And French Ale', 'India Pale Ale'],
          Contributors: [
            {
              ID: '730c9655-9792-4364-9011-654503c502cb',
              Name: 'Bennett Waelchi',
            },
            {
              ID: 'fff4eb57-a28f-447c-9642-6650d9883a0e',
              Name: 'Angel Abernathy',
            },
            {
              ID: '7e5599cc-e58d-4012-a465-0caa21cb11e4',
              Name: 'Darrion Mertz',
            },
            {
              ID: '3c7ef708-4f37-4003-9890-68aebaa0ff49',
              Name: 'Carlee Zemlak',
            },
          ],
          Version: '4.4.6',
        },
      ],
    },
    {
      input: {
        sort: SortType.ASC,
        documents: [
          {
            ID: '24c7837e-fb0f-433c-9649-5b083d5749c1',
            CreatedAt: '2014-05-16T22:41:47.587861968Z',
            UpdatedAt: '1952-11-13T17:20:44.830668764Z',
            Title: 'Chimay Grande Réserve',
            Attachments: ['Stout', 'Stout'],
            Contributors: [
              {
                ID: '31a7831f-ba04-4376-8b44-513b33155312',
                Name: 'Luciano Bergnaum',
              },
              {
                ID: '7f2ecd11-f55c-40e4-a73b-2e6c037b4e9e',
                Name: 'Nayeli Bins',
              },
            ],
            Version: '4.9.16',
          },
          {
            ID: '89707ad1-914b-4959-b032-0b922ec8e4b5',
            CreatedAt: '1899-12-20T02:44:41.955173793Z',
            UpdatedAt: '1936-07-23T01:33:47.57003883Z',
            Title: 'Hennepin',
            Attachments: ['Belgian And French Ale', 'India Pale Ale'],
            Contributors: [
              {
                ID: '730c9655-9792-4364-9011-654503c502cb',
                Name: 'Bennett Waelchi',
              },
              {
                ID: 'fff4eb57-a28f-447c-9642-6650d9883a0e',
                Name: 'Angel Abernathy',
              },
              {
                ID: '7e5599cc-e58d-4012-a465-0caa21cb11e4',
                Name: 'Darrion Mertz',
              },
              {
                ID: '3c7ef708-4f37-4003-9890-68aebaa0ff49',
                Name: 'Carlee Zemlak',
              },
            ],
            Version: '4.4.6',
          },
        ],
      },
      output: [
        {
          ID: '89707ad1-914b-4959-b032-0b922ec8e4b5',
          CreatedAt: '1899-12-20T02:44:41.955173793Z',
          UpdatedAt: '1936-07-23T01:33:47.57003883Z',
          Title: 'Hennepin',
          Attachments: ['Belgian And French Ale', 'India Pale Ale'],
          Contributors: [
            {
              ID: '730c9655-9792-4364-9011-654503c502cb',
              Name: 'Bennett Waelchi',
            },
            {
              ID: 'fff4eb57-a28f-447c-9642-6650d9883a0e',
              Name: 'Angel Abernathy',
            },
            {
              ID: '7e5599cc-e58d-4012-a465-0caa21cb11e4',
              Name: 'Darrion Mertz',
            },
            {
              ID: '3c7ef708-4f37-4003-9890-68aebaa0ff49',
              Name: 'Carlee Zemlak',
            },
          ],
          Version: '4.4.6',
        },
        {
          ID: '24c7837e-fb0f-433c-9649-5b083d5749c1',
          CreatedAt: '2014-05-16T22:41:47.587861968Z',
          UpdatedAt: '1952-11-13T17:20:44.830668764Z',
          Title: 'Chimay Grande Réserve',
          Attachments: ['Stout', 'Stout'],
          Contributors: [
            {
              ID: '31a7831f-ba04-4376-8b44-513b33155312',
              Name: 'Luciano Bergnaum',
            },
            {
              ID: '7f2ecd11-f55c-40e4-a73b-2e6c037b4e9e',
              Name: 'Nayeli Bins',
            },
          ],
          Version: '4.9.16',
        },
      ],
    },
  ];
  inputOutputData.forEach(data => {
    it(`should return an array of Documents ordered by date: ${JSON.stringify(
      data.input,
    )}`, () => {
      expect(orderByDate(data.input)).toEqual(data.output);
    });
  });
});
