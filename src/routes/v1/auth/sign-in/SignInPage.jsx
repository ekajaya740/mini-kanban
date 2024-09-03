import { FormProvider, useForm } from 'react-hook-form';
import SignCard from '../../../../components/cards/SignCard';
import Button from '../../../../components/button/Button';
import SignInForm from '../../../../components/forms/SignInForm';
import { useSignIn } from '../../../../lib/hooks/queries/signIn/useSignIn';
import { authSignInRequestSchema } from '../../../../lib/schemas/auth';

export default function SignInPage() {
  const rhf = useForm();

  const signInMutate = useSignIn();

  return (
    <section className='grid items-center justify-center h-dvh'>
      <SignCard>
        <FormProvider {...rhf}>
          <div className='min-w-80 space-y-8'>
            <h1 className='text-center font-bold text-2xl'>Sign In</h1>
            <SignInForm />
            <div className='space-y-3'>
              <Button
                bordered
                fullWidth
                onClick={async () => {
                  const vData = await authSignInRequestSchema.validate(
                    rhf.getValues()
                  );

                  signInMutate.mutate(vData);
                }}>
                Sign In
              </Button>
              <Button asLink href={'/v1/auth/sign-up'}>
                Sign Up
              </Button>
            </div>
          </div>
        </FormProvider>
      </SignCard>
    </section>
  );
}
