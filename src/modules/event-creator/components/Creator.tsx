import React, { useState } from 'react';
import { useEventCreatorState } from '../store/selector';
import { Button, Flex, RadioGroup, Text } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { validationResolver } from '../validation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

function Creator() {
  const model = useEventCreatorState();

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < model.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const currentModel = model.slice(currentStep, currentStep + 1);

  const result = validationResolver[currentStep as keyof typeof validationResolver];

  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<z.infer<typeof result>>({
    resolver: zodResolver(result),
    mode: 'onChange',
  });

  const onSubmit = async (data: z.infer<typeof result>) => {
    console.log('data', data);
    handleNextStep();
  };

  return (
    <>
      {currentModel.map(item => {
        const { data } = item;

        switch (item.type) {
          case 'select':
            return (
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex direction='column' gap='3'>
                  <RadioGroup.Root size='1'>
                    {data.map(el => (
                      <Text as='p' size='2' id={el.value} key={el.value}>
                        <Flex gap='2'>
                          <RadioGroup.Item value={el.value} id={el.value} {...register('tier1')} />

                          {el.title}
                          {el.detail}
                        </Flex>
                      </Text>
                    ))}
                  </RadioGroup.Root>

                  <Button disabled={!isValid} type='submit'>
                    {currentStep === model.length ? 'Submit' : 'Next'}
                  </Button>
                </Flex>
              </form>
            );

          default:
            break;
        }
      })}
    </>
  );
}

export default Creator;
