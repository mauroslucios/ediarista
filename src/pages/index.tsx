import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/pageTitle/pageTitle';
import UserInformation from 'ui/components/data-display/userInformation/userInformation';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subTitle={
          'Preencha seu endereço abaixo e veja todos os profissionais da sua localidade.'
        }
      />
      <UserInformation
        name={'Diarista'}
        picture={'/img/diaristas/diarista01.jpeg'}
        rating={3}
        description={'Rio de Janeiro'}
      />
      <UserInformation
        name={'Diarista'}
        picture={'/img/diaristas/diarista02.png'}
        rating={3}
        description={'Rio de Janeiro'}
      />
    </div>
    
  );
};

export default Home;
