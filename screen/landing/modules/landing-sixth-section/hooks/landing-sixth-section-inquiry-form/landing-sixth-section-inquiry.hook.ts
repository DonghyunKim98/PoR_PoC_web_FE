import { useForm } from 'react-hook-form';

export type InquiryForm = {
  NAME: string;
  SCHOOL: string;
  EMAIL: string;
};

export const useLandingSixthSectionInquiry = () => {
  const methods = useForm<InquiryForm>({
    defaultValues: {
      NAME: undefined,
      SCHOOL: undefined,
      EMAIL: undefined,
    },
    reValidateMode: 'onChange',
    mode: 'all',
  });

  return methods;
};
