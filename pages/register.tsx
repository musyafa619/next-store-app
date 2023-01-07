import AuthLayout from 'components/auth/AuthLayout';
import RegisterCard from 'components/auth/RegisterCard';
import Header from 'components/common/Header';

export default function Register() {
  return (
    <AuthLayout>
      <Header title="Register" />
      <RegisterCard />
    </AuthLayout>
  );
}
