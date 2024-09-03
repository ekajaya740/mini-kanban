import { useFormContext } from 'react-hook-form';
import Input from '../input/Input';

export default function NewTaskForm() {
  const { control } = useFormContext();
  return (
    <form>
      <Input name={'name'} control={control} label={'Name'} />
      <div className='grid grid-cols-2'>
        <Input
          name={'progress_percentage'}
          control={control}
          label={'Progress'}
        />
      </div>
    </form>
  );
}
