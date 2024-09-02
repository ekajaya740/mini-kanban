import { FormProvider, useForm } from 'react-hook-form';
import SignUpForm from '../../../../components/forms/SignUpForm';
import SignCard from '../../../../components/cards/SignCard';
import Button from '../../../../components/button/Button';
import { useSignUp } from '../../../../lib/hooks/queries/signUp/useSignUp';
import { authSignUpRequestSchema } from '../../../../lib/schemas/auth';

export default function SignUpPage() {
  const rhf = useForm();

  const signUpMutate = useSignUp();
  return (
    <section className='grid items-center justify-center h-dvh'>
      <SignCard>
        <FormProvider {...rhf}>
          <div className='min-w-80 space-y-4'>
            <h1 className='text-center font-bold text-2xl'>Sign Up</h1>
            <SignUpForm />
            <div className='space-y-2'>
              <Button
                bordered
                fullWidth
                onClick={async () => {
                  const vData = await authSignUpRequestSchema.validate(
                    rhf.getValues()
                  );

                  signUpMutate.mutate(vData);
                }}>
                Sign Up
              </Button>
              <Button asLink href={'/v1/auth/sign-in'}>
                Sign In
              </Button>
            </div>
          </div>
        </FormProvider>
      </SignCard>
    </section>
  );
}
