import { useFormContext } from 'react-hook-form';
import Input from '../input/Input';

export default function NewTaskForm() {
  const { control } = useFormContext();
  return (
    <form>
      <Input name={'name'} control={control} />
      <div className='grid grid-cols-4'>
        <Input name={'progress_percentage'} control={control} />
      </div>
    </form>
  );
}
