import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import { Modal } from './Modal';
import Button from '../button/Button';
import NewBoardForm from '../forms/NewBoardForm';
import { useCreateBoard } from '../../lib/hooks/queries/board/useBoards';
import { createBoardRequestSchema } from '../../lib/schemas/board';

NewBoardModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.any,
  icon: PropTypes.any,
};

export default function NewBoardModal(props) {
  const { isOpen, onClose } = props;
  const rhf = useForm();

  const createBoard = useCreateBoard();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={'New Task'}
      actions={
        <Button
          color={'success'}
          usePadding
          onClick={async () => {
            const vData = await createBoardRequestSchema.validate(
              rhf.getValues()
            );

            createBoard.mutate(vData);
          }}>
          Create
        </Button>
      }>
      <FormProvider {...rhf}>
        <NewBoardForm />
      </FormProvider>
    </Modal>
  );
}
