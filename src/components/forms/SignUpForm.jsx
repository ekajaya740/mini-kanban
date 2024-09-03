import { useFormContext } from 'react-hook-form';
import Input from '../input/Input';

export default function SignUpForm() {
  const { control } = useFormContext();
  return (
    <form className='space-y-2'>
      <Input label={'Email'} control={control} name={'email'} />
      <Input
        label={'Password'}
        control={control}
        name={'password'}
        type={'password'}
      />
    </form>
  );
}
