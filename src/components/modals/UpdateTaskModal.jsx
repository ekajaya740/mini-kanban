import PropTypes from 'prop-types';
import { Modal } from './Modal';
import Button from '../button/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { useUpdateTask } from '../../lib/hooks/queries/task/useTasks';
import { updateTaskRequestSchema } from '../../lib/schemas/task';
import UpdateTaskForm from '../forms/UpdateTaskForm';

UpdateTaskModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.any,
  icon: PropTypes.any,
  id: PropTypes.string,
};

export default function UpdateTaskModal(props) {
  const { isOpen, onClose, id } = props;

  const rhf = useForm();

  const updateTask = useUpdateTask(id);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={'Update Task'}
      actions={
        <Button
          color={'success'}
          usePadding
          onClick={async () => {
            const vData = await updateTaskRequestSchema.validate({
              ...rhf.getValues(),
            });

            await updateTask.mutateAsync(vData);

            rhf.resetField();

            onClose();
          }}>
          Update
        </Button>
      }>
      <FormProvider {...rhf}>
        <UpdateTaskForm />
      </FormProvider>
    </Modal>
  );
}
