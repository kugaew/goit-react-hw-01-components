import user from 'user.json';
import { Profile } from 'components/Profile/Profile';

export const App = () => {
  return (
    <div>
      <Profile user={user} />;
    </div>
  );
};
