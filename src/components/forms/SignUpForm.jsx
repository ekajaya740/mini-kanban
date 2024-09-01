import { useFormContext } from 'react-hook-form';
import Input from '../input/Input';

export default function SignUpForm() {
  const { control } = useFormContext();
  return (
    <form className='space-y-2'>
      <Input label={'Nama'} control={control} name={'name'} />
      <Input label={'Email'} control={control} name={'email'} />
      <Input label={'Password'} control={control} name={'password'} />
      <Input
        label={'Konfirmasi Password'}
        control={control}
        name={'password_confirmation'}
      />
    </form>
  );
}
