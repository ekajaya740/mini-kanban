import PropTypes from 'prop-types';
import { Modal } from './Modal';
import Button from '../button/Button';
import { FormProvider, useForm } from 'react-hook-form';

import NewTaskForm from '../forms/NewTaskForm';

NewTaskModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.any,
  icon: PropTypes.any,
};

export default function NewTaskModal(props) {
  const { isOpen, onClose } = props;
  const rhf = useForm();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={'New Task'}
      actions={
        <Button color={'success'} usePadding>
          aa
        </Button>
      }>
      <FormProvider {...rhf}>
        <NewTaskForm />
      </FormProvider>
    </Modal>
  );
}
