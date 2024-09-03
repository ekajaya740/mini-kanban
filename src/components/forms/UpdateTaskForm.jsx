import { useFormContext } from 'react-hook-form';
import Input from '../input/Input';

export default function UpdateTaskForm() {
  const { control } = useFormContext();
  return (
    <form className='w-full'>
      <Input name={'name'} control={control} label={'Name'} />
      <div className='grid grid-cols-2'>
        <Input
          name={'progress_percentage'}
          control={control}
          label={'Progress'}
          type={'number'}
        />
      </div>
    </form>
  );
}
