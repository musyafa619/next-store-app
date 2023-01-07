import AuthLayout from 'components/auth/AuthLayout';
import LoginCard from 'components/auth/LoginCard';
import Header from 'components/common/Header';

export default function Login() {
  return (
    <AuthLayout>
      <Header title="Login" />
      <LoginCard />
    </AuthLayout>
  );
}
