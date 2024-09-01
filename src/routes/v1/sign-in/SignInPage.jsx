import { FormProvider, useForm } from 'react-hook-form';
import SignCard from '../../../components/cards/SignCard';
import Button from '../../../components/button/Button';
import SignInForm from '../../../components/forms/SignInForm';

export default function SignInPage() {
  const rhf = useForm();

  return (
    <section className='grid items-center justify-center h-dvh'>
      <SignCard>
        <FormProvider {...rhf}>
          <div className='min-w-80 space-y-4'>
            <SignInForm />
            <div className='space-y-2'>
              <Button bordered fullWidth>
                Sign In
              </Button>
              <Button asLink href={'/v1/sign-up'}>
                Sign Up
              </Button>
            </div>
          </div>
        </FormProvider>
      </SignCard>
    </section>
  );
}
