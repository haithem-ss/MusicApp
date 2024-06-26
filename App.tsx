import HomeScreen from './src/app/Home';
import HomeLayout from './src/app/Layout';

export default function App(): React.JSX.Element {

  return (
    <HomeLayout>
      <HomeScreen />
    </HomeLayout>
  );
}


