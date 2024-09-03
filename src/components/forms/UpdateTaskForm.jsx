import { useFormContext } from 'react-hook-form';
import Input from '../input/Input';

export default function UpdateTaskForm() {
  const { control } = useFormContext();
  return (
    <form className='w-full'>
      <Input name={'name'} control={control} label={'Name'} />
    </form>
  );
}
