import { useFormContext } from 'react-hook-form';
import Input from '../input/Input';

export default function NewBoardForm() {
  const { control } = useFormContext();
  return (
    <form>
      <Input control={control} name={'title'} label={'Board Title'} />
      <Input
        control={control}
        name={'start_date'}
        label={'Start Date'}
        type={'date'}
      />
      <Input
        control={control}
        name={'end_date'}
        label={'End Date'}
        type={'date'}
      />
    </form>
  );
}
