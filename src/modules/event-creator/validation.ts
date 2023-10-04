import { z } from 'zod';

const Step1Vals = [
  {
    title: 'Birthday',
    value: 'birthday',
  },
  {
    title: 'Anniversary',
    value: 'anniversary',
  },
  {
    title: 'Dinner',
    value: 'dinner',
  },
  {
    title: 'Meetup',
    value: 'meetup',
  },
  {
    title: 'Others',
    value: 'others',
  },
];

const step1 = z.object({
  tier1: z
    .string({ invalid_type_error: 'Please select a value' })
    .refine(val => Step1Vals.map(tier => tier.value).includes(val)),
});

const step2 = z.object({
  selectedOption: z.enum(['Small', 'Medium', 'Large']),
});

export const validationResolver = {
  0: step1,
  1: step2,
};
