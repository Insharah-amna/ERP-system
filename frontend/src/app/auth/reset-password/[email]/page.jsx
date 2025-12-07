import ResetPassword from '@/components/log/ResetPassword';

export default async function Page({ params }) {
  const { email } = await params;

  return <ResetPassword email={email} />;
}
