import { useFormContext } from 'react-hook-form';
import Input from '../input/Input';

export default function SignInForm() {
  const { control } = useFormContext();
  return (
    <form className='space-y-2'>
      <Input label={'Nama'} control={control} name={'name'} />
      <Input label={'Password'} control={control} name={'password'} />
    </form>
  );
}
